<template>
    <li class="list-group-item">
        <i class="fa fa-star"></i>
        <div class="media">
            <div class="media-left">
                <img class="media-object" :src="image.medium" >
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{name}}</h4>
                <div>{{summary}}</div>
            </div>
        </div>
    </li>
</template>

<script>
import Logo from '../assets/logo.png';

export default {
  data() {
    return {
      name: 'This is the title',
      summary: 'This is the summary',
      image: { medium: Logo }
    };
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
