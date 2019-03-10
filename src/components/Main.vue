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

    <div id="course" class="section">
      <div id="course-header">
        <img alt="Курсы" src="../assets/main/course.png">
        <p class="section-title">Cursos</p>
        <p class="section-description">Курсы испанского и каталонского в Москве</p>
      </div>
      <div id="course-body">
      </div>
      <a href="#" class="section-button">Все курсы</a>
    </div>

    <hr class="delimiter"/>

    <div id="feedback" class="section">
      <div id="feedback-header">
        <img alt="Отзывы" src="../assets/main/feedback.png">
        <p class="section-title">Opiniones</p>
        <p class="section-description">Отзывы о курсах испанского</p>
      </div>
      <div id="feedback-body">
      </div>
      <a href="#" class="section-button">Все отзывы</a>
    </div>

    <hr class="delimiter"/>

    <div id="blog" class="section">
      <div id="blog-header">
        <img alt="Блог" src="../assets/main/blog.png">
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
        <img alt="Отзывы" src="../assets/main/blog.png">
        <p class="section-title">Nosotros</p>
        <p class="section-description">О нас</p>
      </div>
      <div id="about-body">
      </div>
      <a href="#" class="section-button">читать дальше</a>
    </div>

    <hr class="delimiter"/>

    <div id="contact" class="section">
      <div id="contact-header">
        <img alt="Контакты" src="../assets/main/contact.png">
        <p class="section-title">Contactos</p>
        <p class="section-description">Контакты</p>
      </div>
      <div id="contact-body">
      </div>
      <a href="#" class="section-button">напишите нам</a>
    </div>

    <hr class="delimiter"/>

  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

 /*#region Cover*/
 #cover {
   background: url("../assets/main/cover.jpg") no-repeat;
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
