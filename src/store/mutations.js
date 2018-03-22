
import {COLORS, getVideoId} from '../common/util'

export const mutations = {

  setVideos (state, {videoId, videoInfo}) {
    state.videos[videoId] = videoInfo
  },

  setInitialState (state) {
    let leftContainerShowInitInfo = state.videos[0][0]
    let leftMarkerState = leftContainerShowInitInfo.markers.map(marker => ({
      ...marker,
      chosen: false,
      color: COLORS[marker.personId % 7]
    }))

    let rightContainerShowInitInfo = state.videos[0][1]
    let rightMarkerState = rightContainerShowInitInfo.markers.map(marker => ({
      ...marker,
      chosen: false,
      color: COLORS[marker.personId % 7]
    }))

    state.pageState.leftContainerShow = {
      videoId: getVideoId(leftContainerShowInitInfo.imageUrl),
      frameNo: 1,
      markers: leftMarkerState
    }

    state.pageState.rightContainerShow = {
      videoId: getVideoId(rightContainerShowInitInfo.imageUrl),
      frameNo: 2,
      markers: rightMarkerState
    }
  },

  setLeftContainerShowFrameNo (state, frameNo) {
    console.log('set left container show no is : ', frameNo)
    state.pageState.leftContainerShow.frameNo = frameNo + 1
  },

  setRightContainerShowFrameNo (state, frameNo) {
    console.log('set right container show no is : ', frameNo)
    state.pageState.rightContainerShow.frameNo = frameNo + 1
  }
}
