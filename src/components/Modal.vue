<template>
  <!-- Trigger/Open The Modal -->
  <button id="myBtn">Open Modal</button>

  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      {{userLocation}}
      {{temValue}}
      <slot ></slot>
      <button :class="'btn-style'"  @click="onUpdate(selectUser)">Update</button>
      <button @click="testCommit">Test commit</button>
    </div>
  </div>
</template>
<script>
  import { inject, onMounted } from 'vue'
  import { temp } from '@/models/temp'

  export default {
    name: 'Modal-a',
    emits: ['testCommit'],

    props: {
      selectUser: {},
    },
    setup(props, {emit}) {
      const temValue =  temp.value.text
      const userLocation = inject('location', 'The Universe')
        const userGeolocation = inject('geolocation')
      onMounted(() => {


      })
      const testCommit = () => {
        console.log('zo day')
        emit('testCommit', 'test commit in setup')
      }
      return {
        userLocation,
        userGeolocation,
        temValue,
        testCommit
      }
    },
    methods: {
      close () {
        this.$emit('close')
      },
      onUpdate (user) {
        user.name = 'thuc'
        console.log('user update', user)
        this.$emit('update', user)
      }
    },
    watch: {
      selectUser (val, oldVal) {
        console.log('new selectUser: ', val)
        console.log('old selectUser: ', oldVal)
      }
    }
  }
</script>

<style scoped>
  /* The Modal (background) */
  .modal {
    /*display: none; !* Hidden by default *!*/
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .btn-style {
    display: block;
  }
</style>
