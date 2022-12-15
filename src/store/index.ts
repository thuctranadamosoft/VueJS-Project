import { createStore } from 'vuex'
import axios from 'axios'
import { UserModule } from '@/store/modules/UserModule'
import { CharacterModule } from '@/store/modules/CharacterModule'

export default createStore({
  modules: {
    user: UserModule,
    character: CharacterModule
  }
})
