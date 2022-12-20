<template>
    <h1>
      ParentComposition Component!!!!
    </h1>
  <CompositionAPI class="demo demo2" :inputProps="'test props'" @send="getEmit">
    <template v-slot:slot-first>
      123123123
    </template>

  </CompositionAPI>
</template>

<script>
  import CompositionAPI from './CompositionAPI'
  export default {
    name: 'ParentCompositionAPI',
    components: {
      CompositionAPI
    },
    setup() {
      const getEmit = (emit) => {
        console.log('get emit: ', emit);
      }
      return {
        getEmit
      }
    }
  }
</script>

<style scoped>

</style>
