<template>
  <div class="container">
    <h1>Dashboard component</h1>

    <table>
      <tr>
        <th v-for="(userKey, index) in Object.keys(getUsers[0])" :key="index">{{userKey}}</th>
        <th>Delete</th>
      </tr>
      <tr v-for="(user, index) in getUsers" :key="index">
        <td :class="{'design-name': userKey === 'name'}" v-for="(userKey, index) in Object.keys(getUsers[0])" :key="index">
          <p @click="onDetailUser(user, userKey)">{{user[userKey]}}</p>
        </td>
        <td><button @click="onDeleteUser(user)">X</button></td>
      </tr>
    </table>
    <Modal v-if="isDetailModal" :selectUser="selectUser"
           @update="(user) => updateUserFromModal(user)" @close="() => this.isDetailModal = false"
           @testCommit="(commit) => {testCommit(commit)}"
    >
      {{selectUser}}
    </Modal>
  </div>
</template>

<script>
import Modal from './../components/Modal.vue'
export default {
  name: 'dash-board',
  data () {
    return {
      users: [],
      isDetailModal: false,
      selectUser: {}
    }
  },
  created () {
    console.log('this', this.$store)
    this.$store.dispatch('fetchUsers')
    this.onDeleteUser()
  },
  mounted () {
    console.log('selectUsers', this.users)
  },
  computed: {
    getUsers () {
      return this.$store.getters.selectUsers.map(m => {
        const a = {
          id: m.id,
          ...m
        }
        return a
      })
    }
  },
  setup() {
    const testCommit = (commit) => {
      console.log('commit: ', commit)
    }
    return {
      testCommit
    }
  },
  watch: {
    user (value) {
      console.log('value', value)
    }
  },
  methods: {
    onDetailUser (user, userKey) {
      console.log(userKey)
      if (userKey === 'name') {
        console.log(user)
        this.isDetailModal = true
        this.selectUser = user
      }
    },
    async updateUserFromModal(user) {
      try {
        console.log('updateUserFromModal: ', user)
        this.$store.dispatch('updateUser', user)
        this.isDetailModal = false
      } catch (e) {
        alert(e)
      }
    },
    async onDeleteUser(user) {
      this.$store.dispatch('removeUser', user)
    },
  },
  components: {
    Modal
  }

}
</script>

<style scoped>
  table, td, th {
    border: 1px solid;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  .design-name {
    color: blue;
    cursor: pointer;
  }
  td.design-name:hover {
    text-decoration: underline;
  }
  .btn {
    border: solid black 1px;
  }
</style>
