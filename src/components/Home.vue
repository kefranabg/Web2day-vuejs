<template>
  <div class="list">
    <form class="form-inline">
      <input class="form-control mr-sm-2" v-model="currentSearch" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-info my-2 my-sm-0">Search</button>
    </form>
    <serie v-for="serie in series" :serieData="serie" :isSerieFavorite="isSerieFavorite(serie.id)" :key="serie.id" @favClicked="toggleSerieIsFavorite($event.id)"></serie>
  </div>
</template>

<script>
import Serie from './Serie';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  components: { Serie },
  mounted() {
    this.setSeries('bad');
  },
  methods: mapActions(['setSeries', 'toggleSerieIsFavorite']),
  computed: {
    ...mapState(['series', 'search']),
    ...mapGetters(['isSerieFavorite']),
    currentSearch: {
      get() {
        return this.search;
      },
      set(newSearch) {
        this.setSeries(newSearch);
      }
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
