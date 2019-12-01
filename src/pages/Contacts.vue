<template>
    <div class="contacts-page-container">
        <div class="contacts-page-header">
            <img style="position: absolute; bottom:0; left: 8rem;" src="../assets/contacts/contacts-left.svg" alt="">
            <img style="position: absolute; bottom:0; right: 6.5rem;" src="../assets/contacts/contacts-right.svg"
                 alt="">
            <span class="contacts-page-title">
                Контакты
                <TextBabel class="contacts-page-text-babel-wrapper" text="Contactos"/>
            </span>
        </div>
        <div class="contacts-page-body">
            <SignupForm type="contact" class="contacts-page-signup-wrapper"></SignupForm>
            <img style="position: absolute; bottom:0; right: 0" src="../assets/contacts/contacts-bottom-right.svg"
                 alt="">
            <div class="contacts-page-info-container">
                <div class="contacts-page-info-block-container">
                    <span class="contacts-page-info-block-title">Где находится</span>
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
                            <a href="https://www.facebook.com/centroespanol/">
                                <img class="contacts-page-social-network-link"
                                     src="../assets/contacts/facebook-icon.svg" alt="facebook">
                            </a>
                            <a href="#">
                                <img class="contacts-page-social-network-link" style="margin-left: 1rem;"
                                     src="../assets/contacts/youtube-icon.svg"
                                     alt="youtube">
                            </a>
                            <a href="https://www.instagram.com/vamos_centro/">
                                <img class="contacts-page-social-network-link" style="margin-left: 1rem;"
                                     src="../assets/contacts/instagram-icon.png" alt="instagram">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="contacts-page-info-block-container">
                    <span class="contacts-page-info-block-title">Как связаться</span>
                    <div class="contacts-page-info-block-content-container">
                        <img class="contacts-page-info-block-phone-image" src="../assets/common/phone-icon.svg" alt="">
                        <div class="contacts-page-info-block-content-info-container">
                            <span class="contacts-page-info-block-info-title">+7 (916) 169-18-37</span>
                            <span class="contacts-page-info-block-info">Ответим в Whatsapp в любое время!</span>
                        </div>
                    </div>
                    <div class="contacts-page-info-block-content-container">
                        <img class="contacts-page-info-block-phone-image" src="../assets/common/clock-icon.svg" alt="">
                        <div class="contacts-page-info-block-content-info-container">
                            <span class="contacts-page-info-block-info-title">+7 (495) 920-74-30</span>
                            <span class="contacts-page-info-block-info">Каждый день с 11:00 до 20:00</span>
                        </div>
                    </div>
                </div>
                <div class="contacts-page-info-block-container">
                    <span class="contacts-page-info-block-title">Как добраться</span>
                    <div class="contacts-page-info-block-content-container">
                        <img class="contacts-page-info-block-metro-image" src="../assets/contacts/metro-brown-icon.svg"
                             alt="">
                        <span class="contacts-page-info-block-metro">
                            <span style="font-family: GothamPro-Bold, sans-serif; text-decoration: underline; text-decoration-style: dashed;">
                                Добрынинская
                            </span>
                             - 5 мин. пешком
                        </span>
                    </div>
                    <div class="contacts-page-info-block-content-container">
                        <img class="contacts-page-info-block-metro-image" src="../assets/contacts/metro-grey-icon.svg"
                             alt="">
                        <span class="contacts-page-info-block-metro">
                            <span style="font-family: GothamPro-Bold, sans-serif; text-decoration: underline; text-decoration-style: dashed;">
                                Серпуховская
                            </span>
                             - 5 мин. пешком
                        </span>
                    </div>
                    <div class="contacts-page-info-block-content-container">
                        <img class="contacts-page-info-block-metro-image" src="../assets/contacts/metro-green-icon.svg"
                             alt="">
                        <span class="contacts-page-info-block-metro">
                            <span style="font-family: GothamPro-Bold, sans-serif; text-decoration: underline; text-decoration-style: dashed;">
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
    import SignupForm from "../components/SignupForm";

    export default {
        components: {
            TextBabel,
            SignupForm
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

    .contacts-page-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 4rem;
        margin-top: 25rem;
        width: 50rem;
        position: relative;
    }

    .contacts-page-text-babel-wrapper {
        position: absolute;
        top: -4rem;
        left: 34rem;
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

    .contacts-page-info-container {
        display: flex;
        margin-top: 9rem;
        align-self: flex-start;
    }

    .contacts-page-info-block-container {
        display: flex;
        flex-direction: column;
        margin: 0 7rem;
        align-items: flex-start;
    }

    .contacts-page-info-block-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 2.4rem;
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
        margin-bottom: 1rem;
    }

    .contacts-page-info-block-info {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        margin: 0.2rem 0;
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
        width: 4rem;
    }

</style>