
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
    if (containerShowId === 0) {
      let videoId = state.upGallery.videoId
      let frameNo = state.upGallery.frameNos[galleryIndex]
      commit('setContainerShowFrameInfo', { containerShowId, videoId, frameNo })
    } else if (containerShowId === 1) {
      let videoId = state.downGallery.videoId
      let frameNo = state.downGallery.frameNos[galleryIndex]
      commit('setContainerShowFrameInfo', { containerShowId, videoId, frameNo })
    }
  },

  setInitialState ({ commit }) {
    commit('setContainerShowFrameInfo', { containerShowId: 0, videoId: 1, frameNo: 1 })
    commit('setContainerShowFrameInfo', { containerShowId: 1, videoId: 1, frameNo: 2 })
  },

  addNewMarker ({ state, dispatch, commit }, { containerShowId, videoId, frameNo, marker }) {
    commit('addMarker', { videoId, frameNo, marker })
    commit('setContainerShowFrameInfo', {
      containerShowId: containerShowId,
      videoId: state.pageState.leftContainerShow.videoId,
      frameNo: state.pageState.leftContainerShow.frameNo
    })
  },

  chooseMarker ({ dispatch, commit }, { containerShowId, markerIndex }) {
    commit('setMarkerChosenState', { containerShowId, markerIndex, isChosen: true })
  },

  unchooseMarker ({ dispatch, commit }, { containerShowId, markerIndex }) {
    commit('setMarkerChosenState', { containerShowId, markerIndex, isChosen: false })
  }
}
