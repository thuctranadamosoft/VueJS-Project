<template>
  <div class="signin">
    <form class="signin-form" @submit.prevent="onSubmitForm($event)">
      <h1 class="signin-title">SignIn</h1>
      <div class="form-user">
        <label for="email">Email <span class="require">(*)</span></label>
        <input autocomplete="off" type="text" name="email" placeholder="Email" v-model=username />
      </div>
      <div class="form-password">
        <label for="password">Password <span class="require">(*)</span></label>
        <input autocomplete="off" type="password" name="password" placeholder="Password" v-model="password" />
      </div>
      <p class="signin-forgot">Forgot password ?</p>
      <button class="btn-submit" type="submit">
        Sign in
      </button>
    </form>
  </div>
</template>

<script lang="ts">
  import {ref, computed} from 'vue'
  import {minLength, required} from "@vuelidate/validators";
  import useValidate from "@vuelidate/core";

  export default {
    name: 'SignIn',
    setup() {
      const formGroup = ref({
        username: '',
        password: ''
      })
      const rules = computed(() => {
        const validators = {
          username: {required},
          password: {required, minLength: minLength(6)},
        }
        return validators
      })
      const v$ = useValidate(rules, formGroup)
    }
  }
</script>

<style lang="scss">
/*@import "../assets/base-color.scss";*/

.signin {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*background-image: url('../assets/login.png');*/
  background-repeat: no-repeat;
  background-size: cover;

  .signin-form {
    width: 350px;

    .signin-title {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1rem;
      text-align: center;
    }

    .form-user {
      margin-bottom: 1rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
      }

      input {
        display: block;
        width: 100%;
        padding: 0.55rem 1rem;
        color: #85858a;
        font-size: 0.75rem;
        background-color: #fff;
        border: 1px solid #ededed;
        border-radius: 0.25rem;
        outline: none;
      }
    }

    .form-password {
      @extend .form-user;
    }
  }

  .signin-forgot {
    margin-bottom: 1rem;
    display: block;
    text-align: end;
    font-size: 0.75rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .btn-submit {
    display: block;
    margin: 0 auto;
    outline: none;
    border: none;
    padding: 0.5rem 1.5rem;
    color: red;
    background-color: #42b983;
  }


}
</style>


