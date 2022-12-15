<template>
  <nav>
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/setup-example">Setup Example</router-link>
    <router-link to="/sign-in">Sign In</router-link>
    <router-link to="/my-map">My Map</router-link>
    <router-link to="/form-validation">Form Validation</router-link>
    <router-link to="/form-setup">Form Setup</router-link>
  </nav>
  <router-view/>
</template>
<script>
  import { provide } from 'vue'

  export default {
    name: 'app',
    setup() {
      provide('location', 'North Pole')
      provide('geolocation', {
        longitude: 90,
        latitude: 135
      })
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
