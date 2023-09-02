<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HomeComponent /> -->
    <!-- <BlogComponent /> -->
    <BlogDetailsComponent />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomeComponent from '../pages/HomeComponent.vue'
// import BlogComponent from '../pages/BlogComponent.vue'
import BlogDetailsComponent from '../pages/BlogDetailsComponent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    // HomeComponent,
    // BlogComponent,
    BlogDetailsComponent
  }
}
</script>

<style lang="scss">
  $widthCenter: 1200px;
  $fontText: 'Jost', sans-serif;
  $colorTitle: #292F36;
  $colorTxt: #4D5053;
  a {
    color: $colorTitle;
    text-decoration: none;
    }
  ul {
    list-style: none;
  }
</style>
