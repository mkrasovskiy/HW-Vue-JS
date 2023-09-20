<template>
    <div>
        <LineComponent />
        <HomeHeaderComponent />
        <ProjectDetailsBunner />
        <ProjectDetailsContent />
        <HomeFooterComponent />
    </div>
</template>

<script>
import HomeFooterComponent from '@/components/HomeFooterComponent.vue';
import HomeHeaderComponent from '@/components/HomeHeaderComponent.vue';
import LineComponent from '@/components/LineComponent.vue';
import ProjectDetailsBunner from '@/components/ProjectDetailsBunner.vue';
import ProjectDetailsContent from '@/components/ProjectDetailsContent.vue'

export default {
    name: 'ProjectDetails',
    components: {
    HomeHeaderComponent,
    LineComponent,
    ProjectDetailsBunner,
    ProjectDetailsContent,
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