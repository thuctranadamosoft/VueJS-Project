<template>
  <h1>My Map component</h1>
  <MyMarker :my-markers="'cc'"></MyMarker>
</template>

<script>
  import MyMarker from '@/views/MyMarker'
  import {provide, onMounted} from 'vue'
  import Modal from './../components/Modal.vue'
  import {temp} from './../models/temp.ts'
  export default {
    name: 'MyMap',
    components: {
      MyMarker,
      Modal
    },
    setup() {
      provide('location', 'North Pole')
      provide('geolocation', {
        longitude: 90,
        latitude: 135
      })
      onMounted(() => {
        temp.value.setText('good job')
      })
      return {
        temp
      }
    }
  }
</script>

<style scoped>

</style>
