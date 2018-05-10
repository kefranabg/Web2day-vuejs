<template>
  <div class="list">
    <serie v-for="serie in series" :serieData="serie" :key="serie.id"></serie>
  </div>
</template>

<script>
import Serie from './Serie';
import SerieService from '../services/serie.service';
import FavoritesService from '../services/favorites.service';

export default {
  components: { Serie },
  data() {
    return {
      series: []
    };
  },
  mounted() {
    SerieService.getSeries('bad').then(series => (this.series = series));
  },
  methods: {
    serieClicked(serie) {
      FavoritesService.isFavorite(serie) ? FavoritesService.removeFavorite(serie) : FavoritesService.addFavorite(serie);
    }
  }
};
</script>

<style>
.list {
  width: 80%;
  margin: auto;
  margin-top: 50px;
}
</style>
