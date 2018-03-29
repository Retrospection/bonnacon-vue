<script>
export default {
  name: 'rightarrow'
}
</script>

<template>
<div>
  <div id="triangle-facing-right"></div>
</div>
</template>

<style scoped>

#triangle-facing-right {
  display: inline-block;
  margin: 16px;
  border-left: 8px solid;
  border-bottom: 8px solid;
  width: 24px;
  height: 24px;
  transform: rotate(-135deg);
}

</style>
