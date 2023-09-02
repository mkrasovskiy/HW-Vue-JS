<template>
    <section class="blog center">
        <div class="blog__heading">
            <h2 class="blog__heading_title">Articles &amp;&nbsp;News</h2>
            <p class="blog__heading_txt">It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will be&nbsp;distracted by&nbsp;the of&nbsp;readable content of&nbsp;a&nbsp;page when lookings at&nbsp;its layouts the points of&nbsp;using.</p>
        </div>
        <div class="blog__wrp">
            <article class="blog__card">
                <div class="blog__tag">
                    <p class="blog__tag_txt">Kitchan Design</p>
                </div>
                <div class="blog__card-content">
                    <img class="blog__card-content_img" src="../assets/img/blog-photo1.png" alt="photo1">
                    <h2 class="blog__card-content_title">Let’s Get Solution For Building Construction Work</h2>
                </div>
                <div class="blog__date">
                    <p class="blog__date_txt">26 December,2022 </p>
                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle class="blog__card_circle" cx="26" cy="26.267" r="26"/>
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                        
                </div>
            </article>
            <article class="blog__card">
                <div class="blog__tag">
                    <p class="blog__tag_txt">Living Design</p>
                </div>
                <div class="blog__card-content">
                    <img class="blog__card-content_img" src="../assets/img/blog-photo2.png" alt="photo2">
                    <h2 class="blog__card-content_title">Low Cost Latest Invented Interior Designing Ideas.</h2>
                </div>
                <div class="blog__date">
                    <p class="blog__date_txt">22 December,2022</p>
                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle class="blog__card_circle" cx="26" cy="26.267" r="26"/>
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                        
                </div>
            </article>
            <article class="blog__card">
                <div class="blog__tag">
                    <p class="blog__tag_txt">Interior Design</p>
                </div>
                <div class="blog__card-content">
                    <img class="blog__card-content_img" src="../assets/img/blog-photo3.png" alt="photo3">
                    <h2 class="blog__card-content_title">Best For Any Office &amp;&nbsp;Business Interior Solution</h2>
                </div>
                <div class="blog__date">
                    <p class="blog__date_txt">25 December,2022</p>
                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle class="blog__card_circle" cx="26" cy="26.267" r="26"/>
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                        
                </div>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeBlogComponent',
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
    .blog {
        &__heading {
            width: 811px;
            margin: 96px auto 52px auto;
            text-align: center;
            &_title {
                font-size: 50px;
                line-height: 62.5px;
                letter-spacing: 1px;
            }
            &_txt {
                color: $colorTxt;
                font-family: $fontText;
                font-size: 22px;
                line-height: 33px;
                letter-spacing: 0.22px;
            }
        }
        &__wrp {
            margin-bottom: 96px;
            position: relative;
            z-index: 0;
            display: flex;
            justify-content: space-between;
        }
        &__card {
            padding: 21px;
            width: 382px;
            border-radius: 62px;
            border: 1px solid #E7E7E7;
            box-sizing: border-box;
            &:hover {
                transition: 0.3s;
                background: #F4F0EC;
            }
            &_circle {
                fill: #F4F0EC;
                cursor: pointer;
            }
            &:hover &_circle {
                transition: 0.3s;
                fill: #fff;
            }
        }
        &__tag {
            position: absolute;
            top: 249px;
            left: 41px;
            z-index: 9;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 124px;
            min-height: 41px;
            background: #FFF;
            border-radius: 8px 8px 8px 0;
            &_txt {
                color: $colorTxt;
                font-family: $fontText;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.16px;
                text-transform: capitalize;
            }
        }
        &__card-content {
            &_img {
                margin-bottom: 21px;
                width: 100%;
                border-radius: 45px 45px 0px 0px;
            }
            &_title {
                margin-bottom: 30px;
                width: 305px;
                height: 70px;
                font-size: 25px;
                line-height: 31.25px;
                letter-spacing: 0.5px;
            }
        }
        &__date {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &_txt {
                color: $colorTxt;
                font-family: $fontText;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.16px;
                text-transform: capitalize;
            }
        }
    }
</style>