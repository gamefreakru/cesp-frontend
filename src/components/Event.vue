<template>
    <router-link :to="link" id="element">
        <div id="container">
            <img :alt="title" :src="image"/>
            <span id="title">{{ title }}</span>
            <span id="date">{{ date }}</span>
            <div id="description">{{ description }}</div>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            image: String,
            title: String,
            link: String,
            date: String,
            description: String
        }
    }
</script>

<style scoped>

    #container {
        display: flex;
        flex-direction: column;
        text-align: left;
        color: #465F99;
        line-height: 1.5;
    }

    #element {
        text-decoration: none;
    }
    
    #title {
        font-size: 1.8rem;
        font-weight: bold;
    }
    
    #date {
        font-size: 1.2rem;
        font-style: italic;
    }
    
    #title:hover {
        text-decoration: underline;
    }
    
    #description {
        font-size: 1.6rem;
    }

    img {
        width: 290px;
        height: auto;
        margin-bottom: 10px;
    }

</style>