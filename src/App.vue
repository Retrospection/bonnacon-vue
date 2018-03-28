<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body, html {
  margin: 0;
  height: 100%;
  /*background-color: black;*/
}

#app {
  height: 100%;
  overflow: hidden;
}

</style>
