<template>
    <router-link id="container" v-if="link" :to="link" append>
        <span id="date">{{ date | moment("DD.MM.YYYY") }}</span>
        <img :alt="title" :src="image"/>
        <div id="description">
            <b>Разговорный клуб</b>
            <br>
            <router-link :to="link" append>{{ title }}</router-link>
            <p>Уровень - {{ level }}</p>
            <p>{{ description }}</p>
            <b>Ведущий: </b>
            <span>{{ leaderName }}</span>
            <br>
            <span>Ждём вас! Начало: 19:00</span>
        </div>

    </router-link>
</template>

<script>
    export default {
        props: {
            date: String,
            image: String,
            title: String,
            level: String,
            description: String,
            link: String,
            leaderName: String
        }
    }
</script>

<style scoped>

    #container {
        display: grid;
        grid-template-columns: fit-content(100%) auto;
        grid-gap: 10px;
        margin: 20px 0;
        font-size: 1.6rem;
    }

    #date {
        grid-column: 1 / span 2;
        font-weight: bold;
        text-align: left;
    }
    
    #description {
        text-align: left;
        line-height: 1.5;
        color: black;
    }

    img {
        width: 500px;
        height: 300px;
    }
    
    a {
        font-weight: bold;
        color: #465F99;
        text-decoration: none;
    }
    
    a:hover {
        color: black;
    } 

</style>