<script>
import Statistics from './components/Statistics.vue';
import CharacterList from './components/CharacterList.vue';
import FavoriteCharacterList from './components/FavoriteCharacterList.vue';
import NewCharacterInput from './components/NewCharacterInput.vue';

export default {
  components: {
    Statistics,
    CharacterList,
    FavoriteCharacterList,
    NewCharacterInput
  }
};
</script>

<template>
  <Statistics />
  <Characters />
  <FavCharacters />
  <NewCharacter />
</template>
