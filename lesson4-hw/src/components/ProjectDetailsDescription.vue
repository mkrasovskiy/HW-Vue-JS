<template>
    <div class="project-details-description">
        <h2 class="project-details-description__heading">Minimal Look Bedrooms</h2>
        <p class="project-details-description__txt">
            <span class="project-details-description__txt_span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</span>
            <span class="project-details-description__txt_span">In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</span>
        </p>
        
    </div>
</template>

<script>

export default {
    name: 'ProjectDetailsDescription',
    components: {
        
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
    .project-details-description {
        width: 658px;
        &__heading {
            margin-bottom: 11px;
            font-size: 50px;
            line-height: 62.5px;
            letter-spacing: 1px;
        }
        &__txt {
            margin-bottom: 100px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            &_span {
                color: $colorTxt;
                font-family: $fontText;
                font-size: 22px;
                line-height: 33px;
                letter-spacing: 0.22px;
            }
        }
    }
</style>