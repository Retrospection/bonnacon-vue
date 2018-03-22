<script>
export default {
  name: 'bondingbox',
  props: ['markerPosition', 'markerColor'],
  computed: {
    markerStyle () {
      if (this.markerPosition === undefined) {
        return {}
      }
      let top = this.markerPosition.top || '0'
      let left = this.markerPosition.left || '0'
      let width = this.markerPosition.width || '0'
      let height = this.markerPosition.height || '0'

      let ret = {
        top: top.toString() + 'px',
        left: left.toString() + 'px',
        width: width.toString() + 'px',
        height: height.toString() + 'px',
        borderColor: this.markerColor
      }
      return ret
    },

    cornerStyle () {
      return {
        borderColor: this.markerColor
      }
    }
  }
}
</script>

<template>
<div class="marker" :style="markerStyle">
  <div id="tl" class="corner" :style="cornerStyle"></div>
  <div id="tr" class="corner" :style="cornerStyle"></div>
  <div id="bl" class="corner" :style="cornerStyle"></div>
  <div id="br" class="corner" :style="cornerStyle"></div>
</div>
</template>

<style>
.marker {
  position: absolute;
  border-style: solid;
  border-width: 3px;
  z-index: 10;
}

.corner {
  position: absolute;
  width: 1.5px;
  height: 1.5px;
  border-radius: 3px;
  border-style: solid;
  z-index: 11;
}

#tl {
  left: 0;
  top: 0;
  margin-left: -4.5px;
  margin-top: -4.5px;
}

#tr {
  right: 0;
  top: 0;
  margin-right: -4.5px;
  margin-top: -4.5px;
}

#bl {
  left: 0;
  bottom: 0;
  margin-left: -4.5px;
  margin-bottom: -4.5px;
}

#br {
  right: 0;
  bottom: 0;
  margin-right: -4.5px;
  margin-bottom: -4.5px;
}

</style>
