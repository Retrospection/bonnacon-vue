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

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  /*background-color: black;*/
}

#app {
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: hidden;
}

</style>
