<template>
    <div class="projects center">
        <CategoriesProject />
    </div>
</template>

<script>
import CategoriesProject from '../components/CategoriesProject.vue'
export default {
    name: 'ProjectsComp',
    components: {
        CategoriesProject
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
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

    .center {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }
    .projects {
        margin-bottom: 200px;
        display: flex;
        justify-content: center;
    }
</style>