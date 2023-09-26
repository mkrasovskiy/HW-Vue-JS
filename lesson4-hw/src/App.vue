<template>
  <div id="app">
    <HomeHeaderComponent />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import HomeHeaderComponent from './components/HomeHeaderComponent.vue';
// import HomeComponent from './pages/HomeComponent.vue'
// import BlogComponent from '../pages/BlogComponent.vue'
// import BlogDetailsComponent from '../pages/BlogDetailsComponent.vue'
// import ProjectComponent from '../pages/ProjectComponent.vue'
// import ProjectDetails from './pages/ProjectDetails.vue'

export default {
  name: 'App',
  components: {
    HomeHeaderComponent
  },
  
  computed: {
    ...mapState(['descriptionProject']),
    ...mapGetters(['getTitle', 'getDescription'])
  },
  
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
  .center {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  .header {
        margin: 53px auto 57px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__logo {
            display: flex;
            align-items: center;
            gap: 10px;
            &_txt {
                font-size: 40px;
                line-height: 50px;
            }
        }
        &__nav {
            width: 244px;
        }
        &__menu {
            display: flex;
            justify-content: space-between;
        }
        &__menu-link {
            font-family: $fontText;
            font-size: 20px;
            line-height: 25px;
        }
  }
</style>
