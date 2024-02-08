<script>
import CharacterList from './components/CharacterList.vue';
import FavoriteCharacterList from './components/FavoriteCharacterList.vue';
import Statistics from './components/Statistics.vue';
import NewCharacterInput from './components/NewCharacterInput.vue';

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
  components: {
    Statistics,
    CharacterList,
    FavoriteCharacterList,
    NewCharacterInput
  }
}
</script>

<template>
  <Statistics :characters="characterList"/>
  <CharacterList :characterList="characterList" :favoriteList="favoriteList"/>
  <FavoriteCharacterList :favoriteList="favoriteList"/>
  <NewCharacterInput :characterList="characterList"/>
</template>
