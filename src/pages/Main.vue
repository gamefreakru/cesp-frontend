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
<!--            <div class="arrow-element"></div>-->
        </div>
        <div class="group-recruitment-container">
            <img style="position: absolute; left: 0; top: -5rem;" src="../assets/main/group-recruitment.png"
                 srcset="../assets/main/group-recruitment@2x.png 2x, ../assets/main/group-recruitment@3x.png 3x"
                 alt="">
            <!--            <div class="text-babel-with-link">-->
            <!--                <span class="text-babel-with-link-title">-->
            <!--                    Las Fallas <span style="color: var(&#45;&#45;light-text)">весенний фестиваль Огня в Валенсии</span>-->
            <!--                </span>-->
            <!--                <div class="text-babel-with-link-position-container">-->
            <!--                    <div class="text-babel-with-link-delimiter"></div>-->
            <!--                    <div class="text-babel-with-link-bottom-flex-container">-->
            <!--                        <span class="text-babel-with-link-bottom-title">Читайте в блоге</span>-->
            <!--                        <img class="text-babel-with-link-bottom-arrow" src="../assets/common/arrow-white.svg" alt=""/>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <div class="group-recruitment-information-container">
                <span class="group-recruitment-information-title">Идёт набор в группы: 
                    <span style="color: var(--tomato);">ноябрь</span>, 
                    <span style="color: var(--tomato);">декабрь</span>
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
                <LinkButton class=group-recruitment-link-button-wrapper title="Посмотреть расписание и цены" link="/schedule" />
            </div>
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
            <LinkButton class=courses-link-button-wrapper title="Выбрать курсы" link="/courses"/>
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
            </div>
            <LinkButton class="events-link-button-wrapper" title="Все мероприятия" link="/events"/>
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
                             v-bind:short-description="teacher.shortInfo"/>
            </div>
            <LinkButton class="teachers-link-button-wrapper" title="Все преподаватели" link="/teachers"/>
        </div>
        <div class="feedback-container">
            <img style="position: absolute; left: 0; top: 10rem;" src="../assets/main/feedback-left.svg" alt="">
            <img style="position: absolute; left: 0; bottom: 0;" src="../assets/main/feedback-bottom.svg" alt="">
            <img style="position: absolute; right: 0; top: 10rem;" src="../assets/main/feedback-right.svg" alt="">
            <img style="position: absolute; right: 6rem; top: 8rem; z-index: 2"
                 src="../assets/main/feedback-right-2.svg" alt="">
            <SignupForm type="signup" class="signup-form-wrapper"/>
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
        <!--        <div class="blog-container">-->
        <!--            <span class="main-section-title blogs-cards-title">-->
        <!--                <span style="color: var(&#45;&#45;tomato);">Блог </span>-->
        <!--                о культуре и языке Испании-->
        <!--                <TextBabel class="text-babel-blog-wrapper" text="Blog"/>-->
        <!--            </span>-->
        <!--            <div class="blogs-card-container">-->
        <!--                <BlogCard class="blog-card-wrapper"-->
        <!--                          link="Blog"-->
        <!--                          title="3 места, где можно выучить каталанский"-->
        <!--                          description="Большой город составил маленький путеводитель по местам, где можно выучить -->
        <!--                          каталанский язык."-->
        <!--                          :image="getJpegImgUrl('blog_card_example')"-->
        <!--                />-->
        <!--                <BlogCard class="blog-card-wrapper"-->
        <!--                          link="Blog"-->
        <!--                          title="Прогулки по Барселоне, архитектура Гауди"-->
        <!--                          description="Не секрет, что Саграда Фамилияи и другие архитектурные шедевры Антонио Гауди-->
        <!--                          являются визитной карточкой Барселоны."-->
        <!--                          :image="getJpegImgUrl('blog_card_example')"-->
        <!--                />-->
        <!--                <BlogCard class="blog-card-wrapper"-->
        <!--                          link="Blog"-->
        <!--                          title="Испанско-каталонско-русский разговорник"-->
        <!--                          description="Звучит сранно. Но если вы хотя бы однажды были в Барселоне или на побережье-->
        <!--                          Коста Брава, вы знаете, что кроме своих достопримечательностей и пляжей этот регион интересен тем,-->
        <!--                          что имеет два официальных языка: испанский и каталанский."-->
        <!--                          :image="getJpegImgUrl('blog_card_example')"-->
        <!--                />-->
        <!--            </div>-->
        <!--        </div>-->
        <div class="about-container">
            <img style="position: absolute; left: 0;" src="../assets/main/about-left.svg" alt="">
            <img style="position: absolute; right: 0; top: 10rem;" src="../assets/main/about-right.svg" alt="">
            <div class="about-text-container">
                <span class="main-section-title about-title">
                    О нас
                    <TextBabel class="text-babel-about-wrapper" text="Nosostros"/>
                </span>
                <div class="about-descritpion">
                    Считаете, что выучить язык — это долго и скучно?
                    Мы думаем, что это не так. Вы уже знаете, что значит «Hola!»,
                    пробовали хамон и паэлью и хотите узнать больше. Или вы совсем не знакомы с Испанией,
                    и это ваш первый шаг. Тогда курсы испанского языка это то, что вам нужно!
                    От вас требуется желание и посещаемость. От нас — много полезной информации
                    и приятная атмосфера.
                </div>
                <div class="about-image-carousel">
                    <ImageCarousel v-bind:images="[getCarouselImgUrl('slide1'), getCarouselImgUrl('slide2'), getCarouselImgUrl('slide3'), 
                getCarouselImgUrl('slide4'), getCarouselImgUrl('slide5'), getCarouselImgUrl('slide6'), getCarouselImgUrl('slide7'),
                getCarouselImgUrl('slide8'), getCarouselImgUrl('slide9'), getCarouselImgUrl('slide10'), getCarouselImgUrl('slide11'),
                getCarouselImgUrl('slide12'), getCarouselImgUrl('slide13'), getCarouselImgUrl('slide14'), getCarouselImgUrl('slide15'), 
                getCarouselImgUrl('slide16'), getCarouselImgUrl('slide17'), getCarouselImgUrl('slide18'), getCarouselImgUrl('slide19'), 
                getCarouselImgUrl('slide20'), getCarouselImgUrl('slide21')]"/>
                </div>
                <LinkButton class="about-link-button-wrapper" title="Познакомьтесь с нами поближе" link="/about"/>
            </div>
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
                events: {},
                feedbacks: {}
            }
        },
        mounted() {
            Service.get("teachers?count=4", (status, data) => {
                this.teachers = data;
            });
            Service.get("events?count=3", (status, data) => {
                this.events = data;
            });
            Service.get("feedbacks?count=1", (status, data) => {
                this.feedbacks = data;
            })
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

    .arrow-element {
        width: 3.2rem;
        height: 4.8rem;
        border: solid 0.25rem rgba(255, 255, 255, 0.45);
        position: absolute;
        z-index: 2;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: 70rem;
        border-radius: 1.8rem;
    }

    .group-recruitment-container {
        height: 44.4rem;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3));
        position: relative;
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
    }

    .events-link-button-wrapper {
        margin-top: 5rem;
    }

    .teachers-container {
        height: 100rem;
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
        top: -14rem;
    }

    .feedback-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--background-color-white);
        height: 67rem;
        position: relative;
    }

    .feedback-card-wrapper {
        box-shadow: 0 4px 16px 0 rgba(41, 41, 41, 0.15);
    }

    .feedbacks-cards-title {
        margin-top: 22rem;
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
        z-index: 1;
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

    .about-text-container {
        display: flex;
        flex-direction: column;
        width: 48rem;
        top: 15rem;
        text-align: left;
        margin-top: 17rem;
        margin-left: 5rem;
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

    .about-descritpion {
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        line-height: 1.75;
    }

    .about-image-carousel {
        height: 26rem;
        width: 135rem;
        align-self: center;
        margin: 5rem 0;
    }

</style>