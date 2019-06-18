<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <languages></languages>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import languages from './components/selectInput/languages.vue'
export default {
  name: 'app',
  components: {
    languages
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
