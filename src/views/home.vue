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
  <div class="up flex">
    <Gallery class="gallery" :on-gallery-image-clicked="onUpGalleryImageClicked"></Gallery>
    <div class="jumper">
      <div>1/3333</div>
      <input>
      <button>跳转到指定帧</button>
    </div>
  </div>
  <ContainerShows class="middle"></ContainerShows>
  <div class="down flex">
    <Gallery class="gallery" :on-gallery-image-clicked="onDownGalleryImageClicked"></Gallery>
    <div class="jumper">
    </div>
  </div>
</div>
</template>

<style scoped>
#home {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.up, 
.down {
  height: 15%;
}

.middle {
  height: 70%;
}

.gallery {
  display: inline-block;
  width: 90%;
  height: 100%;
}

.jumper {
  width: 140px;
  height: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.flex {
  display: flex;
}


</style>
