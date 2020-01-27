<template>
    <div class="footer-container">
        <div class="footer-links">
            <div class="footer-blocks-container">
                <div class="footer-block">
                    <span class="footer-block-item footer-block-header">О школе</span>
                    <router-link class="footer-block-item footer-block-link" to="/about">Centro Vamos</router-link>
                    <router-link class="footer-block-item footer-block-link" to="/feedbacks">Отзывы</router-link>
                    <router-link class="footer-block-item footer-block-link" to="/teachers">Преподаватели</router-link>
                    <router-link class="footer-block-item footer-block-link" to="/partners">Партнёры</router-link>
                    <router-link class="footer-block-item footer-block-link" to="/contacts">Контакты</router-link>
                    <router-link class="footer-block-item footer-block-link" to="/howtolearn">Как выучить испанский?</router-link>
                    <router-link class="footer-block-item footer-block-link" to="/dele">Подготовка к DELE</router-link>
                    <router-link class="footer-block-item footer-block-header" to="/contacts"
                                 onclick="ym(52043682, 'reachGoal', 'online-zapis'); return true;">
                        Онлайн запись
                    </router-link>
                    <router-link class="footer-block-item footer-block-header" to="/payment"
                                 onclick="ym(52043682, 'reachGoal', 'online-payment'); return true;">
                        Оплата онлайн
                    </router-link>
                </div>
                <div class="footer-block">
                    <span class="footer-block-item footer-block-header">Обучение</span>
                    <router-link class="footer-block-item footer-block-link" to="/contacts">Набор в группы</router-link>
                    <router-link class="footer-block-item footer-block-link" to="/events">Наши мероприятия</router-link>
                    <router-link class="footer-block-item footer-block-link" to="/courses">Курсы</router-link>
                    <router-link class="footer-block-item footer-block-link" to="/club">Habla клуб</router-link>
                </div>
                <div class="footer-block">
                    <span class="footer-block-item footer-block-header">Контакты</span>
                    <a class="footer-block-item footer-block-text" href="tel:+74959207430">+7 (495) 920-74-30</a>
                    <a class="footer-block-item footer-block-text" href="tel:+79161691837">+7 (916) 169-18-37</a>
                    <a class="footer-block-item footer-block-link" href="mailto:info@centroespanol.ru">info@centroespanol.ru</a>
                    <span class="footer-block-item footer-block-text">Москва, Пятницкая ул., 71/5 строение 2</span>
                    <span class="footer-block-item footer-block-metro">
                    <img class="footer-block-image" alt="metro" src="../assets/footer/metro-red.svg">
                    <span class="footer-block-text footer-block-grey-text footer-block-metro-text">Добрынинская - 5 мин. пешком</span>
                </span>
                    <span class="footer-block-item footer-block-metro">
                    <img class="footer-block-image" alt="metro" src="../assets/footer/metro-grey.svg">
                    <span class="footer-block-text footer-block-grey-text footer-block-metro-text">Серпуховская - 5 мин. пешком</span>
                </span>
                    <span class="footer-block-item footer-block-metro">
                    <img class="link-image" alt="metro" src="../assets/footer/metro-green.svg">
                    <span class="footer-block-text footer-block-grey-text footer-block-metro-text">Павелецкая - 10 мин. пешком</span>
                </span>
                </div>
            </div>
            <div class="footer-map">
                <YandexMaps :width=480 :height=360 />
            </div>
            <div class="footer-map-tablet">
                <YandexMaps :height=300 />
            </div>
        </div>
        <div class="footer-links-mobile">
            <div class="footer-map-tablet">
                <YandexMaps :height=200 />
            </div>
            <div class="footer-block">
                <span class="footer-block-item footer-block-header">Контакты</span>
                <a class="footer-block-item footer-block-text" href="tel:+74959207430">+7 (495) 920-74-30</a>
                <a class="footer-block-item footer-block-text" href="tel:+79161691837">+7 (916) 169-18-37</a>
                <a class="footer-block-item footer-block-link" href="mailto:info@centroespanol.ru">info@centroespanol.ru</a>
                <span class="footer-block-item footer-block-text">Москва, Пятницкая ул., 71/5 строение 2</span>
                <span class="footer-block-item footer-block-metro">
                    <img class="footer-block-image" alt="metro" src="../assets/footer/metro-red.svg">
                    <span class="footer-block-text footer-block-grey-text footer-block-metro-text">Добрынинская - 5 мин. пешком</span>
                </span>
                <span class="footer-block-item footer-block-metro">
                    <img class="footer-block-image" alt="metro" src="../assets/footer/metro-grey.svg">
                    <span class="footer-block-text footer-block-grey-text footer-block-metro-text">Серпуховская - 5 мин. пешком</span>
                </span>
                <span class="footer-block-item footer-block-metro">
                    <img class="link-image" alt="metro" src="../assets/footer/metro-green.svg">
                    <span class="footer-block-text footer-block-grey-text footer-block-metro-text">Павелецкая - 10 мин. пешком</span>
                </span>
            </div>
            <hr class="footer-delimiter"/>
            <div class="footer-block">
                <span class="footer-block-item footer-block-header">О школе</span>
                <router-link class="footer-block-item footer-block-link" to="/about">Centro Vamos</router-link>
                <router-link class="footer-block-item footer-block-link" to="/feedbacks">Отзывы</router-link>
                <router-link class="footer-block-item footer-block-link" to="/teachers">Преподаватели</router-link>
                <router-link class="footer-block-item footer-block-link" to="/partners">Партнёры</router-link>
                <router-link class="footer-block-item footer-block-link" to="/contacts">Контакты</router-link>
                <router-link class="footer-block-item footer-block-link" to="/howtolearn">Как выучить испанский?</router-link>
                <router-link class="footer-block-item footer-block-link" to="/dele">Подготовка к DELE</router-link>
                <router-link class="footer-block-item footer-block-header" to="/contacts"
                             onclick="ym(52043682, 'reachGoal', 'online-zapis'); return true;">
                    Онлайн запись
                </router-link>
                <router-link style="margin-bottom: 0" class="footer-block-item footer-block-header" to="/payment"
                             onclick="ym(52043682, 'reachGoal', 'online-payment'); return true;">
                    Оплата онлайн
                </router-link>
            </div>
            <hr class="footer-delimiter"/>
            <div class="footer-block">
                <span class="footer-block-item footer-block-header">Обучение</span>
                <router-link class="footer-block-item footer-block-link" to="/contacts">Набор в группы</router-link>
                <router-link class="footer-block-item footer-block-link" to="/events">Наши мероприятия</router-link>
                <router-link class="footer-block-item footer-block-link" to="/courses">Курсы</router-link>
                <router-link class="footer-block-item footer-block-link" to="/club">Habla клуб</router-link>
            </div>
        </div>
        <hr class="footer-delimiter"/>
        <div class="footer-information">
            <div class="info-text">© Centro Vamos, 2019</div>
            <div class="links-container">
                <a class="link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/centroespanol/">
                    <img class="link-image" alt="facebook" src="../assets/footer/facebook.svg">
                </a>
                <a class="link" href="#"><img class="link-image" alt="youtube" src="../assets/footer/youtube.svg"></a>
                <a class="link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vamos_centro/">
                    <img class="link-image" alt="instagram" src="../assets/footer/instagram.svg">
                </a>
            </div>
            <router-link class="information" to="/policy">Правовая информация</router-link>
            <div class="payment-container">
                <div class="payment-info">Принимаем к оплате</div>
                <img class="payment-method" alt="visa" src="../assets/footer/visa.svg">
                <img class="payment-method" alt="mastercard" src="../assets/footer/mastercard.svg">
                <img class="payment-method" alt="mir" src="../assets/footer/mir.svg">
            </div>
        </div>
        <div class="footer-information-mobile">
            <div class="info-text">© Centro Vamos, 2019</div>
            <router-link class="information" to="/policy">Правовая информация</router-link>
            <div class="links-container">
                <a class="link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/centroespanol/">
                    <img class="link-image" alt="facebook" src="../assets/footer/facebook.svg">
                </a>
                <a class="link" href="#"><img class="link-image" alt="youtube" src="../assets/footer/youtube.svg"></a>
                <a class="link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vamos_centro/">
                    <img class="link-image" alt="instagram" src="../assets/footer/instagram.svg">
                </a>
            </div>
            <div class="payment-info">Принимаем к оплате</div>
            <div class="payment-container">
                <img class="payment-method" alt="visa" src="../assets/footer/visa.svg">
                <img class="payment-method" alt="mastercard" src="../assets/footer/mastercard.svg">
                <img class="payment-method" alt="mir" src="../assets/footer/mir.svg">
            </div>
        </div>
        <div class="info-text-tablet">© Centro Vamos, 2019</div>
    </div>
</template>

<script>

    import YandexMaps from '../components/YandexMaps'
    
    export default {
        components: {
            YandexMaps
        }
    }
</script>

<style scoped>
    
    .footer-container {
        background-color: var(--background-color-dark);
        padding: 7.5rem 5% 2rem 5%;
        display: flex;
        flex-direction: column;
    }
    
    .footer-links {
        display: flex;
    }
    
    .footer-links-mobile {
        display: none;
        flex-direction: column;
    }

    .footer-blocks-container {
        display: flex;
    }
    
    .footer-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 2rem;
    }
    
    .footer-block:first-child {
        margin-left: 0;
    }
    
    .footer-block:last-child {
        margin-right: 0;
    }
    
    .footer-block-item {
        margin: 0.6rem 0;
        font-family: GothamPro-Bold, sans-serif;
    }
    
    .footer-block-header {
        text-decoration: none;
        letter-spacing: 0.092rem;
        text-transform: uppercase;
        color: white;
        margin: 1.5rem 0;
    }
    
    .footer-block-link {
        text-decoration: none;
        color: var(--main-color);
    }
    
    .footer-block-text {
        text-decoration: none;
        font-family: GothamPro, sans-serif;
        color: white;
    }
    
    .footer-block-metro {
        display: flex;
    }
    
    .footer-block-metro-text {
        margin-left: 0.5rem;
    }
    
    .footer-block-grey-text {
        color: rgba(255, 255, 255, 0.45);
    }
    
    .footer-map {
        margin-left: auto;
    }
    
    .footer-map-tablet {
        display: none;
    }
    
    .footer-delimiter {
        border: 0;
        border-top: rgba(255, 255, 255, 0.1) 0.1rem solid;
        margin: 2rem 0;
    }
    
    .footer-information {
        display: flex;
        align-items: center;
    }
    
    .footer-information-mobile {
        display: none;
        flex-direction: column;
        align-items: center;
    }
    
    .links-container {
        display: flex;
        align-items: center;
    }
    
    .link {
        height: 3.6rem;
        width: 3.6rem;
        border: solid 0.2rem var(--border-color);
        border-radius: 2rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .link-image {
        max-width: 2rem;
        max-height: 2rem;
    }
    
    .information {
        color: var(--main-color);
        font-weight: bold;
        margin-left: auto;
        margin-right: auto;
        text-decoration: none;
    }
    
    .info-text {
        color: rgba(255, 255, 255, 0.45);
        margin-right: 10rem;
    }
    
    .info-text-tablet {
        display: none;
        color: rgba(255, 255, 255, 0.45);
        margin-top: 1rem;
    }

    .payment-container {
        display: flex;
        align-items: center;
    }
    
    .payment-info {
        color: rgba(255, 255, 255, 0.45);
        margin-right: 3.6rem;
    }
    
    .payment-method {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    @media screen and (max-width: 1280px) {
        .footer-container {
            padding: 3rem 2rem;
        }
        
        .footer-links {
            flex-direction: column-reverse;
        }
        
        .footer-blocks-container {
            margin-top: 2rem;
        }
        
        .footer-map {
            display: none;
        }
        
        .footer-map-tablet {
            display: block;
        }
        
        .info-text {
            display: none;
        }
        
        .info-text-tablet {
            display: block;
        }
    }

    @media screen and (max-width: 760px) {
        .footer-links {
            display: none;
        }
        
        .footer-links-mobile {
            display: flex;
        }
        
        .footer-block {
            margin: 0;
        }
        
        .footer-delimiter {
            margin-bottom: 0;
        }
        
        .footer-information {
            display: none;
        }
        
        .footer-information-mobile {
            display: flex;
        }
        
        .info-text {
            display: block;
            margin: 1.5rem 0;
        }
        
        .info-text-tablet {
            display: none;
        }
        
        .information {
            margin-bottom: 1.5rem;
        }
        
        .links-container {
            margin-bottom: 1.5rem;
        }
        
        .payment-info {
            margin: 0 0 1.5rem 0;
        }
    }
    
</style>