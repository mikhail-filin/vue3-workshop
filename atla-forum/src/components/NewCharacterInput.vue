<script>
export default {
  data() {
    return {
      characterList: [],
      newCharacter: {
        name: "",
        element: [],
      },
    }
  },
  methods: {
    addNewCharacter() {
      this.characterList.push(this.newCharacter);
      this.newCharacter = { name: "" };
    },
  }
}
</script>
<template>
  <h2>New Character</h2>
  <pre>{{ newCharacter }}</pre>
  <label for="character-name">Name</label>
  <input
      type="text"
      v-model="newCharacter.name"
      @keyup.enter="addNewCharacter"
  />
</template>
