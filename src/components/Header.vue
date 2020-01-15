<template>
    <div class="header-container">
        <ul class="menu-container">
            <li class="menu-item menu-burger" v-on:click="showMenu">
                <img v-if="!isMobileMenuVisible" alt="menu-burger" src="../assets/header/menu_burger.svg">
                <img v-else alt="menu-cross" src="../assets/header/menu_cross.svg">
            </li>
            <li class="menu-item">
                <router-link to="/about">О школе</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/courses">Курсы</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/teachers">Преподаватели</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/feedbacks">Отзывы</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/club">Habla клуб</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/partners">Партнёры</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/contacts">Контакты</router-link>
            </li>
            <li class="menu-item menu-item-color-light">
                <img class="gift-image" alt="gift" src="../assets/header/gift.svg">
                <router-link to="/contacts" onclick="ym(52043682, 'reachGoal', 'probnij'); return true;">Записаться на пробный урок!</router-link>
            </li>
        </ul>
        <div v-if="isMobileMenuVisible" class="mobile-menu-container">
            <div class="mobile-menu-links-container">
                <router-link class="mobile-menu-item" to="/about">О школе</router-link>
                <router-link class="mobile-menu-item" to="/courses">Курсы</router-link>
                <router-link class="mobile-menu-item" to="/teachers">Преподаватели</router-link>
                <router-link class="mobile-menu-item" to="/feedbacks">Отзывы</router-link>
                <router-link class="mobile-menu-item" to="/club">Habla клуб</router-link>
                <router-link class="mobile-menu-item" to="/partners">Партнёры</router-link>
                <router-link class="mobile-menu-item" to="/contacts">Контакты</router-link>
            </div>
            <div class="mobile-menu-delimiter"></div>
            <div class="mobile-menu-info-container">
                <img class="mobile-menu-info-image" src="../assets/header/phone-icon.svg" alt="phone-icon">
                <div class="mobile-menu-info-text-container">
                    <a href="tel:+79161691837" class="mobile-menu-info-phone" onclick="ym(52043682, 'reachGoal', 'watsapp'); return true;">
                        <span style="opacity: 0.5">+7</span> (916) 169-18-37</a>
                    <div class="mobile-menu-info-description">Ответим в Whatsapp <br> в любое время!</div>
                </div>
            </div>
            <div class="mobile-menu-delimiter"></div>
            <div class="mobile-menu-info-container">
                <img class="mobile-menu-info-image" src="../assets/header/clock-icon.svg" alt="clock-icon">
                <div class="mobile-menu-info-text-container">
                    <a href="tel:+74959207430" class="mobile-menu-info-phone" onclick="ym(52043682, 'reachGoal', 'tel'); return true;">
                        <span style="opacity: 0.5">+7</span> (495) 920-74-30</a>
                    <div class="mobile-menu-info-description">Каждый день с 11:00 до 20:00</div>
                </div>
            </div>
            <div class="mobile-menu-delimiter"></div>
            <div class="mobile-menu-info-container">
                <img class="mobile-menu-info-image" src="../assets/header/metro-icon.svg" alt="metro-icon">
                <div class="mobile-menu-info-text-container">
                    <div class="mobile-menu-info-metro">Москва, Пятницкая ул., 71/5 строение 2</div>
                    <div class="mobile-menu-info-description">Добрынинская — 5 мин. пешком</div>
                    <div class="mobile-menu-info-description">Серпуховская — 5 мин. пешком</div>
                    <div class="mobile-menu-info-description">Павелецкая — 10 мин. пешком</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods : {
            showMenu: function() {
                this.isMobileMenuVisible = !this.isMobileMenuVisible;
            }
        },
        data() {
            return {
                isMobileMenuVisible: false
            }
        }
    }
</script>

<style scoped>

    .menu-container {
        list-style-type: none;
        margin: 0 6rem;
        padding: 0;
        overflow: hidden;
        background-color: var(--main-color);
    }
    
    .header-container {
        min-width: 32rem;
        background-color: var(--main-color);
        font-family: GothamPro-Bold, sans-serif;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.1), 0 0.6rem 0.6rem rgba(0,0,0,0.1);
        z-index: 10;
        position: sticky;
        top: 0;
    }
    
    .menu-item {
        float: left;
    }
    
    .menu-item a {
        display: block;
        color: black;
        text-align: center;
        padding: 2.1rem 1.9rem;
        text-decoration: none;
        font-size: 1.2rem;
        letter-spacing: 0.092rem;
        text-transform: uppercase;
    }
    
    .menu-item-color-light {
        background-color: var(--background-color-light);
        float: right;
        display: flex;
    }
    
    .gift-image {
        margin-bottom: -0.5rem;
        margin-left: -1rem;
    }
    
    .menu-burger {
        height: 5.65rem;
        width: 5.65rem;
        display: none;
    }
    
    .mobile-menu-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: var(--main-color);
    }
    
    .mobile-menu-links-container {
        display: flex;
        flex-direction: column;
        padding-left: 6.6rem;
        box-sizing: border-box;
    }
    
    .mobile-menu-item {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.2rem;
        color: black;
        text-transform: uppercase;
        text-decoration: none;
        height: 4rem;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .mobile-menu-item:first-child {
        margin-top: 1.5rem;
    }

    .mobile-menu-item:last-child {
        margin-bottom: 1.5rem;
    }
    
    .mobile-menu-delimiter {
        width: calc(100% - 4rem);
        align-self: center;
        border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    }
    
    .mobile-menu-info-container {
        width: 28rem;
        padding-top: 2rem;
        padding-bottom: 2.5rem;
        margin-left: 2rem;
        display: flex;
        align-items: flex-start;
    }
    
    .mobile-menu-info-image {
        width: 3.6rem;
        height: 3.6rem;
    }
    
    .mobile-menu-info-text-container {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
    }
    
    .mobile-menu-info-phone {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.8rem;
        text-decoration: none;
        color: black;
        margin-top: 0.8rem;
    }
    
    .mobile-menu-info-metro {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.2rem;
        line-height: 1.5;
        text-transform: uppercase;
        text-align: left;
        margin-top: 0.8rem;
    }
    
    .mobile-menu-info-description {
        font-family: GothamPro, sans-serif;
        font-size: 1.2rem;
        line-height: 1.5;
        margin-top: 1rem;
        text-align: left;
    }
    
    @media screen and (max-width: 1280px) {
        .menu-container {
            margin: 0;
            border-bottom: solid 1px rgba(0, 0, 0, 0.1);;
        }
        
        .menu-item:not(:first-child):not(:last-child) {
            display: none;
        }
    
        .menu-burger {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
    
</style>