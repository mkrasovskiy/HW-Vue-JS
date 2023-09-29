<template>
    <div>
    </div>
</template>

<script>

export default {
    name: 'HomeHeaderComponent',
    data() {
    
    },
    created() {
        this.$router.push({name: 'homecomponent'})
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
        &__logo {
            display: flex;
            align-items: center;
            gap: 10px;
            &_txt {
                font-size: 40px;
                line-height: 50px;
            }
        }
        &__nav {
            width: 244px;
        }
        &__menu {
            display: flex;
            justify-content: space-between;
        }
        &__menu-link {
            font-family: $fontText;
            font-size: 20px;
            line-height: 25px;
        }
    }
</style>