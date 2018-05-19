import Vue from 'vue';
import Vuex from 'vuex';
import SerieService from './services/serie.service';
import { intersectionWith } from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    series: [],
    favoritesSeriesIds: [],
    search: ''
  },
  getters: {
    favoriteSeries(state) {
      return intersectionWith(state.series, state.favoritesSeriesIds, (serie, id) => serie.id === id);
    },
    isSerieFavorite(state) {
      return serieId => !!state.favoritesSeriesIds.find(itemId => itemId === serieId);
    }
  },
  mutations: {
    setSeries(state, series) {
      state.series = series;
    },
    addIdToFavorite(state, idToAdd) {
      state.favoritesSeriesIds = [...state.favoritesSeriesIds, idToAdd];
    },
    removeIdFromFavorite(state, idToRemove) {
      state.favoritesSeriesIds = state.favoritesSeriesIds.filter(id => id !== idToRemove);
    },
    setSearch(state, newSearch) {
      state.search = newSearch;
    }
  },
  actions: {
    async setSeries({ commit }, query) {
      commit('setSearch', query);
      commit('setSeries', await SerieService.getSeries(query));
    },
    toggleSerieIsFavorite({ commit, state }, serieId) {
      state.favoritesSeriesIds.find(itemId => itemId === serieId)
        ? commit('removeIdFromFavorite', serieId)
        : commit('addIdToFavorite', serieId);
    }
  }
});
