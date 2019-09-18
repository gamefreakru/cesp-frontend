<template>
    <div class="info-header-container" :style="style">
        <router-link class="info-header-logo" to="/">
            <img src="../assets/main/logo.png"
                 srcset="../assets/main/logo@2x.png 2x, ../assets/main/logo@3x.png 3x" alt="">
        </router-link>
        <div class="info-header-block">
            <img class="info-header-block-image" src="../assets/main/phone-icon.svg" alt="clock">
            <div class="info-header-block-text">
                <span class="info-header-block-phone">
                    <span style="opacity: 0.7;">+7</span>
                    (916) 169-18-30</span>
                <span class="info-header-block-description">Ответим в Whatsapp с любое время!</span>
            </div>
        </div>
        <div class="info-header-block">
            <img class="info-header-block-image" src="../assets/main/clock-icon.svg" alt="clock">
            <div class="info-header-block-text">
                <span class="info-header-block-phone">
                    <span style="opacity: 0.7;">+7</span>
                    (495) 920-74-30</span>
                <span class="info-header-block-description">Каждый день с 11:00 до 20:00</span>
            </div>
        </div>
        <div class="info-header-block">
            <img class="info-header-block-image" src="../assets/main/metro-icon.svg" alt="metro">
            <div class="info-header-block-text">
                <span class="info-header-block-description">Добрынинская, Серпуховская, Павелецкая</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            textColor: String
        },
        computed: {
            style() {
                return "color: " + this.textColor;
            }
        }
    }
</script>

<style scoped>

    .info-header-container {
        position: absolute;
        display: flex;
        right: 0;
        top: 10rem;
        z-index: 9;
        color: white;
    }

    .info-header-logo {
        margin: -2rem 2.5rem 0;
    }

    .info-header-block {
        display: flex;
        align-items: flex-start;
        margin: 0 3rem;
    }

    .info-header-block-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 2rem;
    }

    .info-header-block-image {
        max-width: 3.6rem;
    }

    .info-header-block-phone {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 1.17;
    }

    .info-header-block-description {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.4rem;
        max-width: 18rem;
        text-align: left;
        line-height: 1.57;
        margin-top: 1rem;
    }
    
</style>