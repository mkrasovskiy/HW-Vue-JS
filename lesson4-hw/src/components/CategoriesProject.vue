<template>
    <div class="categories-project">
        <div class="categories-project-wrp">
            <button class="categories-project-wrp__btn" v-for="project in projects" :key="project.id" @click="switchProjectCategories(project)">{{ project.name }}</button>
        </div>
        <div class="project-wrp">
            <component :is="component"/>
        </div>
        <PaginationComp />
    </div>
</template>

<script>
import BathroomComp from './BathroomComp.vue'
import BedRoomComp from './BedRoomComp.vue'
import KitchanComp from './KitchanComp.vue'
import LivingAreaComp from './LivingAreaComp.vue'
import PaginationComp from './PaginationComp.vue'
export default {
    name: 'CategoriesProject',
    components: {
        BathroomComp,
        BedRoomComp,
        KitchanComp,
        LivingAreaComp,
        PaginationComp
    },
    data() {
        return {
            projects: [
                {   
                    id:1,
                    name: 'Bathroom',
                    comp: 'BathroomComp'
                },
                {
                    id:2,
                    name: 'Bed Room',
                    comp: 'BedRoomComp'
                },
                {
                    id:3,
                    name: 'Kitchan',
                    comp: 'KitchanComp'
                },
                {
                    id:4,
                    name: 'Living Area',
                    comp: 'LivingAreaComp'
                },
            ],
            component: 'BathroomComp'
        };
    },

    mounted() {
        
    },

    methods: {
        switchProjectCategories(project) {
            return this.component = project.comp;
        }
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
        font-weight: 600;
        color: $colorTitle;
    }

    .center {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }
    .categories-project {
        display: flex;
        flex-direction: column;
        gap: 61px;
    }
    .categories-project-wrp {
        min-width: 880px;
        display: flex;
        justify-content: center;
        gap: 30px;
        border: 1px solid #CDA274;
        border-radius: 18px;
        &__btn {
            padding: 26px 66px;
            border: none;
            border-radius: 18px;
            background: none;
            font-family: $fontText;
            font-size: 18px;
            line-height: 22.5px;
            letter-spacing: 0.36px;
            transition: 0.3s;
            &:hover {
                background: #CDA274;
                color: #fff;
            }
            &:active {
                background: #fff;
                color: #CDA274
            }
        }
    }
    .project-wrp {
        display: flex;
        justify-content: center;
    }
</style>