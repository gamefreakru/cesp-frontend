<template>
    <div class="contacts-page-container">
        <div class="contacts-page-header">
            <img class="contacts-page-image-left" src="../assets/contacts/contacts-left.svg" alt="">
            <img class="contacts-page-image-right" src="../assets/contacts/contacts-right.svg"
                 alt="">
            <span class="contacts-page-title">
                Контакты
                <TextBabel class="contacts-page-text-babel-wrapper" text="Contactos"/>
            </span>
        </div>
        <div class="contacts-page-body">
            <ContactsForm class="contacts-page-signup-wrapper"/>
            <img class="contacts-page-image-bottom" src="../assets/contacts/contacts-bottom-right.svg"
                 alt="">
            <div class="contacts-page-info-container">
                <div class="contacts-page-info-block-container">
                    <div class="contacts-page-info-block-title">Где находится</div>
                    <div class="contacts-page-info-block-place-container">
                        <img class="contacts-page-info-block-place-image" src="../assets/contacts/map-icon.svg" alt="">
                        <div class="contacts-page-info-block-place-info-container">
                            <span class="contacts-page-info-block-info-title">
                                Москва, Пятницкая ул., 71/5 строение 2
                            </span>
                            <span class="contacts-page-info-block-info">
                                Понедельник - Четверг: с 11:00 до 19:00
                            </span>
                            <span class="contacts-page-info-block-info">
                                Суббота - Воскресенье: с 11:00 до 16:00
                            </span>
                            <span class="contacts-page-info-block-info">
                                Пятница: <span style="font-family: GothamPro-Medium, sans-serif; color: var(--tomato)">выходной</span>
                            </span>
                        </div>
                    </div>
                    <div class="contacts-page-social-networks-container">
                        <span class="contacts-page-social-networks-title">
                            Мы в социальных сетях
                        </span>
                        <div class="contacts-page-social-network-links-container">
                            <a class="contacts-page-social-network-link" href="https://www.facebook.com/centroespanol/">
                                <img class="contacts-page-social-network-link-image"
                                     src="../assets/contacts/facebook-icon.svg" alt="facebook">
                            </a>
                            <a class="contacts-page-social-network-link" href="#">
                                <img class="contacts-page-social-network-link-image"
                                     src="../assets/contacts/youtube-icon.svg"
                                     alt="youtube">
                            </a>
                            <a class="contacts-page-social-network-link" href="https://www.instagram.com/vamos_centro/">
                                <img class="contacts-page-social-network-link-image"
                                     src="../assets/contacts/instagram-icon.png" alt="instagram">
                            </a>
                        </div>
                    </div>
                    <div class="contacts-page-info-block-container contacts-page-info-block-how-to-get-tablet">
                        <div class="contacts-page-info-block-title">Как добраться</div>
                        <div class="contacts-page-info-block-content-container">
                            <img class="contacts-page-info-block-metro-image"
                                 src="../assets/contacts/metro-brown-icon.svg"
                                 alt="">
                            <span class="contacts-page-info-block-metro">
                                <span class="contacts-page-info-block-metro-name">Добрынинская</span>
                                - 5 мин. пешком
                            </span>
                        </div>
                        <div class="contacts-page-info-block-content-container">
                            <img class="contacts-page-info-block-metro-image"
                                 src="../assets/contacts/metro-grey-icon.svg"
                                 alt="">
                            <span class="contacts-page-info-block-metro">
                                <span class="contacts-page-info-block-metro-name">Серпуховская</span>
                                - 5 мин. пешком
                            </span>
                        </div>
                        <div class="contacts-page-info-block-content-container">
                            <img class="contacts-page-info-block-metro-image"
                                 src="../assets/contacts/metro-green-icon.svg"
                                 alt="">
                            <span class="contacts-page-info-block-metro">
                                <span class="contacts-page-info-block-metro-name">Павелецкая</span>
                                - 10 мин. пешком
                            </span>
                        </div>
                    </div>
                </div>
                <div class="contacts-page-info-block-container">
                    <div class="contacts-page-info-block-title">Как связаться</div>
                    <div class="contacts-page-info-block-content-container">
                        <img class="contacts-page-info-block-phone-image" src="../assets/common/phone-icon.svg" alt="">
                        <div class="contacts-page-info-block-content-info-container">
                            <div class="contacts-page-info-block-info-title">+7 (916) 169-18-37</div>
                            <div class="contacts-page-info-block-info">Ответим в Whatsapp в любое время!</div>
                        </div>
                    </div>
                    <div class="contacts-page-info-block-content-container">
                        <img class="contacts-page-info-block-phone-image" src="../assets/common/clock-icon.svg" alt="">
                        <div class="contacts-page-info-block-content-info-container">
                            <div class="contacts-page-info-block-info-title">+7 (495) 920-74-30</div>
                            <div class="contacts-page-info-block-info">Каждый день с 11:00 до 20:00</div>
                        </div>
                    </div>
                </div>
                <div class="contacts-page-info-block-container contacts-page-info-block-how-to-get">
                    <div class="contacts-page-info-block-title">Как добраться</div>
                    <div class="contacts-page-info-block-content-container">
                        <img class="contacts-page-info-block-metro-image" src="../assets/contacts/metro-brown-icon.svg"
                             alt="">
                        <span class="contacts-page-info-block-metro">
                            <span class="contacts-page-info-block-metro-name">
                                Добрынинская
                            </span>
                            - 5 мин. пешком
                        </span>
                    </div>
                    <div class="contacts-page-info-block-content-container">
                        <img class="contacts-page-info-block-metro-image" src="../assets/contacts/metro-grey-icon.svg"
                             alt="">
                        <span class="contacts-page-info-block-metro">
                            <span class="contacts-page-info-block-metro-name">
                                Серпуховская
                            </span>
                            - 5 мин. пешком
                        </span>
                    </div>
                    <div class="contacts-page-info-block-content-container">
                        <img class="contacts-page-info-block-metro-image" src="../assets/contacts/metro-green-icon.svg"
                             alt="">
                        <span class="contacts-page-info-block-metro">
                            <span class="contacts-page-info-block-metro-name">
                                Павелецкая
                            </span>
                            - 10 мин. пешком
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import TextBabel from "../components/TextBabel";
    import ContactsForm from "../components/ContactsForm";

    export default {
        components: {
            TextBabel,
            ContactsForm
        }
    }
</script>

<style scoped>

    .contacts-page-header {
        height: 35rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--background-color-white);
    }

    .contacts-page-image-left {
        position: absolute;
        bottom: 0;
        left: 8rem;
    }

    .contacts-page-image-right {
        position: absolute;
        bottom: 0;
        right: 6.5rem;
    }

    .contacts-page-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 4rem;
        margin-top: 25rem;
        position: relative;
    }

    .contacts-page-text-babel-wrapper {
        position: absolute;
        top: -4rem;
        left: 20rem;
    }

    .contacts-page-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        height: 120rem;
    }

    .contacts-page-signup-wrapper {
        margin-top: 6rem;
    }

    .contacts-page-image-bottom {
        position: absolute;
        bottom: 0;
        right: 0
    }

    .contacts-page-info-container {
        display: flex;
        margin-top: 9rem;
    }

    .contacts-page-info-block-container {
        display: flex;
        flex-direction: column;
        margin: 0 5rem;
        align-items: flex-start;
    }

    .contacts-page-info-block-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 2.4rem;
        text-align: left;
    }

    .contacts-page-info-block-place-container {
        display: flex;
        margin-top: 2rem;
        align-items: flex-start;
    }

    .contacts-page-info-block-place-image {
        width: 2.6rem;
    }

    .contacts-page-info-block-place-info-container {
        display: flex;
        flex-direction: column;
        margin-left: 1.5rem;
        align-items: flex-start;
    }

    .contacts-page-info-block-info-title {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.6rem;
        margin: 0.2rem 0;
        text-align: left;
    }

    .contacts-page-info-block-info {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        margin: 0.2rem 0;
        text-align: left;
    }

    .contacts-page-info-block-content-container {
        display: flex;
        align-items: center;
        margin-top: 2rem;
    }

    .contacts-page-info-block-phone-image {
        width: 3.6rem;
    }

    .contacts-page-info-block-content-info-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 1.5rem;
    }

    .contacts-page-info-block-metro-image {
        width: 1.7rem;
    }

    .contacts-page-info-block-metro {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        margin-left: 1rem;
    }

    .contacts-page-info-block-metro-name {
        font-family: GothamPro-Bold, sans-serif;
        text-decoration: underline;
        text-decoration-style: dashed;
    }

    .contacts-page-social-networks-container {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        align-items: flex-start;
        margin-top: 3rem;
    }

    .contacts-page-social-networks-title {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.6rem;
    }

    .contacts-page-social-network-links-container {
        display: flex;
        align-items: center;
        margin-top: 1rem;
    }
    
    .contacts-page-social-network-link {
        margin: 0 0.5rem;
    }
    
    .contacts-page-social-network-link:first-child {
        margin-left: 0;
    }
    
    .contacts-page-social-network-link:last-child {
        margin-right: 0;
    }

    .contacts-page-social-network-link-image {
        width: 4rem;
    }

    .contacts-page-requisites-container {
        display: flex;
        flex-direction: column;
        width: 35rem;
        align-items: flex-start;
        margin-top: 2rem;
    }

    .contacts-page-requsites-title {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }

    .contacts-page-requsites {
        font-family: GothamPro, sans-serif;
        font-size: 1.2rem;
        margin: 0.2rem 0;
        text-align: left;
    }

    .contacts-page-info-block-how-to-get-tablet {
        display: none;
    }

    @media screen and (max-width: 1280px) {

        .contacts-page-body {
            height: 130rem;
        }
        
        .contacts-page-header {
            height: 20rem;
        }

        .contacts-page-image-left {
            left: 0;
            width: 30%;
        }

        .contacts-page-image-right {
            right: 2.5rem;
            width: 30%;
        }

        .contacts-page-title {
            font-size: 3rem;
            margin-top: 12rem;
        }

        .contacts-page-text-babel-wrapper {
            top: -3.5rem;
            left: 14rem;
        }

        .contacts-page-info-block-how-to-get {
            display: none;
        }

        .contacts-page-info-block-how-to-get-tablet {
            display: block;
            margin: 4rem 0 0 0 !important;
        }

        .contacts-page-image-bottom {
            width: 50%;
        }

        .contacts-page-info-container {
            margin-top: 6rem;
        }

        .contacts-page-info-block-container {
            margin: 0 2.5rem;
        }

        .contacts-page-info-block-container:first-child {
            margin-left: 5rem
        }

        .contacts-page-info-block-container:last-child {
            margin-right: 5rem;
        }

    }

    @media screen and (max-width: 760px) {
        
        .contacts-page-header {
            height: 23rem;
        }
        
        .contacts-page-body {
            height: 133rem;
        }
        
        .contacts-page-image-left {
            display: none;
        }

        .contacts-page-image-right {
            display: none;
        }
        
        .contacts-page-title {
            font-size: 1.8rem;
            margin-top: 17rem;
        }
        
        .contacts-page-text-babel-wrapper {
            left: 8rem;
        }
        
        .contacts-page-signup-wrapper {
            margin-top: 2rem;
        }
        
        .contacts-page-info-container {
            flex-direction: column;
            margin-top: 4rem;
            width: calc(100% - 4rem);
        }

        .contacts-page-info-block-how-to-get {
            display: block;
        }

        .contacts-page-info-block-how-to-get-tablet {
            display: none;
        }
        
        .contacts-page-info-block-container {
            margin: 1rem 0;
        }

        .contacts-page-info-block-container:first-child {
            margin-left: 0
        }

        .contacts-page-info-block-container:last-child {
            margin-right: 0;
        }
        
        .contacts-page-info-block-title {
            font-size: 1.6rem;
        }
        
        .contacts-page-info-block-place-container {
            margin-top: 1rem;
        }
        
        .contacts-page-info-block-place-image {
            width: 1.8rem;
        }
        
        .contacts-page-info-block-place-info-container {
            margin-left: 1rem;
        }
        
        .contacts-page-info-block-info-title {
            font-size: 1.4rem;
            margin-bottom: 1rem;
        }
        
        .contacts-page-info-block-info {
            font-size: 1.2rem;
        }
        
        .contacts-page-social-networks-container {
            margin-top: 2rem;
        }
        
        .contacts-page-social-networks-title {
            font-size: 1.4rem;
        }
        
        .contacts-page-requisites-container {
            width: calc(100% - 4rem);
        }
        
        .contacts-page-requsites-title {
            font-size: 1.4rem;
        }
        
        .contacts-page-info-block-title {
            font-size: 1.6rem;
        }
        
        .contacts-page-info-block-phone-image {
            width: 2.4rem;   
        }
        
        .contacts-page-info-block-content-info-container {
            margin-left: 1rem;
        }
        
        .contacts-page-info-block-info-title {
            margin-bottom: 0.2rem;
        }
        
        .contacts-page-requsites {
            line-height: 1.5;
        }
        
        .contacts-page-image-bottom {
            display: none;
        }
        
    }

</style>