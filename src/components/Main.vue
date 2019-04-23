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
        <p id="enrollment-message">Нажимая "Записаться" вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
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

    <hr class="delimiter"/>

    <div id="course" class="section">
      <div id="course-header">
        <img alt="Курсы" src="../assets/main/common/course.png">
        <p class="section-title">Cursos</p>
        <p class="section-description">Курсы испанского и каталонского в Москве</p>
      </div>
      <div class="content-body">
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
      <a href="#" class="section-button">Все курсы</a>
    </div>

    <hr class="delimiter"/>

    <div id="feedback" class="section">
      <div id="feedback-header">
        <img alt="Отзывы" src="../assets/main/common/feedback.png">
        <p class="section-title">Opiniones</p>
        <p class="section-description">Отзывы о курсах испанского</p>
      </div>
      <div class="content-body">
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
      <a href="#" class="section-button">Все отзывы</a>
    </div>

    <hr class="delimiter"/>

    <div id="blog" class="section">
      <div id="blog-header">
        <img alt="Блог" src="../assets/main/common/blog.png">
        <p class="section-title">Blog</p>
        <p class="section-description">Блог о языке и культуре Испании</p>
      </div>
      <div id="blog-body">
      </div>
      <a href="#" class="section-button">Перейти в блог</a>
    </div>

    <hr class="delimiter"/>

    <div id="about" class="section">
      <div id="about-header">
        <img alt="Отзывы" src="../assets/main/common/blog.png">
        <p class="section-title">Nosotros</p>
        <p class="section-description">О нас</p>
      </div>
      <div id="about-body">
        <ImageCarousel/>
      </div>
      <a href="#" class="section-button">Читать дальше</a>
    </div>

    <hr class="delimiter"/>

    <div id="contact" class="section">
      <div id="contact-header">
        <img alt="Контакты" src="../assets/main/common/contact.png">
        <p class="section-title">Contactos</p>
        <p class="section-description">Контакты</p>
      </div>
      <div id="contact-body">
      </div>
      <a href="#" class="section-button">Напишите нам</a>
    </div>

    <hr class="delimiter"/>

  </div>
</template>

<script>

  import InfoBlock from './InfoBlock.vue'
  import Course from './Course.vue'
  import Feedback from './Feedback.vue'
  import ImageCarousel from './ImageCarousel'

  export default  {
    components: {
      InfoBlock,
      Course,
      Feedback,
      ImageCarousel
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
   background: url("../assets/main/common/cover.jpg") no-repeat;
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
 .section-title {
   font-family: 'Patua One', cursive, sans-serif;
   font-size: 2.5rem;
   font-weight: bold;
   color: #312A1E;
   margin-top: 20px;
   margin-bottom: 0;
 }

 .section-description {
   font-size: 1.3rem;
   font-weight: bold;
   margin-top: 10px;
 }

 .section-button {
   font-size: 1.4rem;
   line-height: 1.4rem;
   text-align: center;
   font-weight: bold;
   color: white;
   background: #f0bf00;
   text-decoration: none;
   letter-spacing: 0.05rem;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 10px;
   width: 185px;
   height: 40px;
   margin: 0 auto;
   border-radius: 3px;
 }

 .section-button:hover {
   background: #312A1E;
 }

 .delimiter {
   border: 0;
   border-top: #f0bf00 1px solid;
   border-bottom: white 1px solid;
   margin: 20px 0;
 }

 /*# endregion */

 /*# region Course */

 /*# endregion */


</style>
