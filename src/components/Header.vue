<template>
    <div class="header-container">
        <ul class="menu-container">
            <li class="menu-item menu-burger" v-on:click="showMenu">
                <img alt="menu-burger" src="../assets/header/menu_burger.svg">
            </li>
            <li class="menu-item">
                <router-link to="/about">О школе</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/courses">Курсы</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/teachers">Преподаватели</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/feedbacks">Отзывы</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/club">Habla клуб</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/partners">Партнёры</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/contacts">Контакты</router-link>
            </li>
            <li class="menu-item menu-item-color-light">
                <img class="gift-image" alt="gift" src="../assets/header/gift.svg">
                <router-link to="/contacts" onclick="ym(52043682, 'reachGoal', 'probnij'); return true;">Записаться на пробный урок!</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods : {
            showMenu: function() {
            }
        }
    }
</script>

<style scoped>

    .menu-container {
        list-style-type: none;
        margin: 0 6rem;
        padding: 0;
        overflow: hidden;
        background-color: var(--main-color);
    }
    
    .header-container {
        min-width: 32rem;
        background-color: var(--main-color);
        font-family: GothamPro-Bold, sans-serif;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.1), 0 0.6rem 0.6rem rgba(0,0,0,0.1);
        z-index: 10;
        position: sticky;
        top: 0;
    }
    
    .menu-item {
        float: left;
    }
    
    .menu-item a {
        display: block;
        color: black;
        text-align: center;
        padding: 2.1rem 1.9rem;
        text-decoration: none;
        font-size: 1.2rem;
        letter-spacing: 0.092rem;
        text-transform: uppercase;
    }
    
    .menu-item-color-light {
        background-color: var(--background-color-light);
        float: right;
        display: flex;
    }
    
    .gift-image {
        margin-bottom: -0.5rem;
        margin-left: -1rem;
    }
    
    .menu-burger {
        padding: 2rem 1.9rem;
        display: none;
    }
    
    @media screen and (max-width: 1280px) {
        .menu-container {
            margin: 0;
        }
        
        .menu-item:not(:first-child):not(:last-child) {
            display: none;
        }
    
        .menu-burger {
            display: block;
            cursor: pointer;
        }
    }
    
</style>