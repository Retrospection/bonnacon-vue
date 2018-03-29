<script>
export default {
  name: 'smallcircle',
  props: ['isChosen']
}
</script>

<template>
<div class="small-circle">
  <div class="circle">
  </div>
</div>
</template>

<style scpoed>
.small-circle {
  margin: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
}

.circle {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: solid 1px blue;
}
</style>
