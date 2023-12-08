<template>
    <div class="home">
        <!-- <LineComponent /> -->
        <HomePromoComponent />
        <HomeProjectsComponent />
        <HomeCounterComponent />
        <HomeBlogComponent />
        <HomeFooterComponent />
    </div>
</template>

<script>
// import LineComponent from '../components/LineComponent.vue'
import HomePromoComponent from '../components/HomePromoComponent.vue'
import HomeProjectsComponent from '../components/HomeProjectsComponent.vue'
import HomeCounterComponent from '../components/HomeCounterComponent.vue'
import HomeBlogComponent from '../components/HomeBlogComponent.vue'
import HomeFooterComponent from '../components/HomeFooterComponent.vue'

export default {
    name: 'HomeComponent',
    components: {
        // LineComponent,
        HomePromoComponent,
        HomeProjectsComponent,
        HomeCounterComponent,
        HomeBlogComponent,
        HomeFooterComponent
    },
};
</script>

<style lang="scss" scoped>
    $widthCenter: 1200px;
    $fontText: 'Jost', sans-serif;
    $colorTitle: #292F36;
    $colorTxt: #4D5053;
    * {
        margin: 0;
        padding: 0;
        position: relative;
        z-index: 5;

        font-family: 'DM Serif Display', serif;
        font-style: normal;
        font-weight: 400;
        color: $colorTitle;
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
</style>