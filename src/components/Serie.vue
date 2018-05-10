<template>
    <li class="list-group-item">
        <i class="fa fa-star"></i>
        <div class="media">
            <div class="media-left">
                <img class="media-object" v-if="serieData.image" :src="serieData.image.medium" >
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{serieData.name}}</h4>
                <div v-html="serieData.summary"></div>
            </div>
        </div>
    </li>
</template>

<script>
import Logo from '../assets/logo.png';

export default {
  props: {
    serieData: Object
  }
};
</script>

<style>
.list-group-item {
  position: relative;
}

.fa {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

.media {
  text-align: left;
}

.media-object {
  height: 64px;
  padding-right: 20px;
}
</style>
