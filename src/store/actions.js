
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
  }
}
