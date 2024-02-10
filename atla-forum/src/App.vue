<script>
import CharacterList from "./components/CharacterList.vue";
import FavoriteCharacterList from "./components/FavoriteCharacterList.vue";
import Statistics from "./components/StatisticList.vue";
import NewCharacterInput from "./components/NewCharacterInput.vue";

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
      favoriteList: [],
    };
  },
  components: {
    Statistics,
    CharacterList,
    FavoriteCharacterList,
    NewCharacterInput,
  },
  methods: {
    markAsFavorite(event) {
      this.favoriteList.push(event);
    },
    addNewCharacter(event) {
      this.characterList.push(event);
    },
  },
};
</script>

<template>
  <Statistics :characters="characterList" />
  <CharacterList
    :characterList="characterList"
    :favoriteList="favoriteList"
    @favoriteCharacter="markAsFavorite($event)"
  />
  <FavoriteCharacterList :favoriteList="favoriteList" />
  <NewCharacterInput @addNewCharacter="addNewCharacter($event)" />
</template>
