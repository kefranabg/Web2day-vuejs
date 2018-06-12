<template>
    <div>
        <h1>Favorites</h1>
        <div class="list">
            <serie v-for="favorite in favorites" :serieData="favorite" :key="favorite.id"></serie>
        </div>
    </div>
</template>

<script>
import FavoritesService from '../services/favorites.service';
import Serie from './Serie';

export default {
  data() {
    return {
      favorites: []
    };
  },
    components: {
      Serie
  },
  mounted() {
    this.favorites = FavoritesService.favorites;
  }
};
</script>

<style>
.list {
  width: 80%;
  margin: auto;
  margin-top: 20px;
}
</style>
