<script>

import BoundingBox from '@/components/boundingbox'
import SmallCircle from '@/components/smallcircle'
import LeftArrow from '@/components/leftarrow'
import RightArrow from '@/components/rightarrow'

import * as _ from 'lodash'
import { getClientPositionOf } from '@/common/util'
import { mapActions } from 'vuex'

export default {
  name: 'containershow',
  components: { BoundingBox, SmallCircle, LeftArrow, RightArrow },
  props: ['identity', 'imageUrl', 'boundingBoxes', 'videoId', 'frameNo', 'isSmallCirclesLeft'],

  data: () => {
    return {
      drawingState: false,
      drawingBox: {}
    }
  },

  computed: {
    allBoxes () {
      if (this.drawingState === false) {
        return this.boundingBoxes
      }
      return _.concat(this.boundingBoxes, this.drawingBox)
    }
  },

  methods: {
    ...mapActions([
      'addNewMarker'
    ]),

    onMouseDown (event) {
      if (this.drawingState) {
        return
      }

      if (event.target.tagName !== 'IMG') {
        return
      }

      this.drawingState = true

      let [imageX, imageY] = getClientPositionOf(this.$refs.image)
      let [tempX, tempY] = [event.clientX - imageX, event.clientY - imageY]
      let x = tempX < 0 ? 0 : tempX
      let y = tempY < 0 ? 0 : tempY

      this.drawingBox = {
        position: [Number.parseInt(x), Number.parseInt(y), 5, 5],
        color: 'red',
        personId: 10,
        chosen: true
      }
    },

    onMouseMove (event) {
      if (!this.drawingState) {
        return
      }

      let [imageX, imageY] = getClientPositionOf(this.$refs.image)
      let [tempX, tempY] = [event.clientX - imageX, event.clientY - imageY]
      let x = tempX < 0 ? 0 : tempX
      let y = tempY < 0 ? 0 : tempY

      let width = Number.parseInt(x) - Number.parseInt(this.drawingBox.position[0])
      let height = Number.parseInt(y) - Number.parseInt(this.drawingBox.position[1])
      this.drawingBox.position = [this.drawingBox.position[0], this.drawingBox.position[1], width, height]
    },

    onMouseUp (event) {
      if (!this.drawingState) {
        return
      }
      this.drawingState = false
      let _drawingBox = {}
      _.assign(_drawingBox, this.drawingBox)
      this.addNewMarker({containerShowId: Number.parseInt(this.identity), videoId: this.videoId, frameNo: this.frameNo, marker: _drawingBox})
      this.drawingBox = {}
    },

    onBoundingBoxClicked (event) {
      // if (event.target.getAttribute('class') !== 'marker' || event.target.getAttribute('class') !== 'marker-chosen') {
      //   return
      // }
    }
  }
}
</script>

<template>
<div class="container">
  <div class="image-wrapper">
    <div
      class="position-helper"
      v-on:mousedown="onMouseDown"
      v-on:mousemove="onMouseMove"
      v-on:mouseup="onMouseUp">
      <img class="container-show-image" :src="imageUrl" alt="Container show image" ref="image">
      <BoundingBox
        v-for="(box, index) in allBoxes"
        :key="box.id"
        :data-index="index"
        :boxPosition="box.position"
        :boxColor="box.color"
        :isChosen="box.chosen"
        :personId="box.personId"
        :onClick="onBoundingBoxClicked">
      </BoundingBox>
    </div>
    <div class="arrow-container">
      <left-arrow />
      <right-arrow />
    </div>
    <div :class="[isSmallCirclesLeft ? 'small-circles-left' : 'small-circles-right', errorClass]">
      <small-circle />
    </div>
  </div>

</div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
}

.image-wrapper {
  flex: 4 1 auto;
  max-width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.position-helper {
  position: relative;
}

.container-show-image {
  width: 100%;
}

.arrow-container {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}



.small-circles-left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.small-circles-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
