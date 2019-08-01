<template>
    <div class="menu">
        <ul class="menu-container">
            <li class="menu-item">
                <router-link to="about">О школе</router-link>
            </li>
            <li class="menu-item">
                <router-link to="about">Курсы</router-link>
            </li>
            <li class="menu-item">
                <router-link to="about">Блог</router-link>
            </li>
            <li class="menu-item">
                <router-link to="about">Отзывы</router-link>
            </li>
            <li class="menu-item">
                <router-link to="about">Habla клуб</router-link>
            </li>
            <li class="menu-item">
                <router-link to="about">Обучение в Испании</router-link>
            </li>
            <li class="menu-item">
                <router-link to="about">Тест</router-link>
            </li>
            <li class="menu-item">
                <router-link to="about">Контакты</router-link>
            </li>
            <li class="menu-item menu-item-color-light">
                <router-link to="about">Дарим пробный урок!</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

    .menu-container {
        list-style-type: none;
        margin: 0 10rem;
        padding: 0;
        overflow: hidden;
        background-color: var(--menu-background-color);
    }
    
    .menu {
        background-color: var(--menu-background-color);
        font-family: GothamPro-Bold, sans-serif;
    }
    
    .menu-item {
        float: left;
    }
    
    .menu-item a {
        display: block;
        color: black;
        text-align: center;
        padding: 2.1rem 2rem;
        text-decoration: none;
        font-size: 1.2rem;
        letter-spacing: 0.092rem;
        text-transform: uppercase;
    }
    
    .menu-item-color-light {
        background-color: var(--menu-background-color-light);
        float: right;
    }
    
</style>