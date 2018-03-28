<script>
import Gallery from '@/components/gallery/gallery'
import ContainerShows from '@/components/containerShow/containershows'

import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'home',
  components: {
    Gallery,
    ContainerShows
  },

  methods: {
    ...mapActions([
      'fetchVideoInfo',
      'setInitialState',
      'changeContainerShowFrame'
    ]),

    ...mapMutations([
      'setLeftContainerShowFrameNo',
      'setRightContainerShowFrameNo'
    ]),

    onUpGalleryImageClicked (event) {
      let target = event.target.parentNode
      let index = target.getAttribute('data-index')
      this.changeContainerShowFrame({ containerShowId: 0, galleryIndex: Number.parseInt(index) })
    },

    onDownGalleryImageClicked (event) {
      let target = event.target.parentNode
      let index = target.getAttribute('data-index')
      this.changeContainerShowFrame({ containerShowId: 1, galleryIndex: Number.parseInt(index) })
    }
  },

  created () {
    this.setInitialState()
  }
}
</script>

<template>
<div id="home">
  <Gallery class="gallery" :on-gallery-image-clicked="onUpGalleryImageClicked"></Gallery>
  <ContainerShows></ContainerShows>
  <Gallery class="gallery" :on-gallery-image-clicked="onDownGalleryImageClicked"></Gallery>
</div>
</template>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex: 1;
}

.gallery {
  display: flex;
  flex: 1 1 auto;
}
</style>
