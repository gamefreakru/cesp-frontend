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
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

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

</style>
