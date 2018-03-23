<script>

import ContainerShow from './containershow'

import { mapState } from 'vuex'

export default {
  name: 'ContainerShows',
  components: { ContainerShow },

  computed: {
    ...mapState({
      leftContainerShowState: state => state.pageState.leftContainerShow,
      rightContainerShowState: state => state.pageState.rightContainerShow
    }),

    leftContainerShowImageUrl () {
      return this.$store.getters.imagePath(this.leftContainerShowState.videoId)(this.leftContainerShowState.frameNo)
    },

    rightContainerShowImageUrl () {
      return this.$store.getters.imagePath(this.rightContainerShowState.videoId)(this.rightContainerShowState.frameNo)
    }
  }
}
</script>

<template>
  <div class="container-show">
    <ContainerShow id="left-container-show"
      :image-url="leftContainerShowImageUrl"
      :boundingBoxes="leftContainerShowState.markers"
      :video-id="leftContainerShowState.videoId"
      :frame-no="leftContainerShowState.frameNo"
      >
      </ContainerShow>
    <ContainerShow id="right-container-show"
      :image-url="rightContainerShowImageUrl"
      :bounding-boxes="rightContainerShowState.markers"
      :video-id="rightContainerShowState.videoId"
      :frame-no="rightContainerShowState.frameNo"
      >
      </ContainerShow>
  </div>
</template>

<style scoped>

.container-show {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 3 1 auto;
  padding: 50px;
}

#left-container-show {
  flex: 1 1 auto;
}

#right-container-show {
  flex: 1 1 auto;
}
</style>
