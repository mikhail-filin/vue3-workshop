<script>
export default {
  data() {
    return {
      newCharacter: {
        name: "",
        element: [],
      },
    };
  },
  emits: ["addNewCharacter"],
  methods: {
    addNewCharacter() {
      this.$emit("addNewCharacter", this.newCharacter);
      this.newCharacter = {
        name: "",
        element: [],
      };
    },
  },
};
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
