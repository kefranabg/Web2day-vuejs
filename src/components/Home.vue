<template>
  <div class="list">
    <serie></serie>
    <serie></serie>
    <serie></serie>
  </div>
</template>

<script>
import Serie from './Serie';
import SerieService from '../services/serie.service';

export default {
  components: { Serie },
  data() {
    return {
      series: []
    };
  },
  mounted() {
    SerieService.getSeries('bad').then(series => {
      this.series = series;
      console.log(series);
    });
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
