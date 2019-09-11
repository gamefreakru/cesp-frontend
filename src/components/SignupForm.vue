<template>
    <div class="signup-container">
        <span class="signup-title">
            Запишитесь на 
            <span style="color: var(--tomato)">беслпатный</span>
            пробный урок!
        </span>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

    .signup-container {
        width: 124rem;
        height: 25rem;
        background-image: url("../assets/signup-form/signup-form-background.svg");
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .signup-title {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 2.4rem;
        margin-top: 4rem;
    }
    
</style>