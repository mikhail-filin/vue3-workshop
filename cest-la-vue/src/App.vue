<script>
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";
import UserPage from "./components/UserPage.vue";

export default {
  components: {
    HomePage,
    LoginPage,
    UserPage,
  },
  data: () => ({
    currentPage: "User",
  }),
  computed: {
    renderPage() {
      return this.currentPage + "Page";
    },
  },
  methods: {
    showHomePage() {
      this.currentPage = "Home";
    },
    showLoginPage() {
      this.currentPage = "Login";
    },
    showUserPage() {
      this.currentPage = "User";
    },
  },
};
</script>

<template>
  <header class="header">
    <span class="logo">
      <img src="@/assets/vue-heart.png" width="30" />C'est La Vue
    </span>
    <nav class="nav">
      <a href="#" @click.prevent="showHomePage">Home</a>
      <a href="#" @click.prevent="showLoginPage">Login</a>
      <a href="#" @click.prevent="showUserPage">User</a>
    </nav>
  </header>

  <Suspense>
    <component :is="renderPage" :key="renderPage" />

    <template v-slot:fallback> Data is loading... </template>
  </Suspense>
</template>
