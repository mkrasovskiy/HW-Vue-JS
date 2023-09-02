<template>
    <section class="projects center">
        <div class="projects__heading">
            <h2 class="projects__heading_title">Follow Our Projects</h2>
            <p class="projects__heading_txt">It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will be&nbsp;distracted by&nbsp;the of&nbsp;readable content of&nbsp;page lookings at&nbsp;its layouts points.</p>
        </div>
        <div class="projects__list">
            <article class="projects__card"> 
                <img class="projects__card-img_1" src="../assets/img/project1.png" alt="project-1">
                <div class="projects__description">
                    <div>
                        <h3 class="projects__description_title">Modern Kitchan</h3>
                        <p class="projects__description_txt">Decor&nbsp;/ Artchitecture</p>
                    </div>
                    <a class="projects__description_link" href="#">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle class="projects__description_circle" cx="35" cy="35" r="35" fill="#F4F0EC"/>
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </a>                    
                </div>
            </article>
            <article class="projects__card">
                <img class="projects__card-img_2" src="../assets/img/project2.png" alt="project-2">
                <div class="projects__description">
                    <div>
                        <h3 class="projects__description_title">Modern Kitchan</h3>
                        <p class="projects__description_txt">Decor&nbsp;/ Artchitecture</p>
                    </div>
                    <a class="projects__description_link" href="#">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle class="projects__description_circle" cx="35" cy="35" r="35" fill="#F4F0EC"/>
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </a>                       
                </div>
            </article>
        </div>
        <div class="projects__list">
            <article class="projects__card">
                <img class="projects__card-img_3" src="../assets/img/project3.png" alt="project-3">
                <div class="projects__description">
                    <div>
                        <h3 class="projects__description_title">Modern Kitchan</h3>
                        <p class="projects__description_txt">Decor&nbsp;/ Artchitecture</p>
                    </div>
                    <a class="projects__description_link" href="#">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle class="projects__description_circle" cx="35" cy="35" r="35" fill="#F4F0EC"/>
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </a>                       
                </div>
            </article>
            <article class="projects__card">
                <img class="projects__card-img_4" src="../assets/img/project4.png" alt="project-4">
                <div class="projects__description">
                    <div>
                        <h3 class="projects__description_title">Modern Kitchan</h3>
                        <p class="projects__description_txt">Decor&nbsp;/ Artchitecture</p>
                    </div>
                    <a class="projects__description_link" href="#">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle class="projects__description_circle" cx="35" cy="35" r="35"/>
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </a>                     
                </div>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeProjectsComponent',
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
    .projects {
        margin-bottom: 97px;
        &__heading {
            margin: 0 auto;
            width: 737px;
            text-align: center;
            &_title {
                margin-bottom: 8px;
                font-size: 50px;
                line-height: 62.5px;
                letter-spacing: 1px;
            }
            &_txt {
                margin-bottom: 93px;
                color: $colorTxt;
                font-family: $fontText;
                font-size: 22px;
                line-height: 33px;
                letter-spacing: 0.22px;
            }
        }
        &__list {
            margin-bottom: 56px;
            display: flex;
            gap: 104px;
            flex-wrap: wrap;
            &:last-child {
                margin-bottom: 0px;
            }
        }
        &__card {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        &__card-img {
            width: 548px;
            background-repeat: no-repeat;
            background-size: cover;
            &_1 {
                width: 548px;
                border-radius: 0 80px 0 0;
            }
            &_2 {
                width: 548px;
                border-radius: 80px 0 0 0;
            }
            &_3 {
                width: 548px;
                border-radius: 0 0 80px 0;
            }
            &_4 {
                width: 548px;
                border-radius: 0 0 0 80px;
            }
        }
        &__description {
            display: flex;
            justify-content: space-between;
            &_title {
                font-size: 25px;
                line-height: 31.25px;
                letter-spacing: 0.5px;
                margin-bottom: 4px;
            }
            &_txt {
                color: $colorTxt;
                font-family: $fontText;
                font-size: 22px;
                line-height: 33px;
                letter-spacing: 0.22px;
            }
            &_circle {
                fill:#F4F0EC;
                &:hover {
                    opacity: 0.5;
                    transition: 0.3s;
                }
            }
        }
    }
</style>