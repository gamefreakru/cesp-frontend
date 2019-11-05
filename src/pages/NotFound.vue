<template>
    <div class="not-found-container">
        <span class="not-found-title">Извините, страница не найдена.</span>
        <router-link class="not-found-link" to="/">перейти на главную</router-link>
        <img class="not-found-image" alt="Not found" src="../assets/common/notfound.png">
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

    .not-found-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .not-found-title {
        font-size: 4rem;
        margin-top: 15rem;
    }
    
    .not-found-link {
        font-size: 3rem;
        margin-top: 3rem;
    }
    
    .not-found-image {
        width: 40rem;
        height: 40rem;
        margin: 3rem 0;
    }
    
</style>