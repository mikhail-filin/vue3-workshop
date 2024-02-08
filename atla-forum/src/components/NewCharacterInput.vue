<script>
export default {
  props: {
    characterList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      newCharacter: {
        name: "",
        element: [],
      }
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
