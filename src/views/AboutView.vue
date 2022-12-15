<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form action=""></form>
  </div>
  <form ref="ref1" @submit.prevent="onSubmit(state)">
    <input type="text" v-model="state.name">
    <input type="text" v-model="state.age">
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { reactive, computed } from 'vue'

export default {
  name: 'about-a',
  data () {
    return {
      state: reactive({
        name: '',
        age: ''
      })
    }
  },
  watch: {
    name (value: any) {
      console.log('name: ', value)
    },
    age (value: any) {
      console.log('age: ', value)
    }
  },
  methods: {
    onSubmit (state: any) {
      console.log(state)
    }
  }
}
</script>
