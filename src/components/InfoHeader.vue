<template>
    <div class="info-header-container" :style="style">
        <router-link class="info-header-logo" to="/">
            <img class="info-header-logo-image" src="../assets/common/logo-icon.svg" alt="">
        </router-link>
        <div class="info-header-block">
            <img class="info-header-block-image" src="../assets/main/whatsapp-icon.svg" alt="clock">
            <div class="info-header-block-text">
                <a href="tel:+79161691837" class="info-header-block-phone" 
                   onclick="ym(52043682, 'reachGoal', 'watsapp'); return true;">
                    <span style="opacity: 0.7;">+7</span>
                    (916) 169-18-37</a>
                <span class="info-header-block-description">Ответим в Whatsapp в любое время!</span>
            </div>
        </div>
        <div class="info-header-block">
            <img class="info-header-block-image" src="../assets/common/phone-icon.svg" alt="clock">
            <div class="info-header-block-text">
                <a href="tel:+74959207430" class="info-header-block-phone" 
                   onclick="ym(52043682, 'reachGoal', 'tel'); return true;">
                    <span style="opacity: 0.7;">+7</span>
                    (495) 920-74-30</a>
                <span class="info-header-block-description">Администратор каждый день с 11:00 до 20:00</span>
            </div>
        </div>
        <div class="info-header-block">
            <img class="info-header-block-image" src="../assets/main/metro-icon.svg" alt="metro">
            <div class="info-header-block-text">
                <span class="info-header-block-description">Добрынинская, Серпуховская, Павелецкая</span>
            </div>
        </div>
        <div class="info-header-block-tablet">
            <img class="info-header-block-image" src="../assets/main/whatsapp-icon.svg" alt="clock">
            <div class="info-header-block-text">
                <a href="tel:+79161691837" class="info-header-block-phone"
                   onclick="ym(52043682, 'reachGoal', 'watsapp'); return true;">
                    <span style="opacity: 0.5;">+7</span>
                    (916) 169-18-37</a>
                <span class="info-header-block-description">— Whatsapp</span>
            </div>
        </div>
        <div class="info-header-block-tablet">
            <img class="info-header-block-image" src="../assets/common/phone-icon.svg" alt="clock">
            <div class="info-header-block-text">
                <a href="tel:+74959207430" class="info-header-block-phone"
                   onclick="ym(52043682, 'reachGoal', 'tel'); return true;">
                    <span style="opacity: 0.5;">+7</span>
                    (495) 920-74-30</a>
                <span class="info-header-block-description">— с 11 до 20</span>
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
        width: 95%;
        right: 0;
        top: 10rem;
        z-index: 9;
        color: white;
    }

    .info-header-logo {
        margin: -1rem auto 0 0;
    }
    
    .info-header-logo-image {
        width: 20rem;
        height: 20rem;
    }

    .info-header-block {
        display: flex;
        align-items: flex-start;
        margin: 0 2rem;
    }

    .info-header-block-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 2rem;
    }

    .info-header-block-image {
        width: 3.6rem;
    }

    .info-header-block-phone {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 1.17;
        text-decoration: none;
        color: inherit;
    }

    .info-header-block-description {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.4rem;
        max-width: 18rem;
        text-align: left;
        line-height: 1.57;
    }
    
    .info-header-block-tablet {
        display: none;
        align-items: center;
    }

    @media screen and (max-width: 1280px) {
        .info-header-container {
            height: 6.6rem;
            width: 100%;
            background-color: white;
            top: 5.65rem;
            display: flex;
            align-items: center;
        }
        
        .info-header-logo-image {
            width: 6rem;
            height: 6rem;
        }
        
        .info-header-logo {
            margin: 0 6rem 0 7.5rem;
        }
        
        .info-header-block {
            display: none;
        }
        
        .info-header-block-image {
            width: 2.2rem;
            height: 2.2rem;
        }
        
        .info-header-block-phone {
            font-family: GothamPro-Bold, sans-serif;
            font-size: 1.4rem;
            text-decoration: none;
            color: black;
            margin-left: 1rem;
        }
        
        .info-header-block-tablet {
            display: flex;
            margin-left: 3rem;
        }
        
        .info-header-block-text {
            flex-direction: row;
            align-items: center;
            margin: 0;
        }
        
        .info-header-block-description {
            font-family: GothamPro, sans-serif;
            color: black;
            font-size: 1.2rem;
            margin-left: 0.5rem;
        }
    }
    
</style>