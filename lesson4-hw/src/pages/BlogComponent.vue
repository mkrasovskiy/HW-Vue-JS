<template>
    <div class="blog">
        <BlogLineComponent />
        <BlogBunnerComponent />
        <BlogBlogComponent />
        <HomeFooterComponent />
    </div>
</template>

<script>
import BlogLineComponent from '@/components/BlogLineComponent.vue';
import BlogBunnerComponent from '@/components/BlogBunnerComponent.vue';
import BlogBlogComponent from '@/components/BlogBlogComponent.vue';
import HomeFooterComponent from '@/components/HomeFooterComponent.vue';

export default {
    name: 'BlogComponent',
    components: {
        BlogLineComponent,
        BlogBunnerComponent,
        BlogBlogComponent,
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
</style>