
export const state = {

  // 存储后端发送的视频信息，包括视频帧所在位置，各帧包括的标注信息
  videos: [
    [
      {
        imageUrl: '../../static/imgs/1/1_1.jpg',
        markers: [
          {
            personId: 1,
            position: [0, 0, 0.21, 0.17]
          },
          {
            personId: 2,
            position: [0.01, 0.24, 0.13, 0.31]
          },
          {
            personId: 4,
            position: [0.16, 0.74, 0.2, 0.1]
          },
          {
            personId: 3,
            position: [0.4, 0.13, 0.32, 0.3]
          }
        ]
      },
      {
        imageUrl: '../../static/imgs/1/1_2.jpg',
        markers: [
          {
            personId: 1,
            position: [0, 0, 0.33, 0.21]
          },
          {
            personId: 2,
            position: [0.14, 0.24, 0.13, 0.31]
          },
          {
            personId: 4,
            position: [0.16, 0.65, 0.2, 0.1]
          },
          {
            personId: 3,
            position: [0.3, 0.13, 0.32, 0.3]
          }
        ]
      },
      {
        imageUrl: '../../static/imgs/1/1_3.jpg',
        markers: [
          {
            personId: 1,
            position: [0.06, 0.81, 0.21, 0.17]
          },
          {
            personId: 2,
            position: [0.01, 0.24, 0.31, 0.31]
          },
          {
            personId: 4,
            position: [0.16, 0.74, 0.2, 0.1]
          },
          {
            personId: 3,
            position: [0.4, 0.13, 0.32, 0.3]
          }
        ]
      },
      {
        imageUrl: '../../static/imgs/1/1_4.jpg',
        markers: [
          {
            personId: 1,
            position: [0, 0, 0.24, 0.27]
          },
          {
            personId: 2,
            position: [0.11, 0.24, 0.16, 0.21]
          },
          {
            personId: 4,
            position: [0.18, 0.44, 0.21, 0.21]
          },
          {
            personId: 3,
            position: [0.2, 0.5, 0.36, 0.43]
          }
        ]
      },
      {
        imageUrl: '../../static/imgs/1/1_5.jpg',
        markers: [
          {
            personId: 1,
            position: [0.5, 0.32, 0.21, 0.17]
          },
          {
            personId: 2,
            position: [0.21, 0.28, 0.23, 0.31]
          },
          {
            personId: 4,
            position: [0.26, 0.44, 0.12, 0.41]
          },
          {
            personId: 3,
            position: [0.4, 0.23, 0.15, 0.3]
          }
        ]
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
    ]
  ],

  // 存储当前应用程序状态
  pageState: {

    /*
     * videoId: 1,
     * frameNo: 1,
     * imageUrl: imageUrl: '../../static/imgs/1/1_1.jpg', // new
     * width: xxx,
     * height: xxx,
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
