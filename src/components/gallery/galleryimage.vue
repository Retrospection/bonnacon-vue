<script>

export default {
  name: 'galleryimage',
  props: ['imageUrl', 'onImageClicked']
}

</script>

<template>
<div class="gallery-image-container">
  <img class="gallery-image" v-bind:src="imageUrl" alt="gallery image" v-on:click="onImageClicked">
</div>
</template>

<style scoped>

.gallery-image-container {
  height: 100%;
  overflow: hidden;
}

.gallery-image {
  max-height: 100%;
  margin: 0 -10px;
  position: relative;
  left: 20px;
}

</style>
