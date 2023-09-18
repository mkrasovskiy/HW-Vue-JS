<template>
    <section class="project-bunner">
        <img class="project-bunner__img" src="../assets/img/ProjectBunner.jpg" alt="Banner" width="1950" height="356">
        <div class="project-bunner__content">
            <h2 class="project-bunner__content_title">Our Project</h2>
            <p class="project-bunner__content_txt"><a href="#">Home&nbsp;</a>/ <a href="#">Project</a></p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProjectBunner',

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

    .project-bunner {
        margin-bottom: 200px;
        &__img {
            position: relative;
            width: 100%;
            background-size: cover;
        }
        &__content {
            position: absolute;
            top: 179px;
            left: 50%;
            transform: translate(-50%, 0);
            padding: 41px 78px;
            text-align: center;
            background: #fff;
            border-radius: 37px 37px 0 0;
            &_title {
                font-size: 50px;
                line-height: 62.5px;
            }
            &_txt {
                color: $colorTxt;
                font-family: $fontText;
                font-size: 22px;
                line-height: 33px;
                letter-spacing: 0.22px;
            }
        }
    }
</style>