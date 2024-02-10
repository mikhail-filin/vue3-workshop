<script>
import { computed, ref } from "vue";

export default {
  async setup() {
    const users = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json());
    const appName = ref("Some name");
    const appNameUppercase = computed(() => {
      return appName.value.toUpperCase();
    });

    function changeName() {
      appName.value = "Some other name";
    }

    return {
      users,
      appName,
      appNameUppercase,
      changeName,
    };
  },
};
</script>

<template>
  <h1>{{ appName }}</h1>
  <h1>{{ appNameUppercase }}</h1>
  <button @click="changeName">Change name</button>
  {{ users }}
</template>
