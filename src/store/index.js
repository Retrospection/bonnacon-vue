import Vue from 'vue'
import Vuex from 'vuex'

import { fetchVideoInfo } from '../common/api'

Vue.use(Vuex)

const state = {
  videos: {
    1: [
      {
        imageUrl: '../../static/imgs/1/1_1.jpg',
        marker: []
      },
      {
        imageUrl: '../../static/imgs/1/1_2.jpg',
        marker: []
      },
      {
        imageUrl: '../../static/imgs/1/1_3.jpg',
        marker: []
      },
      {
        imageUrl: '../../static/imgs/1/1_4.jpg',
        marker: []
      },
      {
        imageUrl: '../../static/imgs/1/1_5.jpg',
        marker: []
      },
      {
        imageUrl: '../../static/imgs/1/1_6.jpg',
        marker: []
      },
      {
        imageUrl: '../../static/imgs/1/1_7.jpg',
        marker: []
      },
      {
        imageUrl: '../../static/imgs/1/1_8.jpg',
        marker: []
      },
      {
        imageUrl: '../../static/imgs/1/1_9.jpg',
        marker: []
      }
    ]
  }
}

const getters = {

  imageUrls: (state) => (id) => {
    return state.videos[id].map(frame => frame.imageUrl)
  }

}

const mutations = {
  setVideoInfo (state, {videoId, videoInfo}) {
    state.videos[videoId] = videoInfo
  }
}

const actions = {
  fetchVideoInfo ({ commit }, videoId) {
    return fetchVideoInfo(videoId)
      .then(json => {
        let videos = JSON.parse(json)
        commit('setVideoInfo', { videoId: videoId, videoInfo: videos[1] })
      })
      .catch(err => {
        console.error(err)
      })
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
