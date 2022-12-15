import {USER_ENUMS} from "@/store/enums/UserEnums";
import {CHARACTER_ENUMS} from "@/store/enums/CharacterEnums";
import User from "@/models/user";
import axios from 'axios'
import {Api} from "@/config/api";

export const CharacterModule = {
  state: {
    characters: [],
    loadingState: false
  },
  getters: {
    selectCharacters: (state:any) => state.characters,
    selectLoading: (state: any) => state.loadingState
  },
  mutations: {
    [CHARACTER_ENUMS.SET_CHARACTERS] (state: any, characters: any) {
      state.characters = characters
    },
    [CHARACTER_ENUMS.SET_LOADING] (state: any, loadingState: any) {
      state.loadingState = loadingState
    },
  },
  actions: {
    async fetchAll({commit}: any) {
      try {
        commit(CHARACTER_ENUMS.SET_LOADING, 'loading')
        const data = await axios.get(Api.url)
        console.log('data: ',data.data)
        commit(CHARACTER_ENUMS.SET_CHARACTERS, data.data)

        commit(CHARACTER_ENUMS.SET_LOADING, 'success')
      } catch (e) {
        alert(e)
        commit(CHARACTER_ENUMS.SET_LOADING, 'error')
      }
    }
  }
}
