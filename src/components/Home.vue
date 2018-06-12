<template>
  <div class="list">
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-info my-2 my-sm-0">Search</button>
    </form>
    <serie v-for="serie in series" :serieData="serie" :key="serie.id" @favClicked="serieClicked"></serie>
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
    this.loadSeries();
  },
  methods: {
    serieClicked(serie) {
      FavoritesService.isFavorite(serie) ? FavoritesService.removeFavorite(serie) : FavoritesService.addFavorite(serie);
    },
    loadSeries() {
      this.series = [];
      const query = this.search ? this.search : 'bad'
      SerieService.getSeries(query).then(series => (this.series = series));
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

.form-inline {
  padding-bottom: 20px;
}
</style>
