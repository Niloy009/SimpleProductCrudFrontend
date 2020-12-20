<template>
  <div>
    <v-app-bar
        color="teal accent-4"
        dense
        dark
    >
      <router-link to="/">
        <v-toolbar-title>WeDev FrontEnd</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/all-products">
        <v-btn text>
          All Products
        </v-btn>
      </router-link>
      <router-link to="/login">
        <v-btn text>
          Login
        </v-btn>
      </router-link>
      <router-link to="/register">
        <v-btn text>
          Register
        </v-btn>
      </router-link>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data: () => ({
    links: [
      {text: 'Home', route: '/'},
      {text: 'Login', route: '/login'},
      {text: 'Register', route: '/register'},
      {text: 'All Products', route: '/all-products'},
    ]
  }),
}
</script>
