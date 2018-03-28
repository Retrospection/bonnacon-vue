
export const state = {

  // 存储后端发送的视频信息，包括视频帧所在位置，各帧包括的标注信息
  videos: [
    [
      {
        imageUrl: '../../static/imgs/1/1_1.jpg',
        markers: [
          {
            personId: 1,
            position: [0, 0, 50, 50]
          },
          {
            personId: 2,
            position: [13, 24, 66, 56]
          },
          {
            personId: 4,
            position: [130, 254, 63, 87]
          },
          {
            personId: 3,
            position: [87, 90, 125, 67]
          }
        ]
      },
      {
        imageUrl: '../../static/imgs/1/1_2.jpg',
        markers: [
          {
            personId: 1,
            position: [10, 10, 50, 50]
          },
          {
            personId: 2,
            position: [23, 24, 66, 56]
          },
          {
            personId: 4,
            position: [56, 76, 63, 87]
          },
          {
            personId: 3,
            position: [45, 12, 125, 67]
          }
        ]
      },
      {
        imageUrl: '../../static/imgs/1/1_3.jpg',
        markers: [
          {
            personId: 1,
            position: [32, 12, 50, 60]
          },
          {
            personId: 2,
            position: [15, 74, 43, 56]
          },
          {
            personId: 4,
            position: [88, 254, 73, 87]
          },
          {
            personId: 3,
            position: [87, 90, 56, 67]
          }
        ]
      },
      {
        imageUrl: '../../static/imgs/1/1_4.jpg',
        markers: []
      },
      {
        imageUrl: '../../static/imgs/1/1_5.jpg',
        markers: []
      },
      {
        imageUrl: '../../static/imgs/1/1_6.jpg',
        markers: []
      },
      {
        imageUrl: '../../static/imgs/1/1_7.jpg',
        markers: []
      },
      {
        imageUrl: '../../static/imgs/1/1_8.jpg',
        markers: []
      },
      {
        imageUrl: '../../static/imgs/1/1_9.jpg',
        markers: []
      }
    ]],

  // 存储当前应用程序状态
  pageState: {

    /*
     * videoId: 1,
     * frameNo: 1,
     * imageUrl: imageUrl: '../../static/imgs/1/1_1.jpg', // new
     * markers: [{
     *   personId: 1,
     *   position: [0, 0, 50, 50],
     *   chosen: false,
     *   color: 'yellow'
     * }]
     */
    leftContainerShow: {},

    rightContainerShow: {},

    /*
    * videoId: 1,
    * frameNos: []
    *
    */
    upGallery: {
      videoId: 1,
      frameNos: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },

    downGallery: {
      videoId: 1,
      frameNos: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

  }
}
