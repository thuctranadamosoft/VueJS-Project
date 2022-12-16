<template>
  <h1>
    FormSetup component!
  </h1>
  <form action="" @submit.prevent="submitForm()">
    <div class="root">
      <h2>Create an Account</h2>
      <p>
        <input type="text" placeholder="Email" v-model="state.email"/>
        <span v-if="v$.email.$error">
<!--        <span v-if="v$.email.email.$invalid">-->
          <!--          Field email sai định dạng-->
          <!--        </span>-->
          <!--        <span v-if="v$.email.required.$invalid">-->
          <!--          Field email không được để trống-->
          <!--        </span>-->
          <!--        <span v-if="v$.email.mustBeLearnVue.$invalid">-->
          <!--          Field email custom validate-->
          <!--        </span>-->
        {{ v$.email.$errors[0].$message }}
      </span>
      </p>
      <p>
        <input type="password" placeholder="Password" v-model="state.password.password"/>
        <span v-if="v$.password.password.$error">
        {{ v$.password.password.$errors[0].$message }}
      </span>
      </p>
      <p>
        <input type="password" placeholder="Confirm Password" v-model="state.password.confirm"/>
        <span v-if="v$.password.confirm.$error">
        {{ v$.password.confirm.$errors[0].$message }}
      </span>
      </p>
      <button type="submit">Submit</button>
    </div>
  </form>

  <router-view></router-view>

</template>

<script lang="ts">
  import {reactive, computed} from 'vue'
  import useValidate from '@vuelidate/core'
  import {required, email, minLength, sameAs, helpers} from '@vuelidate/validators'
  import {onMounted} from "@vue/composition-api";
  import {useRoute, useRouter} from "vue-router";

  export default {
    name: 'FormSetup',
    setup() {
      const router = useRouter()
      const state = reactive({
        email: '',
        password: {
          password: '',
          confirm: '',
        },
      })
      const rules = computed(() => {
        const validators = {
          email: {required, email, mustBeLearnVue: helpers.withMessage('Must be learnvue', mustBeLearnVue),},
          password: {
            password: {required, minLength: minLength(6)},
            confirm: {required, sameAs: sameAs(state.password.password)},
          }
        }
        return validators
      })
      const mustBeLearnVue = (value: string) => value.includes('learnvue')
      const v$ = useValidate(rules, state)
      const submitForm = () => {
        v$.value.$validate()
        if (!v$.value.$error) {
          // if ANY fail validation
          alert('Form successfully submitted.')
          router.push({path: '/sign-in'})
        } else {
          alert('Form failed validation')
          console.log('v$ email', v$)
        }
      }



      return {state, v$, submitForm}
    }
  }
</script>

<style lang="css" scoped>
  .root {
    width: 400px;
    margin: 0 auto;
    background-color: #fff;
    padding: 30px;
    margin-top: 100px;
    border-radius: 20px;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid #ddd;
    font-size: 1em;
    padding: 5px 0;
    margin: 10px 0 5px 0;
    width: 100%;
  }

  button {
    background-color: #3498db;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    color: white;
  }
  span {
    color: red;
  }
</style>
