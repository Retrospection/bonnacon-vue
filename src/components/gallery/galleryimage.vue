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
  margin: 0;
  padding: 0 4px;
}

.gallery-image {
  max-width: 100%;
}

</style>
