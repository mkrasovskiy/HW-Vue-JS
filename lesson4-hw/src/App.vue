<template>
  <div id="app">
    <HomeComponent />
    <BlogComponent />
    <BlogDetailsComponent />
  </div>
</template>

<script>
import HomeComponent from '../pages/HomeComponent.vue'
import BlogComponent from '../pages/BlogComponent.vue'
import BlogDetailsComponent from '../pages/BlogDetailsComponent.vue'

export default {
  name: 'App',
  components: {
    HomeComponent,
    BlogComponent,
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
