<template>
  <div id="container">
    <div id="bar" class="clearfix">
      <div id="logo">
        <router-link to="/">
          <img width="120px" height="120px" alt="Vamos" src="../assets/header/logo.png">
        </router-link>
      </div>
      <div id="title">
        <img alt="Vamos" src="../assets/header/header_text.png">
      </div>
      <div id="phone">
        {{ phone }}
      </div>
    </div>
    <div id="menu">
      <ul>
        <li><a href="#">О Vamos</a></li>
        <li><router-link to="courses">Курсы</router-link></li>
        <li><router-link to="feedbacks">Отзывы</router-link></li>
        <li><router-link to="blog">Блог</router-link></li>
        <li><router-link to="club">Habla клуб</router-link></li>
        <li><router-link to="schools">Обучение в Испании</router-link></li>
        <li><router-link to="test">Тест</router-link></li>
        <li><router-link to="contacts">Контакты</router-link></li>
      </ul>
    </div>
  </div>

</template>

<script>

  export default {
    props : {
      phone: String
    }
  }

</script>

<style scoped>

  #logo {
    float: left;
    margin-top: 10px;
  }

  #title {
    float: left;
    margin: 35px 0 35px 80px;
    padding: 3px 0 3px 14px;
    border-left: 4px solid #F6D900;
  }

  #bar {
    position: relative;
    margin: 0 55px;
  }

  #phone {
    float: right;
    font-size: 20px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

  #menu {
    background-color: #ffd906;
  }

  ul {
    list-style-type: none;
    margin: 0 55px;
    padding: 0;
    overflow: hidden;
    background-color: #ffd906;
  }

  li {
    float: left;
  }

  li a {
    display: inline-block;
    color: #312a1e;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #FFF4B9;
  }

</style>
