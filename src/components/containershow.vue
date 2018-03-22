<script>

import BoundingBox from '@/components/boundingbox'
import * as _ from 'lodash'

export default {
  name: 'containershow',
  components: { BoundingBox },
  props: ['imageUrl'],
  data: () => {
    return {
      boundingBoxes: [],
      drawingState: false,
      colors: ['red', 'orange', 'purple', 'blue', 'yellow'],
      drawingBox: {}
    }
  },

  computed: {
    allBoxes () {
      if (!this.drawingState) {
        return this.boundingBoxes
      }
      let ret = _.concat(this.drawingBox, this.boundingBoxes)
      return ret
    },

    imagePosition () {
      let $image = this.$refs.image
      let boundingClientRect = $image.getBoundingClientRect()
      let x = boundingClientRect.left
      let y = boundingClientRect.top
      return [x, y]
    }
  },

  methods: {
    onMouseDown (event) {
      if (this.drawingState) {
        return
      }
      this.drawingState = true

      let [imageX, imageY] = this.imagePosition
      let [tempX, tempY] = [event.clientX - imageX, event.clientY - imageY]
      let x = tempX < 0 ? 0 : tempX
      let y = tempY < 0 ? 0 : tempY

      this.drawingBox = {
        markerPosition: {
          left: Number.parseInt(x),
          top: Number.parseInt(y),
          width: 5,
          height: 5
        },
        markerColor: this.colors[0]
      }
    },

    onMouseMove (event) {
      event.preventDefault()
      if (!this.drawingState) {
        return
      }

      let [imageX, imageY] = this.imagePosition
      let [tempX, tempY] = [event.clientX - imageX, event.clientY - imageY]
      let x = tempX < 0 ? 0 : tempX
      let y = tempY < 0 ? 0 : tempY

      let width = Number.parseInt(x) - Number.parseInt(this.drawingBox.markerPosition.left)
      let height = Number.parseInt(y) - Number.parseInt(this.drawingBox.markerPosition.top)
      this.drawingBox.markerPosition.width = width
      this.drawingBox.markerPosition.height = height
    },
    onMouseUp (event) {
      event.preventDefault()
      if (!this.drawingState) {
        return
      }
      this.drawingState = false
      let _drawingBox = {}
      _.assign(_drawingBox, this.drawingBox)
      this.boundingBoxes.push(_drawingBox)
      this.drawingBox = {}
    }
  }
}
</script>

<template>
<div class="container">
  <div class="image-wrapper">
      <div class="position-helper" v-on:mousedown.capture.stop="onMouseDown" v-on:mousemove.capture.stop="onMouseMove" v-on:mouseup.capture.stop="onMouseUp">
        <img class="container-show-image" :src="imageUrl" alt="Container show image" ref="image">
        <BoundingBox v-for="(box, index) in allBoxes" :key="box.id" :data-index="index" :markerPosition="box.markerPosition" :markerColor="box.markerColor">
        </BoundingBox>
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
  flex: 1 1 auto;
  max-width: 640px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.position-helper {
  position: relative;
}

</style>
