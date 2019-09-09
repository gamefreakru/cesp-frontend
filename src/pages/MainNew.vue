<template>
    <div class="main-container">
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
                <div class="info-block-circle-item">
                    <div class="info-block-circle info-block-circle-light"></div>
                    <span style="color: var(--tomato);" class="info-block-circle-title">4 000</span>
                    <span class="info-block-circle-description info-block-circle-description-black">
                        довольных слушателей</span>
                </div>
                <div class="info-block-circle-item">
                    <div class="info-block-circle"></div>
                    <span class="info-block-circle-title">от 319 ₽</span>
                    <span class="info-block-circle-description">стоимость 1 часа занятия</span>
                </div>
                <div class="info-block-circle-item">
                    <div class="info-block-circle"></div>
                    <span class="info-block-circle-title">8 лет</span>
                    <span class="info-block-circle-description">успешной работы</span>
                </div>
            </div>
        </div>
        <div class="group-recruitment-container">
            <img style="position: absolute; left: 0; top: -5rem;" src="../assets/main/group-recruitment.png"
                 srcset="../assets/main/group-recruitment@2x.png 2x, ../assets/main/group-recruitment@3x.png 3x"
                 alt="">
            <div class="group-recruitment-information-container">
                <span class="group-recruitment-information-title">Идёт набор в группы: 
                    <span style="color: var(--tomato);">апрель</span>, 
                    <span style="color: var(--tomato);">май</span>
                </span>
                <span class="group-recruitment-information-description">
                    При оплате полного стандартного курса действуют скидки:
                </span>
                <div style="display: flex;">
                    <div class="group-recruitment-information-discount-item">
                        <span class="group-recruitment-information-discount-value">-15%</span>
                        <span class="group-recruitment-information-discount-description">
                            каждому, если прийти с другом
                        </span>
                    </div>
                    <div style="margin-left: 5rem;" class="group-recruitment-information-discount-item">
                        <span class="group-recruitment-information-discount-value">-20%</span>
                        <span class="group-recruitment-information-discount-description"> семейным <br/>парам</span>
                    </div>
                </div>
                <LinkButton class=group-recruitment-link-button-wrapper title="Посмотреть расписание и цены" link="Schedule" />
            </div>
        </div>
        <div class="courses-container">
            <span class="main-section-title courses-cards-title"><span style="color: var(--tomato);">Топ-3 </span>наших курсов</span>
            <div class="courses-card-container">
                <CourseCard class="course-card-wrapper" 
                            :image="getImgUrl('spain-course')"
                            red-title="Испанский" 
                            title=" стандартный курс"
                            description="Классический курс испанского языка в Москве продолжительностью около двух месяцев."
                            duration-description="60 ак. часов (9 недель)"
                            :discount-value=19
                            price-description="от 19 000 руб."
                />
                <CourseCard class="course-card-wrapper"
                            :image="getImgUrl('catalan-course')"
                            red-title="Каталонский"
                            title=" язык"
                            description="Каталонский является официальным языком Каталонии, Балеарских островов, Арагона, Валенсии и Андорры."
                            price-description="от 19 000 руб."
                />
                <CourseCard class="course-card-wrapper"
                            :image="getImgUrl('personal-course')"
                            red-title="Индивидуальные"
                            title=" занятия и мини-группы"
                            description="Занятия проходят индивидуально 1-2 человека или в мини-группах по 3-4 человека."
                            duration-description="Частота и продолжительность согласовываются с учётом ваших пожеланий"
                            price-description="2 500 руб./час"/>
            </div>
            <LinkButton class=courses-link-button-wrapper title="Выбрать курсы" link="Courses" />
        </div>
        <div class="events-container">
            <span class="main-section-title events-title">Наша афиша</span>
            <div class="events-card-container">
                <EventCard class="event-card-wrapper" 
                    link="Event"
                />
                <EventCard class="event-card-wrapper" 
                    link="Event"
                />
                <EventCard class="event-card-wrapper"
                    link="Event"
                />
            </div>
            <LinkButton class="events-link-button-wrapper" title="Все мероприятия" link="Events" />
        </div>
        <div class="teachers">

        </div>
        <div class="feedback-container">
            <img style="position: absolute; left: 0; top: 10rem;" src="../assets/main/feedback-left.svg" alt="">
            <img style="position: absolute; left: 0; bottom: 0;" src="../assets/main/feedback-bottom.svg" alt="">
            <img style="position: absolute; right: 0; top: 10rem;" src="../assets/main/feedback-right.svg" alt="">
            <img style="position: absolute; right: 6rem; top: 8rem; z-index: 3" src="../assets/main/feedback-right-2.svg" alt="">
            <SignupForm class="signup-form-wrapper" />
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

    import CourseCard from '../components/CourseCard';
    import EventCard from "../components/EventCard";
    import LinkButton from "../components/LinkButton";
    import SignupForm from "../components/SignupForm";
    
    export default {
        components: {
            CourseCard,
            EventCard,
            LinkButton,
            SignupForm
        },
        methods: {
            getImgUrl(imagePath) {
                var images = require.context('../assets/main', false, /\.svg$/);
                return images('./' + imagePath + ".svg");
            }
        }
    }
</script>

<style scoped>

    .main-container {
        background-color: white;
    }
    
    .main-section-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 3rem;
    }

    .information-container {
        height: 87rem;
        position: relative;
    }
    
    .info-block-container {
        position: absolute;
        display: flex;
        right: 0;
        top: 7rem;
    }
    
    .info-block {
        display: flex;
        align-items: flex-start;
        margin: 0 3rem;
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
        font-family: GothamPro-Medium, sans-serif;
        font-size: 2.4rem;
        font-weight: 500;
        color: white;
        line-height: 1.17;
    }
    
    .info-block-description {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.4rem;
        color: white;
        max-width: 18rem;
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
    
    .info-block-circle-item {
        display: flex;
        flex-direction: column;
        margin: 0 11rem;
        align-items: center;
    }
    
    .info-block-circle {
        height: 20rem;
        width: 20rem;
        border-radius: 10rem;
        background-color: rgba(15, 5, 1, 0.7);
    }
    
    .info-block-circle-light {
        background-color: rgba(255, 201, 0, 0.4);
    }
    
    .info-block-circle-title {
        font-size: 6rem;
        font-family: GothamPro-Medium, sans-serif;
        color: white;
        margin-top: -13rem;
        width: 25rem;
    }
    
    .info-block-circle-description {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 2.4rem;
        line-height: 1.33;
        color: white;
        max-width: 23rem;
        margin-top: 1.5rem;
    }

    .info-block-circle-description-black {
        color: black;
    }

    .group-recruitment-container {
        height: 44.4rem;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3));
        position: relative;
    }
    
    .group-recruitment-information-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        right: 20rem;
        top: 9rem;
    }
    
    .group-recruitment-information-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 3rem;
        margin-bottom: 4rem;
    }
    
    .group-recruitment-information-description {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.8rem;
        margin-bottom: 3rem;
    }
    
    .group-recruitment-information-discount-item {
        display: flex;
        align-items: center;
    }
    
    .group-recruitment-information-discount-value {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 6rem;
        color: var(--tomato);
    }
    
    .group-recruitment-information-discount-description {
        font-family: FedraSerifAPro-Italic, sans-serif;
        font-size: 1.6rem;
        line-height: 1.5;
        max-width: 20rem;
        text-align: left;
        margin: 0 2rem;
    }
    
    .group-recruitment-link-button-wrapper {
        margin-top: 4rem;
    }

    .courses-container {
        height: 78rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .courses-cards-title {
        margin-top: 7.5rem;
        margin-bottom: 6rem;
    }
    
    .courses-card-container {
        display: flex;
    }
    
    .course-card-wrapper {
        margin: 0 2rem;
    }
    
    .courses-link-button-wrapper {
        margin-top: 4rem;
    }
    
    .events-container {
        height: 78rem;
        background-color: var(--background-color-lighter);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .events-title {
        margin-top: 6rem;
    }
    
    .events-card-container {
        display: flex;
        margin-top: 6rem;
    }
    
    .event-card-wrapper {
        margin: 0 1.8rem;
    }
    
    .events-link-button-wrapper {
        margin-top: 5rem;
    }

    .teachers {
        height: 80rem;
    }

    .signup-form-wrapper {
        position: absolute;
        z-index: 2;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: -12.5rem;
    }
    
    .feedback-container {
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