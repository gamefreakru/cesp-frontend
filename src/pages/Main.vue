<template>
    <div class="main-container">
        <div class="information-container">
            <div class="main-page-background-image-left"></div>
            <img class="main-page-background-image-right" src="../assets/main/background.png" alt="">
            <img class="main-page-background-image-right-mobile" src="../assets/main/background-mobile.png" alt="">
            <div class="title-block-container">
                <div style="width: 60rem;" class="title-block">Лучшая школа
                    <span style="color: var(--tomato);">испанского</span></div>
                <div style="width: 55rem;" class="title-block">и каталанского в Москве</div>
                <div class="title-block-mobile">Лучшая школа</div>
                <div class="title-block-mobile" style="color: var(--tomato); border-radius: 0;">испанского</div>
                <div class="title-block-mobile">и каталанского</div>
                <div class="title-block-mobile">в Москве</div>
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
                    <span class="info-block-circle-description">стоимость 1 часа занятий</span>
                </div>
                <div class="info-block-circle-item">
                    <div class="info-block-circle"></div>
                    <span class="info-block-circle-title">8 лет</span>
                    <span class="info-block-circle-description">успешной работы</span>
                </div>
            </div>
            <carousel class="main-page-top-carousel-mobile" :data="topCarouselMobileData"/>
            <img class="arrow-element" src="../assets/main/scroll-arrow.svg" alt="arrow"/>
        </div>
        <div class="group-recruitment-container">
            <img class="main-page-group-recruitment-background-image" src="../assets/main/group-recruitment.png"
                 alt="">
            <div class="group-recruitment-information-container">
                <span class="group-recruitment-information-title">Идёт набор в группы: 
                    <span style="color: var(--tomato);">январь</span>, 
                    <span style="color: var(--tomato);">февраль</span>
                </span>
                <span class="group-recruitment-information-description">
                    При оплате полного стандартного курса действуют скидки:
                </span>
                <div class="group-recruitment-information-discount-container">
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
                <div class="group-recruitment-information-discount-container-mobile">
                    <span class="group-recruitment-information-discount-value">-15%</span>
                    <span class="group-recruitment-information-discount-description">
                        каждому, если <br> прийти с другом
                    </span>
                    <span class="group-recruitment-information-discount-value">-20%</span>
                    <span class="group-recruitment-information-discount-description"> семейным <br/>парам</span>
                </div>
                <LinkButton class="group-recruitment-link-button-wrapper" title="Посмотреть расписание и цены" link="/schedule" />
            </div>
            <SignupForm class="signup-form-wrapper"/>
        </div>
        <div class="events-container">
            <span class="main-section-title events-title">
                Наша афиша
                <TextBabel class="text-babel-events-wrapper" text="Nuestro cartel"/>
            </span>
            <div class="events-card-container">
                <EventCard class="event-card-wrapper" v-for="(event, index) in events"
                           v-bind:key="index"
                           v-bind:link="event.sysName | createEventLink"
                           link-title="Записаться"
                           v-bind:title="event.name"
                           v-bind:image="event.photo"
                           v-bind:description="event.shortInfo"/>
                <EventCard class="event-card-wrapper-tablet" v-for="(event, index) in eventsTablet"
                           v-bind:key="index + '-tablet'"
                           v-bind:link="event.sysName | createEventLink"
                           link-title="Записаться"
                           v-bind:title="event.name"
                           v-bind:image="event.photo"
                           v-bind:description="event.shortInfo"/>
                <EventCard class="event-card-wrapper-mobile" v-for="(event, index) in eventsMobile"
                           v-bind:key="index + '-mobile'"
                           v-bind:link="event.sysName | createEventLink"
                           link-title="Записаться"
                           v-bind:title="event.name"
                           v-bind:image="event.photo"
                           v-bind:description="event.shortInfo"/>
            </div>
            <LinkButton class="events-link-button-wrapper" title="Все мероприятия" link="/events"/>
        </div>
        <div class="courses-container">
            <span class="main-section-title courses-cards-title">
                <span style="color: var(--tomato);">Топ-3 </span>
                наших курсов
                <TextBabel class="text-babel-courses-wrapper" text="Cursos"/>
            </span>
            <div class="courses-card-container">
                <CourseCard class="course-card-wrapper"
                            :image="getImgUrl('spain-course')"
                            red-title="Испанский"
                            title=" стандартный курс"
                            link="/contacts"
                            description="Классический курс испанского языка в Москве продолжительностью около двух месяцев."
                            duration-description="60 ак. часов (9 недель)"
                            :discount-value=19
                            price-description="от 19 000 руб."
                />
                <CourseCard class="course-card-wrapper"
                            :image="getImgUrl('catalan-course')"
                            red-title="Каталонский"
                            title=" язык"
                            link="/contacts"
                            description="Каталонский является официальным языком Каталонии, Балеарских островов, Арагона, Валенсии и Андорры."
                            price-description="от 19 000 руб."
                />
                <CourseCard class="course-card-wrapper"
                            :image="getImgUrl('personal-course')"
                            red-title="Индивидуальные"
                            title=" занятия и мини-группы"
                            link="/contacts"
                            description="Занятия проходят индивидуально 1-2 человека или в мини-группах по 3-4 человека."
                            duration-description="Частота и продолжительность согласовываются с учётом ваших пожеланий"
                            price-description="2 500 руб./час"/>
            </div>
            <div class="courses-card-container-tablet">
                <CourseCard class="course-card-wrapper"
                            :image="getImgUrl('spain-course')"
                            red-title="Испанский"
                            title=" стандартный курс"
                            link="/contacts"
                            description="Классический курс испанского языка в Москве продолжительностью около двух месяцев."
                            duration-description="60 ак. часов (9 недель)"
                            :discount-value=19
                            price-description="от 19 000 руб."
                />
                <CourseCard class="course-card-wrapper"
                            :image="getImgUrl('catalan-course')"
                            red-title="Каталонский"
                            title=" язык"
                            link="/contacts"
                            description="Каталонский является официальным языком Каталонии, Балеарских островов, Арагона, Валенсии и Андорры."
                            price-description="от 19 000 руб."
                />
            </div>
            <div class="courses-card-container-mobile">
                <CourseCard class="course-card-wrapper"
                            :image="getImgUrl('spain-course')"
                            red-title="Испанский"
                            title=" стандартный курс"
                            link="/contacts"
                            description="Классический курс испанского языка в Москве продолжительностью около двух месяцев."
                            duration-description="60 ак. часов (9 недель)"
                            :discount-value=19
                            price-description="от 19 000 руб."
                />
            </div>
            <LinkButton class=courses-link-button-wrapper title="Выбрать курсы" link="/courses"/>
        </div>
        <div class="teachers-container">
            <span class="main-section-title teachers-title">
                Наши преподаватели
                <TextBabel class="text-babel-teachers-wrapper" text="Profesores"/>
            </span>
            <div class="teachers-card-container">
                <TeacherCard class="teacher-card-wrapper" v-for="(teacher, index) in teachers"
                             v-bind:key="index"
                             v-bind:image="teacher.photo"
                             v-bind:name="teacher.name"
                             v-bind:city="teacher.city"
                             v-bind:languages="teacher.languages"
                             v-bind:short-description="teacher.shortInfo"
                             type="normal"
                />
                <TeacherCard class="teacher-card-wrapper-tablet" v-for="(teacher, index) in teachersTablet"
                             v-bind:key="index + '-tablet'"
                             v-bind:image="teacher.photo"
                             v-bind:name="teacher.name"
                             v-bind:city="teacher.city"
                             v-bind:languages="teacher.languages"
                             v-bind:short-description="teacher.shortInfo"
                             type="normal"
                />
                <TeacherCard class="teacher-card-wrapper-mobile" v-for="(teacher, index) in teachersMobile"
                             v-bind:key="index + '-mobile'"
                             v-bind:image="teacher.photo"
                             v-bind:name="teacher.name"
                             v-bind:city="teacher.city"
                             v-bind:languages="teacher.languages"
                             v-bind:short-description="teacher.shortInfo"
                             type="normal"
                />
            </div>
            <LinkButton class="teachers-link-button-wrapper" title="Все преподаватели" link="/teachers"/>
        </div>
        <div class="feedback-container">
            <img class="main-page-feedback-image-top-left" src="../assets/main/feedback-left.svg" alt="">
            <img class="main-page-feedback-image-bottom" src="../assets/main/feedback-bottom.svg" alt="">
            <img class="main-page-feedback-image-top-right" src="../assets/main/feedback-right.svg" alt="">
            <img class="main-page-feedback-image-top-right-2" src="../assets/main/feedback-right-2.svg" alt="">
            <img class="main-page-feedback-image-top-mobile" src="../assets/main/feedback-top-mobile.svg" alt="">
            <img class="main-page-feedback-image-bottom-mobile" src="../assets/main/feedback-bottom-mobile.svg" alt="">
            <span class="main-section-title feedbacks-cards-title">
                Отзывы
                <TextBabel class="text-babel-feedback-wrapper" text="Opiniones"/>
            </span>
            <div class="feedbacks-card-container">
                <FeedbackCard class="feedback-card-wrapper" v-for="(feedback, index) in feedbacks"
                              v-bind:key="index"
                              v-bind:image="feedback.photo"
                              v-bind:first-name="feedback.signature"
                              v-bind:date="feedback.date"
                              v-bind:text="feedback.message | trim(300)" />
            </div>
            <LinkButton class="feedbacks-link-button-wrapper" title="Все отзывы" link="/feedbacks"/>
        </div>
        <div class="about-container">
            <img class="main-page-about-image-left" src="../assets/main/about-left.svg" alt="">
            <img class="main-page-about-image-right" src="../assets/main/about-right.svg" alt="">
            <img class="main-page-about-image-right-mobile" src="../assets/main/about-right-mobile.svg" alt="">
            <div class="about-text-container">
                <div class="main-section-title about-title">
                    О нас
                    <TextBabel class="text-babel-about-wrapper" text="Nosostros"/>
                </div>
                <div class="about-description">
                    Считаете, что выучить язык — это долго и скучно?
                    Мы думаем, что это не так. Вы уже знаете, что значит «Hola!»,
                    пробовали хамон и паэлью и хотите узнать больше. Или вы совсем не знакомы с Испанией,
                    и это ваш первый шаг. Тогда курсы испанского языка это то, что вам нужно!
                    От вас требуется желание и посещаемость. От нас — много полезной информации
                    и приятная атмосфера.
                </div>
            </div>
            <div class="about-image-carousel">
                <ImageCarousel v-bind:images="[getCarouselImgUrl('slide1'), getCarouselImgUrl('slide2'), getCarouselImgUrl('slide3'), 
                getCarouselImgUrl('slide4'), getCarouselImgUrl('slide5'), getCarouselImgUrl('slide6'), getCarouselImgUrl('slide7'),
                getCarouselImgUrl('slide8'), getCarouselImgUrl('slide9'), getCarouselImgUrl('slide10'), getCarouselImgUrl('slide11'),
                getCarouselImgUrl('slide12'), getCarouselImgUrl('slide13'), getCarouselImgUrl('slide14'), getCarouselImgUrl('slide15'), 
                getCarouselImgUrl('slide16'), getCarouselImgUrl('slide17'), getCarouselImgUrl('slide18'), getCarouselImgUrl('slide19'), 
                getCarouselImgUrl('slide20'), getCarouselImgUrl('slide21')]"/>
            </div>
            <div class="about-image-carousel-tablet">
                <ImageCarousel :image-width=144 :image-height=144 v-bind:images="[getCarouselImgUrl('slide1'), getCarouselImgUrl('slide2'), getCarouselImgUrl('slide3'), 
                getCarouselImgUrl('slide4'), getCarouselImgUrl('slide5'), getCarouselImgUrl('slide6'), getCarouselImgUrl('slide7'),
                getCarouselImgUrl('slide8'), getCarouselImgUrl('slide9'), getCarouselImgUrl('slide10'), getCarouselImgUrl('slide11'),
                getCarouselImgUrl('slide12'), getCarouselImgUrl('slide13'), getCarouselImgUrl('slide14'), getCarouselImgUrl('slide15'), 
                getCarouselImgUrl('slide16'), getCarouselImgUrl('slide17'), getCarouselImgUrl('slide18'), getCarouselImgUrl('slide19'), 
                getCarouselImgUrl('slide20'), getCarouselImgUrl('slide21')]"/>
            </div>
            <div class="about-image-carousel-mobile">
                <ImageCarousel :image-width=100 :image-height=100 :images-per-page="3" v-bind:images="[getCarouselImgUrl('slide1'), getCarouselImgUrl('slide2'), getCarouselImgUrl('slide3'), 
                getCarouselImgUrl('slide4'), getCarouselImgUrl('slide5'), getCarouselImgUrl('slide6'), getCarouselImgUrl('slide7'),
                getCarouselImgUrl('slide8'), getCarouselImgUrl('slide9'), getCarouselImgUrl('slide10'), getCarouselImgUrl('slide11'),
                getCarouselImgUrl('slide12'), getCarouselImgUrl('slide13'), getCarouselImgUrl('slide14'), getCarouselImgUrl('slide15'), 
                getCarouselImgUrl('slide16'), getCarouselImgUrl('slide17'), getCarouselImgUrl('slide18'), getCarouselImgUrl('slide19'), 
                getCarouselImgUrl('slide20'), getCarouselImgUrl('slide21')]"/>
            </div>
            <LinkButton class="about-link-button-wrapper" title="Познакомьтесь с нами поближе" link="/about"/>
        </div>
    </div>
</template>

<script>

    import TeacherCard from "../components/TeacherCard";
    import CourseCard from '../components/CourseCard';
    import EventCard from "../components/EventCard";
    import FeedbackCard from "../components/FeedbackCard";
    import LinkButton from "../components/LinkButton";
    import SignupForm from "../components/SignupForm";
    import TextBabel from "../components/TextBabel";
    import ImageCarousel from "../components/ImageCarousel";
    import Service from "../service";

    export default {
        components: {
            TeacherCard,
            CourseCard,
            EventCard,
            FeedbackCard,
            LinkButton,
            SignupForm,
            TextBabel,
            ImageCarousel
        },
        methods: {
            getImgUrl(imagePath) {
                var images = require.context('../assets/main', false, /\.svg$/);
                return images('./' + imagePath + ".svg");
            },
            getCarouselImgUrl(imagePath) {
                var images = require.context('../assets/carousel', false, /\.jpg$/);
                return images('./' + imagePath + ".jpg");
            }
        },
        filters: {
            trim(value, count) {
                return value.substring(0, count) + "...";
            },
            createEventLink(value) {
                return "events/" + value;
            }
        },
        data() {
            return {
                teachers: {},
                teachersTablet: {},
                teachersMobile: {},
                events: {},
                eventsTablet: {},
                eventsMobile: {},
                feedbacks: {},
                topCarouselMobileData: [
                    '<div class="info-block-circle-item">' +
                    '<div class="info-block-circle"></div>' +
                    '<span class="info-block-circle-title">4 000</span>' +
                    '<span class="info-block-circle-description">довольных слушателей</span>' +
                    '</div>',
                    '<div class="info-block-circle-item">' +
                    '<div class="info-block-circle"></div>' +
                    '<span class="info-block-circle-title">от 319 ₽</span>' +
                    '<span class="info-block-circle-description">стоимость 1 часа занятий</span>' +
                    '</div>',
                    '<div class="info-block-circle-item">' +
                    '<div class="info-block-circle"></div>' +
                    '<span class="info-block-circle-title">8 лет</span>' +
                    '<span class="info-block-circle-description">успешной работы</span>' +
                    '</div>',
                        
                ]
            }
        },
        mounted() {
            Service.get("teachers?count=4", (status, data) => {
                this.teachers = data;
                this.teachersTablet = this.teachers.slice(0,2);
                this.teachersMobile = this.teachers.slice(0,1);
            });
            Service.get("events?count=3", (status, data) => {
                this.events = data;
                this.eventsTablet =  this.events.slice(0,2);
                this.eventsMobile = this.events.slice(0,1);
            });
            Service.get("feedbacks?count=1", (status, data) => {
                this.feedbacks = data;
            });
        }
    }
</script>

<style scoped>

    .main-container {
        background-color: white;
    }
    
    .main-page-background-image-right {
        position: absolute;
        right: 0;
    }
    
    .main-page-background-image-right-mobile {
        display: none;
    }
    
    .main-page-background-image-left {
        width: 75rem; 
        height: 75rem;
        background-color: #fff7d4;
        border-radius: 75rem;
        position: absolute;
        top: -20rem;
        right: 53rem;
    }

    .main-section-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 3rem;
    }

    .information-container {
        height: 87rem;
        position: relative;
    }


    .title-block-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
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
    
    .title-block-mobile {
        display: none;
    }

    .info-block-circle-container {
        position: absolute;
        display: flex;
        top: 45rem;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
    }

    /deep/ .info-block-circle-item {
        display: flex;
        flex-direction: column;
        margin: 0 11rem;
        align-items: center;
    }
    
    /deep/ .info-block-circle-item:first-child {
        margin-left: 0;
    }
    
    /deep/ .info-block-circle-item:last-child {
        margin-right: 0;
    }

    /deep/ .info-block-circle {
        height: 20rem;
        width: 20rem;
        border-radius: 10rem;
        background-color: rgba(15, 5, 1, 0.7);
    }

    .info-block-circle-light {
        background-color: rgba(255, 201, 0, 0.4);
    }

    /deep/ .info-block-circle-title {
        font-size: 6rem;
        font-family: GothamPro-Medium, sans-serif;
        color: white;
        margin-top: -13rem;
        width: 25rem;
    }

    /deep/ .info-block-circle-description {
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
    
    .main-page-top-carousel-mobile {
        display: none;
    }

    .arrow-element {
        width: 3.2rem;
        height: 4.8rem;
        position: absolute;
        z-index: 2;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: 70rem;
    }

    .group-recruitment-container {
        height: 55rem;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3));
        position: relative;
    }

    .main-page-group-recruitment-background-image {
        position: absolute; 
        left: 0; 
        top: -5rem;   
    }
    
    .text-babel-with-link {
        background-color: #564f4c;
        height: 11rem;
        width: 22rem;
        position: absolute;
        border-radius: 0.5rem;
        left: 22rem;
        top: -8rem;
        padding: 0 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }

    .text-babel-with-link:after {
        content: '';
        top: 11rem;
        left: 25%;
        right: 75%;
        position: absolute;
        display: block;
        width: 1.4rem;
        height: 0.75rem;
        background-color: transparent;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        box-shadow: 0.7rem 0.35rem 0 0.3rem #564f4c;
        transform: rotate(-45deg);
        z-index: 1;
    }

    .text-babel-with-link-title {
        font-family: FedraSerifAPro-Medium-Italic, sans-serif;
        font-size: 1.2rem;
        color: white;
        line-height: 1.5;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    .text-babel-with-link-position-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .text-babel-with-link-delimiter {
        height: 0.1rem;
        background-color: rgba(255, 255, 255, 0.1);
        width: 17rem;
        margin-bottom: 1.5rem;
    }

    .text-babel-with-link-bottom-flex-container {
        display: flex;
    }

    .text-babel-with-link-bottom-title {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.2rem;
        text-transform: uppercase;
        color: white;
        letter-spacing: 0.092rem;
        margin-right: 1rem;
    }

    .group-recruitment-information-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        left: 38%;
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
    
    .group-recruitment-information-discount-container {
        display: flex;
    }
    
    .group-recruitment-information-discount-container-mobile {
        display: none;
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
        height: 70rem;
        background-color: var(--background-color-lighter);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .courses-cards-title {
        margin-top: 7.5rem;
        margin-bottom: 6rem;
        position: relative;
    }

    .text-babel-courses-wrapper {
        position: absolute;
        top: -4rem;
        left: 31rem;
    }

    .courses-card-container {
        display: flex;
    }
    
    .courses-card-container-tablet {
        display: none;
    }
    
    .courses-card-container-mobile {
        display: none;
    }

    .course-card-wrapper {
        margin: 0 2rem;
    }

    .courses-link-button-wrapper {
        margin-top: 4rem;
    }

    .events-container {
        height: 96rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .events-title {
        margin-top: 24rem;
        position: relative;
    }

    .text-babel-events-wrapper {
        position: absolute;
        top: -4rem;
        left: 19rem;
    }

    .events-card-container {
        display: flex;
        margin-top: 6rem;
    }

    .event-card-wrapper {
        margin: 0 1.8rem;
        border: solid 0.1rem rgba(0, 0, 0, 0.06);
    }
    
    .event-card-wrapper-tablet {
        margin: 0 1.8rem;
        border: solid 0.1rem rgba(0, 0, 0, 0.06);
        display: none;
    }
    
    .event-card-wrapper-mobile {
        display: none;
        border: solid 0.1rem rgba(0, 0, 0, 0.06);
    }

    .events-link-button-wrapper {
        margin-top: 5rem;
    }

    .teachers-container {
        height: 85rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .teachers-title {
        margin-top: 10rem;
        position: relative;
    }

    .text-babel-teachers-wrapper {
        position: absolute;
        top: -4rem;
        left: 33rem;
    }

    .teachers-card-container {
        display: flex;
        margin-top: 4rem;
    }

    .teacher-card-wrapper {
        margin: 0 2rem;
    }
    
    .teacher-card-wrapper-tablet {
        display: none;
        margin: 0 2rem;
    }
    
    .teacher-card-wrapper-mobile {
        display: none;
    }

    .teachers-link-button-wrapper {
        margin-top: 8rem;
    }

    .signup-form-wrapper {
        position: absolute;
        z-index: 2;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: 45rem;
        box-shadow: 0 0.4rem 1.6rem 0 rgba(41, 41, 41, 0.15);
    }

    .feedback-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--background-color-white);
        height: 51rem;
        position: relative;
    }
    
    .main-page-feedback-image-top-left {
        position: absolute; 
        left: 0; 
        top: 0;   
    }
    
    .main-page-feedback-image-bottom {
        position: absolute; 
        left: 0; 
        bottom: 0;   
    }
    
    .main-page-feedback-image-top-right {
        position: absolute; 
        right: 0; 
        top: 0;   
    }
    
    .main-page-feedback-image-top-right-2 {
        position: absolute; 
        right: 6rem; 
        top: 8rem;
        z-index: 2   
    }
    
    .main-page-feedback-image-top-mobile {
        position: absolute;
        width: 100%;
        display: none;
    }

    .main-page-feedback-image-bottom-mobile {
        position: absolute;
        bottom: 0;
		left: 0;
        width: 40%;
        display: none;
    }

    .feedback-card-wrapper {
        box-shadow: 0 4px 16px 0 rgba(41, 41, 41, 0.15);
    }

    .feedbacks-cards-title {
        margin-top: 7rem;
        position: relative;
    }

    .text-babel-feedback-wrapper {
        position: absolute;
        top: -4rem;
        left: 10rem;
    }

    .feedbacks-card-container {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        margin-top: 6rem;
    }

    .feedbacks-link-button-wrapper {
        margin-top: 5rem;
        z-index: 1;
    }

    .blog-container {
        height: 75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .blogs-cards-title {
        margin-top: 10rem;
        position: relative;
    }

    .text-babel-blog-wrapper {
        position: absolute;
        top: -4rem;
        left: 54rem;
    }

    .blogs-card-container {
        display: flex;
        margin-top: 6rem;
    }

    .blog-card-wrapper {
        margin: 0 2rem;
        z-index: 1;
    }

    .about-container {
        height: 90rem;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3));
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .main-page-about-image-left {
        position: absolute; 
        left: 0;   
    }
    
    .main-page-about-image-right {
        position: absolute; 
        right: 0; 
        top: 10rem;   
    }
    .main-page-about-image-right-mobile {
        position: absolute;
        right: 0;
        top: 20rem;
        width: 50%;
        display: none;
    }

    .about-text-container {
        display: flex;
        flex-direction: column;
        width: 48rem;
        text-align: left;
        margin-top: 10rem;
        margin-left: 7%;
        align-items: center;
    }

    .about-title {
        margin-bottom: 4rem;
        position: relative;
        align-self: flex-start;
    }

    .text-babel-about-wrapper {
        position: absolute;
        top: -4rem;
        left: 7rem;
    }

    .about-description {
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        line-height: 1.75;
    }

    .about-image-carousel {
        height: 26rem;
        width: calc(100% - 3rem);
        margin: 12rem 0 6rem 0;
    }
    
    .about-image-carousel-tablet {
        display: none;
        height: 20rem;
        width: calc(100% - 3rem);
        margin: 6rem 0 3rem 0;
    }
    
    .about-image-carousel-mobile {
        display: none;
        height: 10rem;
        width: 100%;
        margin-top: 3rem;
    }

    @media screen and (max-width: 1280px) {
        .arrow-element {
            display: none;
        }

        .main-page-background-image-right {
            width: 73rem;
        }

        .main-page-background-image-left {
            width: 40rem;
            height: 40rem;
            top: -5rem;
            right: 50rem;
            border-radius: 40rem;
        }

        .information-container {
            height: 58rem;
        }

        .title-block-container {
            top: 11rem;
        }

        .info-block-circle-container {
            top: 27rem;
        }

        /deep/ .info-block-circle-item {
            margin: 0 5rem;
        }

        /deep/ .info-block-circle {
            height: 18rem;
            width: 18rem;
        }

        /deep/ .info-block-circle-title {
            font-size: 3.6rem;
            width: 15rem;
        }

        /deep/ .info-block-circle-description {
            font-family: FedraSerifAPro, sans-serif;
            font-size: 1.6rem;
            max-width: 13rem;
        }

        .main-page-group-recruitment-background-image {
            display: none;
        }

        .group-recruitment-container {
            background-image: none;
            height: 35rem;
        }

        .group-recruitment-information-container {
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            top: 4rem;
            width: calc(100% - 10rem);
            align-items: center;
        }

        .group-recruitment-link-button-wrapper {
            align-self: center;
        }

        .signup-form-wrapper {
            top: 40rem;
        }

        .events-container {
            height: 123rem;
        }

        .events-title {
            margin-top: 50rem;
        }

        .event-card-wrapper {
            display: none;
        }

        .event-card-wrapper-tablet {
            display: block;
        }

        .courses-container {
            height: 75rem;
        }

        .courses-card-container {
            display: none;
        }

        .courses-card-container-tablet {
            display: flex;
        }

        .teacher-card-wrapper {
            display: none;
        }

        .teacher-card-wrapper-tablet {
            display: block;
        }

        .feedback-container {
            height: 65rem;
        }

        .main-page-feedback-image-top-left {
            width: 50%;
        }

        .main-page-feedback-image-bottom {
            width: calc(100% - 5rem);
        }

        .main-page-feedback-image-top-right {
            width: 50%;
        }

        .main-page-feedback-image-top-right-2 {
            width: 22%;
            top: -3rem;
            right: 2rem;
        }

        .about-container {
            height: 80rem;
        }

        .main-page-about-image-left {
            width: 50%;
            top: 10rem;
        }

        .main-page-about-image-right {
            width: 50%;
        }

        .about-text-container {
            margin-left: 0;
            width: 40%;
        }

        .about-title {
            align-self: center;
        }

        .about-description {
            font-size: 1.4rem;
        }

        .about-image-carousel {
            display: none;
        }

        .about-image-carousel-tablet {
            display: block;
        }
    }
        
    @media screen and (max-width: 760px) {
        .information-container {
            margin-top: 13.2rem;
            height: 42rem;
        }
        
        .main-page-background-image-left {
            display: none;
        }
        
        .main-page-background-image-right {
            display:none;
        }
        
        .main-page-background-image-right-mobile {
            display: block;
            width: 100%;
            height: 42rem;
            object-fit: cover;
            position: absolute;
        }
        
        .title-block-container {
            top: 3.5rem;
        }
        
        .title-block {
            display: none;
        }
        
        .title-block-mobile {
            display: block;
            font-family: FedraSerifAPro-Medium, sans-serif;
            font-size: 2.2rem;
            background-color: white;
            border-radius: 0.4rem;
            padding: 0.1rem 1rem;
            margin: -0.2rem 0;
        }
        
        .info-block-circle-container {
            display: none;
        }
        
        .main-page-top-carousel-mobile {
            display: block;
            position: absolute;
            height: 21rem;
            top: 19rem;
        }
        
        /deep/ .info-block-circle-item {
            height: 18rem;
        }
        
        .group-recruitment-container {
            height: 48rem;
            background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3) 55%);
        }

        .group-recruitment-information-container {
            width: calc(100% - 4rem);
            top: 2rem;
        }
        
        .main-page-group-recruitment-background-image {
            display: none;
        }
        
        .group-recruitment-information-discount-container {
            display: none
        }
        
        .group-recruitment-information-discount-container-mobile {
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: 1.5rem 2rem;
        }
        
        .group-recruitment-information-title {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            width: calc(100% - 3rem);
        }
        
        .group-recruitment-information-description {
            font-size: 1.4rem;
            width: calc(100% - 1.5rem);
            margin-bottom: 1.5rem;
        }
        
        .group-recruitment-information-discount-value {
            font-size: 3.6rem;
            text-align: right;
        }
        
        .group-recruitment-information-discount-description {
            font-size: 1.4rem;
            line-height: 1.29;
            margin: 0;
        }
        
        .signup-form-wrapper {
            top: 34rem;
        }
        
        .group-recruitment-link-button-wrapper {
            margin-top: 2.5rem;
        }
        
        .main-section-title {
            font-size: 1.8rem;
        }
        
        .text-babel-events-wrapper {
            left: 10rem;
            top: -3.5rem;
        }

        .events-container {
            height: 65rem;
        }
        
        .events-title {
            margin-top: 20rem;
        }
        
        .events-card-container {
            margin-top: 2.5rem;
        }
        
        .event-card-wrapper-tablet {
            display: none;
        }

        .event-card-wrapper-mobile {
            display: block;
        }
        
        .events-link-button-wrapper {
            margin-top: 2rem;
        }
        
        .courses-container {
            background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3) 55%);
            background-color: white;
            height: 52rem;
        }
        
        .courses-card-container-tablet {
            display: none;
        }
        
        .courses-card-container-mobile {
            display: flex;
        }
        
        .courses-cards-title {
            margin-top: 5rem;
            margin-bottom: 3.5rem;
        }
        
        .text-babel-courses-wrapper {
            left: 18rem;
            top: -3.5rem;
        }
        
        .course-card-wrapper {
            margin: 0;
        }
        
        .courses-link-button-wrapper {
            margin-top: 2rem;
        }
        
        .teachers-container {
            height: 75rem;
        }
        
        .teacher-card-wrapper-tablet {
            display: none;
        }

        .teacher-card-wrapper-mobile {
            display: flex;
        }
        
        .teachers-title {
            margin-top: 5rem;
        }
        
        .text-babel-teachers-wrapper {
            left: 19rem;
            top: -3.5rem;
        }
        
        .teachers-link-button-wrapper {
            margin-top: 5rem;
        }
        
        .feedback-container {
            height: 50rem;
        }
        
        .feedbacks-cards-title {
            margin-top: 5rem;
        }
        
        .text-babel-feedback-wrapper {
            top: -3.5rem;
            left: 6rem;
        }
        
        .feedbacks-card-container {
            margin-top: 2rem;
        }
        
        .main-page-feedback-image-top-left {
            display: none;
        }
        
        .main-page-feedback-image-bottom {
            display: none;
        }
        
        .main-page-feedback-image-top-right {
            display: none;
        }
        
        .main-page-feedback-image-top-right-2 {
            display: none;
        }

        .main-page-feedback-image-top-mobile {
            display: block;
        }

        .main-page-feedback-image-bottom-mobile {
            display: block;
        }
        
        .feedbacks-link-button-wrapper {
            margin-top: 2rem;
        }
        
        .about-container {
            height: 61rem;
        }
        
        .main-page-about-image-left {
            display: none;
        }

        .main-page-about-image-right {
            display: none;
        }
        
        .about-text-container {
            width: 100%;
            align-items: flex-start;
            margin-top: 0;
        }
        
        .about-description { 
            font-size: 1.2rem;
            line-height: 1.5;
            width: 60%;
            margin-left: 2rem;
        }
        
        .about-title { 
            align-self: flex-start;
            margin: 5rem 0 2.5rem 2rem;
        }
        
        .text-babel-about-wrapper {
            top: -3.5rem;
            left: 4rem;
        }
        
        .main-page-about-image-right-mobile {
            display: block;
        }
        
        .about-image-carousel-tablet {
            display: none;
        }
        
        .about-image-carousel-mobile {
            display: block;
        }
        
        .about-link-button-wrapper {
            margin-top: 6rem;
            max-width: 28rem;
        }
    }

</style>