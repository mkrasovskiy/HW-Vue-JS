<template>
    <div>
        <BlogLineComponent />
        <HomeHeaderComponent />
        <BlogDetailsBunnerComponent />
        <BlogDetailsArticleComponent />
        <HomeFooterComponent />
    </div>
</template>

<script>
import BlogLineComponent from '@/components/BlogLineComponent.vue';
import HomeHeaderComponent from '@/components/HomeHeaderComponent.vue';
import BlogDetailsBunnerComponent from '@/components/BlogDetailsBunnerComponent.vue';
import BlogDetailsArticleComponent from '@/components/BlogDetailsArticleComponent.vue';
import HomeFooterComponent from '@/components/HomeFooterComponent.vue';

export default {
    name: 'ArticleComponent',
    components: {
    BlogLineComponent,
    HomeHeaderComponent,
    BlogDetailsBunnerComponent,
    BlogDetailsArticleComponent,
    HomeFooterComponent
}
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
    .header {
        margin: 53px auto 57px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>