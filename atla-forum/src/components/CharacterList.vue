<script>
export default {
  data() {
    return {
      characterList: [
        {
          name: "Aang",
          element: ["Air", "Earth", "Water", "Fire"],
        },
        {
          name: "Zuko",
          element: ["Fire"],
        },
        {
          name: "Toph",
          element: ["Earth"],
        },
        {
          name: "Katara",
          element: ["Water"],
        },
      ],
      favoriteList: []
    }
  },
  methods: {
    favoriteCharacter(character) {
      this.favoriteList.push(character);
    },
  }
}
</script>
<template>
  <h2>Characters</h2>
  <p v-if="characterList.length === 0">There are no characters</p>
  <ul v-else-if="characterList.length % 2 === 0">
    <li
        v-for="(character, index) in characterList"
        :key="`even-character-${index}`"
    >
      <p>{{ character.name }}</p>
      <button @click="favoriteCharacter(character)">⭐ Favorite</button>
    </li>
  </ul>
  <p v-else>There are odd characters!</p>
</template>
