<template>
    <div>
        <button v-for="project in projects" :key="project.id" @click="switchProjectCategories(project)">{{ project.name }}</button>
        <component :is="component"/>
    </div>
</template>

<script>
import BathroomComp from './BathroomComp.vue'
import BedRoomComp from './BedRoomComp.vue'
import KitchanComp from './KitchanComp.vue'
import LivingAreaComp from './LivingAreaComp.vue'
export default {
    name: 'OurProjects',
    components: {
        BathroomComp,
        BedRoomComp,
        KitchanComp,
        LivingAreaComp
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

</style>