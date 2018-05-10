<template>
    <li class="list-group-item">
        <i class="fa fa-star"></i>
        <div class="media">
            <div class="media-left">
                <img class="media-object" src="../assets/logo.png" >
            </div>
            <div class="media-body">
                <h4 class="media-heading">Title</h4>
                <div>Summary</div>
            </div>
        </div>
    </li>
</template>

<script>
export default {};
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
