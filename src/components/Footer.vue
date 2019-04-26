<template>
    <div id="container">
        
        <Delimiter/>
        
        <div id="bar" class="clearfix">
        <span class="link">
          <a href="#">набор в группы</a>
          <a href="#">запись online</a>
        </span>
            <span class="link">
          <a href="#">контакты</a>
          <a href="#">подписаться на рассылку</a>
        </span>
            <span class="link">
          <a href="#">online оплата курсов</a>
          <img alt="Оплата онлайн" src="../assets/footer/online_pay.jpg">
        </span>
        </div>
    </div>
</template>

<script>

    import Delimiter from "./Delimiter.vue"

    export default {
        components: {
            Delimiter
        }
    }
</script>

<style scoped>

    #container {
        background-color: #f0f0f0;
    }

    #bar {
        display: flex;
        flex-direction: row;
        margin: 0 55px;
    }

    .link {
        display: flex;
        flex-direction: column;
    }

    .link a, img {
        text-align: left;
        margin: 10px 150px 10px 10px;
        color: #465F99;
        text-decoration: none;
        font-size: 13px;
    }

    .link a:hover {
        text-decoration: underline;
    }

    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }

</style>
