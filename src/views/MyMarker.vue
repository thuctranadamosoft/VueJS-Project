<template>
    <h2>My Marker component</h2>
  {{userLocation}}- 'in my marker'
  {{userGeolocation}}
</template>

<script>
  import {inject, onMounted, toRefs} from 'vue'
  export default {
    name: 'MyMarker',
    props: {
      myMarkers: 'gg'
    },
    setup(props) {
      const user = toRefs(props)
      const userLocation = inject('location', 'The Universe')
      const userGeolocation = inject('geolocation')
      onMounted(() => {
        console.log('props: ', user.myMarkers.value)
      })
      return {
        userLocation,
        userGeolocation
      }
    }
  }
</script>

<style scoped>

</style>
