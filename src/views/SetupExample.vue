<template>
  <h1>Setup Example</h1>
  {{userLocation}}
  {{temValue}}
  <div class="">
    {{cpLoading}}
  </div>
  <div v-for="character in cpCharacters">
    {{character}}
    <button @click="handleDelete(character)">X</button>
  </div>


</template>

<script>
  import { computed, inject, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import { temp } from '@/models/temp'

  export default {
    name: 'SetupExample',
    setup () {
      const store = useStore()
      const userLocation = inject('location', 'The Universe')
      const temValue =  temp.value.text
      onMounted(() => {
        store.dispatch('fetchUsers')
      })
      const fetchAll = () => {
      }
      const cpCharacters = computed(() => store.getters.selectUsers)
      const cpLoading = computed(() => store.getters.selectLoading)
      const handleDelete = async (character) =>  {
        try {
          await store.dispatch('removeUser', character)
          alert('deleted')
        } catch (e) {
          alert(e)
        }
      }

      return {
        fetchAll,
        cpCharacters,
        cpLoading,
        handleDelete,
        userLocation,
        temValue
      }
    },
  }
</script>

<style scoped>

</style>
