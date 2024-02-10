<script>
export default {
  data: () => ({
    users: [],
  }),
  methods: {
    async fetchUserData() {
      this.users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
    },
  },
  created() {
    this.fetchUserData();
  },
};
</script>

<template>
  {{ users }}
</template>
