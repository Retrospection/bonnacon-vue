
import {fetchVideoInfo} from '../common/api'
import {COLORS, getVideoId} from '../common/util'

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

  setInitialState ({ dispatch, state }) {
    dispatch('updateLeftContainerShow', {videoId: 1, frameNo: 1})
    dispatch('updateRightContainerShow', {videoId: 1, frameNo: 2})
  },

  updateRightContainerShow ({ state }, { videoId, frameNo }) {
    let rightContainerShowInitInfo = state.videos[videoId - 1][frameNo - 1]
    let rightMarkerState = rightContainerShowInitInfo.markers.map(marker => ({
      ...marker,
      chosen: false,
      color: COLORS[marker.personId % 7]
    }))

    state.pageState.rightContainerShow = {
      videoId: getVideoId(rightContainerShowInitInfo.imageUrl),
      frameNo: 2,
      markers: rightMarkerState
    }
  },

  updateLeftContainerShow ({ state }, { videoId, frameNo }) {
    let leftContainerShowInitInfo = state.videos[videoId - 1][frameNo - 1]
    let leftMarkerState = leftContainerShowInitInfo.markers.map(marker => ({
      ...marker,
      chosen: false,
      color: COLORS[marker.personId % 7]
    }))

    state.pageState.leftContainerShow = {
      videoId: getVideoId(leftContainerShowInitInfo.imageUrl),
      frameNo: 1,
      markers: leftMarkerState
    }
  },

  addNewMarker ({ state, dispatch, commit }, { videoId, frameNo, marker }) {
    commit('addMarker', { videoId, frameNo, marker })
    dispatch('updateLeftContainerShow', {
      videoId: state.pageState.leftContainerShow.videoId,
      frameNo: state.pageState.leftContainerShow.frameNo
    })
    dispatch('updateRightContainerShow', {
      videoId: state.pageState.rightContainerShow.videoId,
      frameNo: state.pageState.rightContainerShow.frameNo
    })
  }

}
