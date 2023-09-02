<template>
    <section class="bunner">
        <img class="bunner__img" src="../assets/img/Banner.jpg" alt="Banner" width="1920" height="356">
        <div class="bunner__content">
            <h2 class="bunner__content_title">Articles &amp;&nbsp;News</h2>
            <p class="bunner__content_txt"><a href="#">Home&nbsp;</a>/ <a href="#">Blog</a></p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BlogBunnerComponent',
};
</script>

<style lang="scss" scoped>
    $widthCenter: 1200px;
    $fontText: 'Jost', sans-serif;
    $colorTitle: #292F36;
    $colorTxt: #4D5053;

    .bunner {
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