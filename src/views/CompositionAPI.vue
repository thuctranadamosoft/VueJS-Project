<template>
<h1>
  Child Composition API component!
</h1>
  <h2>
    {{inputProps}}
  </h2>
  <div class="composition">
    <button @click="stt = Math.random(1, 199)">click</button>
  </div>
  <div class="">
    <button @click="sttBig = Math.random(199, 300)">click Big</button>
  </div>
  <div id="count" class="">
    Stt: {{sttComputed}}
  </div>
  <div ref="el" class="">
    Stt big: {{sttComputedBig}}
  </div>
  <div style="color: red">
    <slot name="slot-first"></slot>
  </div>
  <button @click="sendEmit">Emit</button>
  <div ref="el"></div>
</template>

<script>
  import {onMounted, onUnmounted, onUpdated, ref, watch, computed, toRefs, watchEffect} from 'vue'
  export default {
    props: {
      inputProps: ''
    },

    name: 'CompositionAPI',
    setup(props, { attrs, slots, emit, expose,  }) {
      const stt = ref(123);
      const sttBig = ref(123);
      const title = toRefs(props)
      const publicCount = ref(0)
      const privateCount = ref(0)
      const el = ref()
      const count = ref(1)
      const intervalId = setInterval(() => {
        count.value++;
        console.log(count.value)
      }, 1000)
      onMounted(() => {
        console.log('prop: ', title.inputProps.value)
        console.log('attrs: ', attrs);
        console.log('slots: ', slots);
        expose({ count: publicCount })
        console.log('expose: ', expose);
        console.log('reffff: ', el.value)

      })
      onUpdated(() => {
        console.log('onUpdated')
        console.log(document.getElementById('count').textContent)
      })
      watch([stt, sttBig], ([newStt, oldStt], [newSttBig, oldSttBig]) => {
        console.log('stt - new -old: ', stt.value, newStt, oldStt)
        console.log('sttBig - new -old: ', sttBig.value, newSttBig, oldSttBig)
      }, { immediate: true, deep: true, })
      watchEffect(() => {
        console.log('watchEffect: ', stt.value)
      })
      const sttComputed = computed(() => Math.abs(stt.value))
      const sttComputedBig = computed(() => Math.abs(sttBig.value))
      const sendEmit = () => {
        emit('send', 'send Emit');
      }
      onUnmounted(() => {
        console.log('onUnmounted')
        clearInterval(intervalId)
      })
      return {
        stt,
        sttBig,
        sttComputed,
        sttComputedBig,
        sendEmit,

      }
    }
  }
</script>

<style scoped>

</style>
