<script>

import ContainerShow from './containershow'

import { mapState } from 'vuex'

export default {
  name: 'ContainerShows',
  components: { ContainerShow },
  computed: {
    ...mapState({
      leftContainerShowState: state => state.pageState.leftContainerShow,
      rightContainerShowState: state => state.pageState.rightContainerShow,
    })
  }
}
</script>

<template>
  <div class="container-show">
    <ContainerShow
      id="left-container-show"
      identity="0"
      :image-url="leftContainerShowState.imageUrl"
      :boundingBoxes="leftContainerShowState.markers"
      :video-id="leftContainerShowState.videoId"
      :frame-no="leftContainerShowState.frameNo"
      >
      </ContainerShow>
    <ContainerShow
      id="right-container-show"
      identity="1"
      :image-url="rightContainerShowState.imageUrl"
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
