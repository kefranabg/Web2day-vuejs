<template>
  <div>
    <h1>Favorites</h1>
    <li v-for="favorite in favorites" :key="favorite.id" class="list-group-item">
          <div class="media">
              <div class="media-left">
                  <img class="media-object" v-if="favorite.image" :src="favorite.image.medium" >
              </div>
              <div class="media-body">
                  <h4 class="media-heading">{{favorite.name}}</h4>
                  <div v-html="favorite.summary"></div>
              </div>
          </div>
      </li>
  </div>
</template>

<script>
import FavoritesService from '../services/favorites.service';

export default {
  data() {
    return {
      favorites: []
    };
  },
  mounted() {
    this.favorites = FavoritesService.favorites;
  }
};
</script>

<style>

</style>
