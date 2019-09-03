<template>
    <div class="container">
        <div class="information-container">
            <div style="width: 75rem; 
            height: 75rem; 
            background-color: #fff7d4; 
            border-radius: 50rem / 60rem; 
            position: absolute; 
            top: -20rem; 
            right: 55rem;"
            ></div>
            <img style="position: absolute; right: 0;" src="../assets/main/background.png"
                 srcset="../assets/main/background@2x.png 2x" alt="">
            <img style="position: absolute; right: 108rem; top: 8rem;" src="../assets/main/logo.png"
                 srcset="../assets/main/logo@2x.png 2x, ../assets/main/logo@3x.png 3x" alt="">
            <div class="info-block-container">
                <div class="info-block">
                    <img class="info-block-image" src="../assets/main/phone-icon.svg" alt="clock">
                    <div class="info-block-text">
                        <span class="info-block-phone">
                            <span class="info-block-phone-light">+7</span>
                            (916) 169-18-30</span>
                        <span class="info-block-description">Ответим в Whatsapp с любое время!</span>
                    </div>
                </div>
                <div class="info-block">
                    <img class="info-block-image" src="../assets/main/clock-icon.svg" alt="clock">
                    <div class="info-block-text">
                        <span class="info-block-phone">
                            <span class="info-block-phone-light">+7</span>
                            (495) 920-74-30</span>
                        <span class="info-block-description">Каждый день с 11:00 до 20:00</span>
                    </div>
                </div>
                <div class="info-block">
                    <img class="info-block-image" src="../assets/main/metro-icon.svg" alt="metro">
                    <div class="info-block-text">
                        <span class="info-block-description">Добрынинская, Серпуховская, Павелецкая</span>
                    </div>
                </div>
            </div>
            <div class="title-block-container">
                <div style="width: 60rem;" class="title-block">Лучшая школа 
                    <span style="color: var(--tomato);">испанского</span></div>
                <div style="width: 55rem;" class="title-block">и каталанского в Москве</div>
            </div>
            <div class="info-block-circle-container">
                <div class="info-block-circle info-block-circle-light">
                    <span style="color: var(--tomato);" class="info-block-circle-title">4 000</span>
                    <span class="info-block-circle-description info-block-circle-description-black">
                        довольных слушателей</span>
                </div>
                <div class="info-block-circle">
                    <span class="info-block-circle-title">от 319 ₽</span>
                    <span class="info-block-circle-description">стоимость 1 часа занятия</span>
                </div>
                <div class="info-block-circle">
                    <span class="info-block-circle-title">8 лет</span>
                    <span class="info-block-circle-description">успешной работы</span>
                </div>
            </div>
        </div>
        <div class="group-recruitment">
            <img style="position: absolute; left: 0; top: -5rem;" src="../assets/main/group-recruitment.png"
                 srcset="../assets/main/group-recruitment@2x.png 2x, ../assets/main/group-recruitment@3x.png 3x"
                 alt="">
        </div>
        <div class="courses">

        </div>
        <div class="events">

        </div>
        <div class="teachers">

        </div>
        <div class="feedback">
            <img style="position: absolute; left: 0; top: 10rem;" src="../assets/main/feedback-left.svg" alt="">
            <img style="position: absolute; left: 0; bottom: 0;" src="../assets/main/feedback-bottom.svg" alt="">
            <img style="position: absolute; right: 0; top: 10rem;" src="../assets/main/feedback-right.svg" alt="">
            <img style="position: absolute; right: 6rem; top: 8rem;" src="../assets/main/feedback-right-2.svg"
                 alt="">
        </div>
        <div class="blog">

        </div>
        <div class="about">
            <img style="position: absolute; left: 0;" src="../assets/main/about-left.svg" alt="">
            <img style="position: absolute; right: 0; top: 10rem;" src="../assets/main/about-right.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

    .container {
        background-color: white;
    }

    .information-container {
        height: 87rem;
        position: relative;
    }
    
    .info-block-container {
        position: absolute;
        display: flex;
        right: 0;
        top: 6rem;
    }
    
    .info-block {
        display: flex;
        align-items: flex-start;
        margin: 0 2rem;
    }
    
    .info-block-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 2rem;
    }
    
    .info-block-image {
        max-width: 3.6rem;
    }
    
    .info-block-phone-light {
        color: rgba(255, 255, 255, 0.7);
    }
    
    .info-block-phone {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 2.4rem;
        font-weight: 500;
        color: white;
        line-height: 1.17;
    }
    
    .info-block-description {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.4rem;
        color: white;
        max-width: 20rem;
        text-align: left;
        line-height: 1.57;
        margin-top: 1rem;
    }
    
    .title-block-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        right: 40rem;
        top: 23rem;
    }
    
    .title-block {
        font-family: FedraSerifAPro, sans-serif;
        font-size: 4rem;
        background-color: white;
        height: 6rem;
        border-radius: 0.8rem;
        margin-top: -1rem;
    }
    
    .info-block-circle-container {
        position: absolute;
        display: flex;
        top: 45rem;
        right: 0;
    }
    
    .info-block-circle {
        height: 20rem;
        width: 20rem;
        border-radius: 10rem;
        background-color: rgba(15, 5, 1, 0.7);
        display: flex;
        flex-direction: column;
        margin: 0 14rem;
    }
    
    .info-block-circle-light {
        background-color: rgba(255, 201, 0, 0.4);
    }
    
    .info-block-circle-title {
        font-size: 6rem;
        font-family: GothamPro-Bold, sans-serif;
        margin-top: 7rem;
        color: white;
    }
    
    .info-block-circle-description {
        font-family: FedraSerifAPro-Bold, sans-serif;
        font-size: 2.4rem;
        line-height: 1.33;
        margin-top: 2rem;
        color: white;
    }

    .info-block-circle-description-black {
        color: black;
    }

    .group-recruitment {
        height: 44.4rem;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3));
        position: relative;
    }

    .courses {
        height: 70rem;
    }

    .events {
        height: 78rem;
        background-color: var(--background-color-lighter);
    }

    .teachers {
        height: 80rem;
    }

    .feedback {
        background-color: var(--background-color-white);
        height: 70rem;
        position: relative;
    }

    .blog {
        height: 70rem;
    }

    .about {
        height: 84rem;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3));
        position: relative;
    }

</style>