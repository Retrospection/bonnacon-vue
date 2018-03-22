<script>
import Gallery from '@/components/gallery/gallery'
import ContainerShow from '@/components/containershow'

import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    Gallery,
    ContainerShow
  },

  data: () => ({
    containerShowLeftIndex: 0,
    containerShowRightIndex: 0,
    labelsLeft: [],
    labelsRight: []
  }),

  computed: {
    leftContainerShowImageUrl () {
      let video = this.$store.state.videos[1]
      return video[this.containerShowLeftIndex].imageUrl
    },

    rightContainerShowImageUrl () {
      let video = this.$store.state.videos[1]
      return video[this.containerShowRightIndex].imageUrl
    }
  },

  methods: {
    ...mapActions([
      'fetchVideoInfo'
    ]),

    onUpGalleryImageClicked (event) {
      let target = event.target.parentNode
      let index = target.getAttribute('data-index')
      this.containerShowLeftIndex = Number.parseInt(index)
    },

    onDownGalleryImageClicked (event) {
      let target = event.target.parentNode
      let index = target.getAttribute('data-index')
      this.containerShowRightIndex = Number.parseInt(index)
    }
  },

  mounted () {
    this.fetchVideoInfo(1)
  }
}
</script>

<template>
<div id="home">
  <Gallery class="gallery" :on-gallery-image-clicked="onUpGalleryImageClicked"></Gallery>
  <div class="container-show">
    <ContainerShow id="left-container-show" :image-url="leftContainerShowImageUrl"></ContainerShow>
    <ContainerShow id="right-container-show" :image-url="rightContainerShowImageUrl"></ContainerShow>
  </div>
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

.container-show {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 3 1 auto;
  padding: 50px;
}

.gallery {
  display: flex;
  flex: 1 1 auto;
}

#left-container-show {
  flex: 1 1 auto;
}

#right-container-show {
  flex: 1 1 auto;
}
</style>
