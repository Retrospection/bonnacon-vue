
export const mutations = {

  setVideos (state, {videoId, videoInfo}) {
    state.videos[videoId] = videoInfo
  },

  setLeftContainerShowFrameNo (state, galleryIndex) {
    state.pageState.leftContainerShow.frameNo = galleryIndex + 1
  },

  setRightContainerShowFrameNo (state, galleryIndex) {
    state.pageState.rightContainerShow.frameNo = galleryIndex + 1
  },

  addMarker (state, { videoId, frameNo, marker }) {
    state.videos[videoId - 1][frameNo - 1].markers.push(marker)
  }
}
