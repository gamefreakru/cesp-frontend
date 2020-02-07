<template>
    <div id="container">
        <router-link :to="item.link" id="item" v-for="(item, index) in items"
              :data="item" 
              :key="index"
        >
            <span class="dot"/>
            <span class="text" :class="{ active: item.active}">{{ item.name }}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            items: Array
        }
    }
</script>

<style scoped>
    
    #container {
        display: flex;
        justify-content: center;
        font-size: 1.6rem;
    }
    
    #item {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
    
    .text {
        text-transform: uppercase;
        font-weight: bold;
        color: #465F99
    }
    
    .text:hover {
        color: #f0bf00;
    }
    
    .active {
        color: #CD1C24;
    }
    
    .dot {
        height: 5px;
        width: 5px;
        background-color: black;
        border-radius: 50%;
        display: inline-block;
        margin: 10px
    }

</style>