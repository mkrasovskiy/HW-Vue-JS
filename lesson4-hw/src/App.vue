<template>
  <div id="app">
    <!-- <HomeComponent /> -->
    <!-- <BlogComponent /> -->
    <!-- <BlogDetailsComponent /> -->
    <!-- <ProjectComponent /> -->
    <ProjectDetails />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
// import HomeComponent from '../pages/HomeComponent.vue'
// import BlogComponent from '../pages/BlogComponent.vue'
// import BlogDetailsComponent from '../pages/BlogDetailsComponent.vue'
// import ProjectComponent from '../pages/ProjectComponent.vue'
import ProjectDetails from '../pages/ProjectDetails.vue'

export default {
  name: 'App',
  components: {
    // HomeComponent,
    // BlogComponent,
    // BlogDetailsComponent,
    // ProjectComponent,
    ProjectDetails
  },
  computed: {
    ...mapState(['descriptionProject']),
    ...mapGetters(['getTitle', 'getDescription'])
  }
}
</script>

<style lang="scss">
  $widthCenter: 1200px;
  $fontText: 'Jost', sans-serif;
  $colorTitle: #292F36;
  $colorTxt: #4D5053;
  * {
        margin: 0;
        padding: 0;
    }
  a {
    color: $colorTitle;
    text-decoration: none;
    }
  ul {
    list-style: none;
  }
</style>
