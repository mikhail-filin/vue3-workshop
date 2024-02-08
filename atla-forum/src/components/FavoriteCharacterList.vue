<script>
  export default {
    data() {
      return {
        favoriteList: []
      }
    }
  }
</script>
<template>
  <h2>Favorite Characters</h2>
  <ul v-if="favoriteList.length > 0">
    <li
        v-for="(character, index) in favoriteList"
        :key="`odd-character-${index}`"
    >
      {{ character }}
    </li>
  </ul>
  <p v-else>No favorite characters yet!</p>
</template>
