<template>

    <div id="container">

        <div id="cover" class="clearfix">

            <div id="info-block">

                <p class="info">Лучшие преподаватели <b>только из Испании</b></p>
                <p class="info">Стоимость академического часа <b>от 300 рублей</b></p>
                <p class="info">Kультурные мероприятия, вечеринки, конкурсы, вино и испанcкая еда</p>
                <p class="info"><b>6 лет</b> работы и <b>3.000</b> довольных слушателей</p>
                <p class="info">Обучаем взрослых и детей, юристов и экономистов, бизнесменов и дипломатов</p>

            </div>

            <div id="enrollment">

                <p id="enrollment-title">Запишитесь на бесплатный пробный урок</p>

                <div id="form">

                    <input class="form-input" name="name" type="text" id="name" placeholder="Ваше имя"/>
                    <input class="form-input" name="phone" type="text" id="phone" placeholder="Телефон"/>
                    <button class="form-button" type="submit" id="submit-button">Записаться</button>

                </div>

                <p id="enrollment-message">Нажимая "Записаться" вы соглашаетесь с <a href="#">политикой
                    конфиденциальности</a></p>

            </div>

        </div>

        <div id="info" class="section">

            <InfoBlock title="Набор в группы: Январь, Февраль"
                       image="winter_groups"
                       description="При оплате полного стандартного курса действуют скидки
                 <br>— Семейным парам - 20%
                 <br>— Приведи друга и получите скидку в 15% каждый"
                       linkTitle="посмотреть расписание"/>

            <InfoBlock title="Наши преподаватели"
                       image="teachers"
                       description="C нами работают преподаватели - носители языка из Испании, 
                 увлеченные своей профессией. "
                       linkTitle="познакомиться"/>

            <InfoBlock title="Мероприятия"
                       image="events"
                       description="Мы проводим различные мероприятия и встречи!"
                       linkTitle="подробнее"/>

            <InfoBlock title="Отзывы о нас"
                       image="feedback"
                       description="Когда изучение иностранного языка в удовольствие. Прошла в центре программу А1 и А2. 
                 Программа занятий очень хорошо продумана, уроки проходят эффективно. И при этом в дружеской позитивной атмосфере; 
                 язык ложится легко..."
                       linkTitle="читать дальше"/>
        </div>

        <Delimiter/>

        <div id="course" class="section">

            <SectionHeader image="course"
                           title="Cursos"
                           description="Курсы испанского и каталонского в Москве"/>

            <div id="courses-grid">

                <Course image="spanish"
                        title="Испанский язык"
                        description="Испанский язык является одним из самых распространенных и 
                востредованных языков в мире. На нем говорят в Испании, Латинской Америке и США. 
                Если вы выбираете иностранный язык, несомненно, следует остановить свой выбор на испанском."
                />

                <Course image="catalan"
                        title="Каталонский язык"
                        description="Каталонский язык является официальным языком Каталонии, Балеарских островов, Арагона, Валенсии и Андорры.
                У нас Вы можете изучать каталанский, общаясь с носителями языка, узнать новые аспекты много-культурной Испании."
                />

                <Course image="children"
                        title="Испанский для детей"
                        description="Методики преподавания испанского языка для детей отличается от методик для взрослых. 
                Здесь большое внимание уделяется заданиям в игровой форме, используется много визуальных материалов. 
                Мы проводим занятия для детей от 4 до 16 лет."
                />

            </div>

            <Button text="Все курсы" link="#" style="margin-left: auto; margin-right: auto;"/>

        </div>

        <Delimiter/>

        <div id="feedback" class="section">
            <SectionHeader image="feedback"
                           title="Opiniones"
                           description="Отзывы о курсах испанского"/>
            
            <div id="feedbacks-grid">
                
                <Feedback image="feedback1"
                          text="Я начала изучать испанский язык с нуля. Занимаюсь с группой у преподавателя Хуана.
                  Никогда не думала,что изучать язык может быть так познавательно, весело и захватывающе, т.к.
                  из школьного детства всплывали совершенно другие воспоминания. Всем рекомендую эту школу испанского языка!
                  Приходите заниматься, не бойтесь открывать новые страницы своей жизни!"
                          date="15.02.2016"
                          author="Анжелика Лестиникова"
                />
                
                <Feedback image="feedback2"
                          text="Я обучалась в течении 3-х лет (правда, с перерывами в обучении), у разных преподавателей. 
                  Мне очень трудно было первые два-три урока, но потом, по мере увелечения словарного запаса - легче. 
                  Очень нравится, что преподаватели - носители языка - это заставляет напрягаться, думать, искать синонимы, не не говорить по-русски.
                  Атмосфера в классе дружелюбная, почти семейная, заниматься интересно."
                          date="17.01.2016"
                          author="Родина Анна"
                />
                
                <Feedback image="feedback3"
                          text="Я изучаю испанский язык в школе уже 4-й год и на каникулах решил подтянуть свои знания. Я занимался с Еленой Алексеевной.
                  Мне очень понравилось, что учительница спокойная, никогда не ругала за ошибки, а просто и понятно объясняла недочёты.
                  Осталось приятное ощущение от общения. При случае обращусь опять за помощью."
                          date="10.02.2016"
                          author="Виталий Лукашев"
                />
                
                <Feedback image="feedback4"
                          text="Учусь в этой школе почти 2 года. Дружеская, семейная атмосфера, небольшие группы. Преподают носители языка. 
                  На занятиях очень интересно и весело. Эффект есть, в Испании свободно разговариваю, почти нет языкового барьера. 
                  Учусь у Ориола. Всем рекомендую!"
                          date="26.04.2015"
                          author="Люба Зимина"
                />
                
            </div>

            <Button text="Все отзывы" link="#" style="margin-left: auto; margin-right: auto;"/>

        </div>

        <Delimiter/>

        <div id="blog" class="section">

            <SectionHeader image="blog"
                           title="Blog"
                           description="Блог о языке и культуре Испании"/>

            <div id="blog-body"></div>

            <Button text="Перейти в блог" link="#" style="margin-left: auto; margin-right: auto;"/>

        </div>

        <Delimiter/>

        <div id="about" class="section">

            <SectionHeader image="blog"
                           title="Nosotros"
                           description="О нас"/>

            <div id="about-body">

                <ImageCarousel v-bind:images="['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 
        'slide6', 'slide7', 'slide8', 'slide9', 'slide10', 'slide11', 'slide12', 'slide13',
         'slide14', 'slide15', 'slide16', 'slide17', 'slide18', 'slide19', 'slide20' , 'slide21']"/>

            </div>

            <p id="about-text">

                Считаете, что выучить язык – это долго и скучно? Мы думаем, что это не так. Вы уже знаете, что значит
                "Hola!",
                пробовали хамон и паэлью и хотите узнать больше. Или вы совсем не знакомы с Испанией, и это ваш первый
                шаг.
                Тогда курсы испанского языка это то, что вам нужно! От вас требуется желание и посещаемость.
                От нас - много полезной информации и приятная атмосфера.

            </p>

            <Button text="Читать дальше" link="#" style="margin-left: auto; margin-right: auto;"/>

        </div>

        <Delimiter/>

        <div id="contact" class="section">

            <SectionHeader image="contact"
                           title="Contactos"
                           description="Контакты"/>

            <div class="content-body">

                <YandexMaps/>

                <div id="contacts">
                    <a :href="'tel:{{ phone }}'">{{ phone }}</a>
                    <a :href="'tel:{{ additionalPhone }}'">{{ additionalPhone }}</a>
                    <a :href="'mailto:{{ email }}'">{{ email }}</a>
                    <br>
                    <span v-for="(metro, index) in metroStationsInfo" v-bind:key="index"
                          v-bind:data="metro">{{ metro }}</span>
                </div>

            </div>

            <Button text="напишите нам" link="#" style="margin-left: auto; margin-right: auto;"/>

        </div>

    </div>
</template>

<script>

    import SectionHeader from '.././SectionHeader.vue'
    import Delimiter from '.././Delimiter.vue'
    import Button from '.././Button.vue'
    import InfoBlock from '.././InfoBlock.vue'
    import Course from '.././Course.vue'
    import Feedback from '.././Feedback.vue'
    import ImageCarousel from '.././ImageCarousel'
    import YandexMaps from '.././YandexMaps'

    export default {
        props: {
            phone: String,
            additionalPhone: String,
            email: String,
            address: String,
            metroStationsInfo: Array
        },
        components: {
            SectionHeader,
            Delimiter,
            Button,
            InfoBlock,
            Course,
            Feedback,
            ImageCarousel,
            YandexMaps
        }
    }
</script>

<style scoped>

    /*# region Info */

    #info {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    /*# endregion */

    /*#region Cover*/

    #cover {
        background: url("../../assets/main/common/cover.jpg") no-repeat;
        position: relative;
    }

    #info-block {
        float: left;
        display: flex;
        flex-direction: column;
        margin: 40px 0 0 55px
    }

    .info {
        color: black;
        background: #ffffffeb;
        text-align: left;
        padding: 7px 15px 7px 15px;
        border-left: #FCC423 solid 4px;
        border-radius: 0 10px 58px 0;
        line-height: 1.5;
        width: auto;
        max-width: 450px;
    }

    #enrollment {
        float: right;
        max-width: 320px;
        background: white;
        margin: 50px 55px 45px 50px;
        border-radius: 20px
    }

    #enrollment-title {
        font-size: 1.4rem;
        margin: 10px 20px;
    }

    #form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }

    .form-input {
        height: 42px;
        width: 250px;
        border: #f0bf00 2px solid;
        border-radius: 4px;
        font-size: 1rem;
        text-align: center;
    }

    .form-input::placeholder {
        color: #9b9b9b;
    }

    .form-button {
        height: 42px;
        width: 250px;
        background-color: #f50000;
        color: white;
        border: #f50000 2px solid;
        border-radius: 4px;
        font-size: 1.4rem;
        text-align: center;
        letter-spacing: 0.05rem;
    }

    #form > input, button {
        margin: 10px;
    }

    #enrollment-message {
        font-size: 1.1rem;
        margin: 10px 20px 30px 20px;
    }

    #enrollment-message > a {
        color: #465f99;
        text-decoration: none
    }

    /*# endregion */

    /*# region About */

    #about-body {
        margin: 20px 40px
    }

    #about-text {
        margin: 10px 200px 20px;
        line-height: 1.5;
        text-align: center;
        color: #312A1E;
        font-size: 1.2rem;
    }

    /*# endregion */

    /*# region Courses */

    #courses-grid {
        display: inline-grid;
        grid-template-columns: auto auto auto;
        grid-gap: 0 35px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    /* endregion */

    #feedbacks-grid {
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 0 35px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    /*# region Contact */

    #contacts {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 20px;
    }

    #contacts > a {
        font-size: 1.5rem;
        color: #312A1E;
    }

    #contacts > span {
        font-size: 1.2rem;
    }

    /* endregion */

    /*# region Common */

    .content-body {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .section {
        padding: 60px 55px;
    }

    /*# endregion */

    /*# region Course */

    /*# endregion */

</style>
