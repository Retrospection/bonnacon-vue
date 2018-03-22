
// export function fetchVideoInfo (videoId) {
//   return fetch()
//     .then(res => {
//       return res.json()
//     })
// }

// '../../../static/imgs/1/1_1.jpg',
// '../../../static/imgs/1/1_2.jpg',
// '../../../static/imgs/1/1_3.jpg',
// '../../../static/imgs/1/1_4.jpg',
// '../../../static/imgs/1/1_5.jpg',
// '../../../static/imgs/1/1_6.jpg',
// '../../../static/imgs/1/1_7.jpg',
// '../../../static/imgs/1/1_8.jpg',
// '../../../static/imgs/1/1_9.jpg'

export function fetchVideoInfo (videoId) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      let videos = {
        1: [
          {
            imageUrl: '../../../static/imgs/1/1_11.jpg',
            marker: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_12.jpg',
            marker: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_13.jpg',
            marker: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_14.jpg',
            marker: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_15.jpg',
            marker: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_16.jpg',
            marker: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_17.jpg',
            marker: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_18.jpg',
            marker: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_19.jpg',
            marker: []
          }
        ]
      }
      resolve(JSON.stringify(videos))
    }, 1000)
  })
}
