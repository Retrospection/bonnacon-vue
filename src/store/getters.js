
export const getters = {

  imageUrls: (state) => (videoId) => {
    return state.videos[videoId - 1].map(frameInfo => frameInfo.imageUrl)
  },

  imagePath: (state) => (videoId) => (frameNo) => {
    return state.videos[videoId - 1][frameNo - 1].imageUrl
  }
}
