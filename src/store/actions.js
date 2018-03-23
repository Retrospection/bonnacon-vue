
import {fetchVideoInfo} from '../common/api'

export const actions = {

  fetchVideoInfo ({ commit }, videoId) {
    return fetchVideoInfo(videoId)
      .then(json => {
        let videos = JSON.parse(json)
        commit('setVideos', { videoId: videoId, videoInfo: videos[1] })
      })
      .catch(err => {
        console.error(err)
      })
  },

  changeContainerShowFrame ({ commit, state }, { containerShowId, galleryIndex }) {
    console.log('container index: ', containerShowId)
    if (containerShowId === 0) {
      let videoId = state.pageState.upGallery.videoId
      let frameNo = state.pageState.upGallery.frameNos[galleryIndex]
      commit('setContainerShowFrameInfo', { containerShowId, videoId, frameNo })
    } else if (containerShowId === 1) {
      let videoId = state.pageState.downGallery.videoId
      let frameNo = state.pageState.downGallery.frameNos[galleryIndex]
      commit('setContainerShowFrameInfo', { containerShowId, videoId, frameNo })
    }
  },

  setInitialState ({ commit }) {
    commit('setContainerShowFrameInfo', { containerShowId: 0, videoId: 1, frameNo: 1 })
    commit('setContainerShowFrameInfo', { containerShowId: 1, videoId: 1, frameNo: 2 })
  },

  addNewMarker ({ state, dispatch, commit }, { containerShowId, videoId, frameNo, marker }) {
    commit('addMarker', { videoId, frameNo, marker })
    commit('setContainerShowFrameInfo', { containerShowId, videoId, frameNo })
    // 如果左右两侧的videoId相等，则在左侧画了框应当立即同步到右侧
  },

  chooseMarker ({ dispatch, commit }, { containerShowId, markerIndex }) {
    commit('setMarkerChosenState', { containerShowId, markerIndex, isChosen: true })
  },

  unchooseMarker ({ dispatch, commit }, { containerShowId, markerIndex }) {
    commit('setMarkerChosenState', { containerShowId, markerIndex, isChosen: false })
  }
}
