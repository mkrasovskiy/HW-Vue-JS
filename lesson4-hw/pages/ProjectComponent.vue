<template>
    <div>
        <BlogLineComponent />
        <HomeHeaderComponent />
        <ProjectBunner />
        <ProjectsComp />
        <HomeFooterComponent />
    </div>
</template>

<script>
import BlogLineComponent from '../src/components/LineComponent.vue'
import HomeHeaderComponent from '../src/components/HomeHeaderComponent.vue'
import ProjectBunner from '../src/components/ProjectBunner.vue'
import ProjectsComp from '../src/components/ProjectsComp.vue'
import HomeFooterComponent from '@/components/HomeFooterComponent.vue';

export default {
    name: 'ProjectComponent',
    components: {
    HomeHeaderComponent,
    BlogLineComponent,
    ProjectBunner,
    ProjectsComp,
    HomeFooterComponent
},
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    
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