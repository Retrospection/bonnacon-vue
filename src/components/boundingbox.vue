<script>
export default {
  name: 'boundingbox',
  props: ['boxPosition', 'boxColor', 'isChosen', 'personId', 'onClick'],
  computed: {
    markerStyle () {
      if (this.boxPosition === undefined) {
        return {}
      }

      let left = this.boxPosition[0] || '0'
      let top = this.boxPosition[1] || '0'
      let width = this.boxPosition[2] || '0'
      let height = this.boxPosition[3] || '0'

      let ret = {
        top: top.toString() + 'px',
        left: left.toString() + 'px',
        width: width.toString() + 'px',
        height: height.toString() + 'px',
        borderColor: this.boxColor
      }
      return ret
    },

    cornerStyle () {
      return {
        borderColor: this.boxColor
      }
    }
  }
}
</script>

<template>
<div class="marker" :style="markerStyle" v-on:click="onClick">
  <div id="tl" class="corner" :style="cornerStyle" v-if="isChosen"></div>
  <div id="tr" class="corner" :style="cornerStyle" v-if="isChosen"></div>
  <div id="bl" class="corner" :style="cornerStyle" v-if="isChosen"></div>
  <div id="br" class="corner" :style="cornerStyle" v-if="isChosen"></div>
</div>
</template>

<style>
.marker {
  position: absolute;
  border-style: solid;
  border-width: 3px;
  z-index: 10;
}

.marker:hover {
  box-shadow: 0 0 1px 1px yellow;
}

.marker-chosen {
  position: absolute;
  border-style: solid;
  border-width: 3px;
  z-index: 10;
  box-shadow: 0 0 1px 1px yellow;
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
