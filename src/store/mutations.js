
import { COLORS } from '@/common/util'

export const mutations = {

  setVideos (state, { videoId, videoInfo }) {
    state.videos[videoId] = videoInfo
  },

  // deprecated
  setLeftContainerShowFrameNo (state, galleryIndex) {
    state.pageState.leftContainerShow.frameNo = galleryIndex + 1
  },

  // deprecated
  setRightContainerShowFrameNo (state, galleryIndex) {
    state.pageState.rightContainerShow.frameNo = galleryIndex + 1
  },

  // 暂时用本地数据模拟远端服务器数据
  addMarker (state, { videoId, frameNo, marker }) {
    state.videos[videoId - 1][frameNo - 1].markers.push(marker)
  },

  // 暂时用本地数据模拟远端服务器数据
  deleteMarker (state, { videoId, frameNo, markerIndex }) {
    state.videos[videoId - 1][frameNo - 1].markers.splice(markerIndex, 1)
  },

  // 暂时用本地数据模拟远端服务器数据
  updateMarker (state, { videoId, frameNo, markerIndex, newMarker }) {
    state.videos[videoId - 1][frameNo - 1].markers.splice(markerIndex, 1)
    state.videos[videoId - 1][frameNo - 1].markers.push(newMarker)
  },

  setMarkerChosenState (state, { containerShowId, markerIndex, isChosen }) {
    if (containerShowId === 0) {
      let marker = state.pageState.leftContainerShow.marker[markerIndex]
      marker.chosen = isChosen
      state.pageState.leftContainerShow.marker[markerIndex] = marker
    } else if (containerShowId === 1) {
      let marker = state.pageState.rightContainerShow.marker[markerIndex]
      marker.chosen = isChosen
      state.pageState.rightContainerShow.marker[markerIndex] = marker
    }
  },

  // new mutations

  setContainerShowFrameInfo (state, { containerShowId, videoId, frameNo }) {
    if (containerShowId === 0) {
      let frameInfo = state.videos[videoId - 1][frameNo - 1]
      state.pageState.leftContainerShow = {
        videoId,
        frameNo,
        imageUrl: frameInfo.imageUrl,
        markers: frameInfo.markers.map(marker => ({
          personId: marker.personId,
          position: marker.position,
          chosen: false,
          color: COLORS[marker.personId % 7]
        }))
      }
    } else if (containerShowId === 1) {
      let frameInfo = state.videos[videoId - 1][frameNo - 1]
      state.pageState.rightContainerShow = {
        videoId,
        frameNo,
        imageUrl: frameInfo.imageUrl,
        markers: frameInfo.markers.map(marker => ({
          personId: marker.personId,
          position: marker.position,
          chosen: false,
          color: COLORS[marker.personId % 7]
        }))
      }
    }
  }

}
