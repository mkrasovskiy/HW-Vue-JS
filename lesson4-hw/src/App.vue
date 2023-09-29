<template>
  <div id="app">
    <header class="header center">
      <router-link class="header__logo" to="/home">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
        </svg>                
        <p class="header__logo_txt">Interno</p>
      </router-link>
      <nav class="header__nav">
          <router-link class="header__menu-link" to="/home">Home</router-link>
          <router-link class="header__menu-link" to="/project">Project</router-link>
          <router-link class="header__menu-link" to="/blog">Blog</router-link>
      </nav>
    </header>
    <router-view /> 
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {

  },
  created() {
        this.$router.push({name: 'Homecomponent'})
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
    cursor: pointer;
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
