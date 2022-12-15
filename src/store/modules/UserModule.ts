import axios from 'axios'
import User from '@/models/user'
import { USER_ENUMS } from '@/store/enums/UserEnums'
import {Api} from "./../../config/api"
const API = Api.url
export const UserModule = {
  state: {
    users: []
  },
  getters: {
    selectUsers: (state: any) => state.users
  },
  mutations: {
    [USER_ENUMS.SET_USERS] (state: any, users: User) {
      state.users = users
    },
    [USER_ENUMS.UPDATE_USER] (state: any, user: any) {
      const objIndex = state.users.findIndex((obj: any) => obj.id === user.id)
      state.users[objIndex] = user
    },
    [USER_ENUMS.REMOVE_USER] (state: any, user: any) {
      const newUsers = state.users.filter((m: any) => m.id !== user.id)
      state.users = newUsers
    }
  },
  actions: {
    async fetchUsers ({ commit }: any) {
      try {
        const data = await axios.get(API)
        console.log('data in store: ', data)
        commit(USER_ENUMS.SET_USERS, data.data)
      } catch (e) {
        alert(e)
        console.log(e)
      }
    },
    async updateUser ({ commit }: any, payload: any) {
      console.log('upppp', payload)
      try {
        await axios.put(API + payload.id, payload)
        commit(USER_ENUMS.UPDATE_USER, payload)

      } catch (e) {
        alert(e)
        console.log(e)
      }
    },
    async removeUser({ commit }: any, payload: any) {
      try {
        await axios.delete(API + payload.id, payload)
        commit(USER_ENUMS.REMOVE_USER, payload)
      } catch (e) {
        alert(e)
      }
    }

  }
}
