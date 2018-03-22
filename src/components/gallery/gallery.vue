<script>

import GalleryImage from '@/components/gallery/galleryimage'

export default {
  name: 'gallery',
  components: {
    GalleryImage
  },

  props: ['onGalleryImageClicked'],

  computed: {
    imageUrls () {
      return this.$store.getters.imageUrls(1)
    }
  },

  methods: {
    getImageUrls () {
      return this.imageUrls
    }
  }
}

</script>

<template>
<div class="gallery-flex">
  <div class="gallery-container">
    <GalleryImage
      v-for="(image, index) in imageUrls"
      :data-index="index"
      :key="image.id"
      :image-url="image"
      :on-image-clicked="onGalleryImageClicked"
      ></GalleryImage>
  </div>
</div>
</template>

<style scoped>
.gallery-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gallery-container {
  display: flex;
  flex-direction: row;
}
</style>
