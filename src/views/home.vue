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
      <div class="frame-identifier">1/3333</div>
      <input>
      <button class="btn">跳转到指定帧</button>
    </div>
  </div>
  <ContainerShows class="middle" />
  <div class="union-btn-container">
    <button class="union-btn">关联人物</button>
  </div>
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
  margin: 1rem 0;
}

.middle {
  height: 65%;
}

.union-btn-container {
  height: 5%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.union-btn {
  position: relative;
  top: -200%;
  width: 8rem;
  height: 3rem;
  background-color: greenyellow;
  border: solid 1px black;
  border-radius: 4px;
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

.frame-identifier {
  margin: 10px 0;
}

input {
  margin: 10px 0;
}

.btn {
  border-radius: 4px;
  background-color: blue;
  color: white;
}
</style>
