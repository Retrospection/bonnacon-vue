
export function fetchVideoInfo (videoId) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      let videos = {
        1: [
          {
            imageUrl: '../../../static/imgs/1/1_11.jpg',
            markers: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_12.jpg',
            markers: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_13.jpg',
            markers: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_14.jpg',
            markers: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_15.jpg',
            markers: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_16.jpg',
            markers: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_17.jpg',
            markers: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_18.jpg',
            markers: []
          },
          {
            imageUrl: '../../../static/imgs/1/1_19.jpg',
            markers: []
          }
        ]
      }
      resolve(JSON.stringify(videos))
    }, 1000)
  })
}
