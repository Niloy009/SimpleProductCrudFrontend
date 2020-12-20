<template>
  <v-container>
    <v-form @submit.prevent="login" class="py-10">
      <v-text-field
          v-model="form.email"
          label="E-mail"
          required
      ></v-text-field>
      <v-text-field
          v-model="form.password"
          label="Password"
          type="password"
          required
      ></v-text-field>


      <v-btn
          color="success"
          class="mr-4"
          type="submit"
      >
        Login
      </v-btn>

    </v-form>
  </v-container>
</template>

<script>
import User from "../Helper/User";
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    login(){
      User.login(this.form);
    }
  }
}
</script>
