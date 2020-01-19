<template>
    <div class="text-babel-container">
        {{text}}
    </div>
</template>

<script>
    export default {
        props: {
            text: String
        }
    }
</script>

<style scoped>
    
    .text-babel-container {
        font-family: FedraSerifAPro-Medium-Italic, sans-serif;
        font-size: 1.2rem;
        color: #ffefaa;
        height: 3.5rem;
        background-color: rgb(90, 90, 90);
        padding: 0 1.5rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        position: relative;
        white-space: nowrap;
    }

    .text-babel-container:after {
        content: '';
        top: 3.4rem;
        left: 25%;
        right: 75%;
        position: absolute;
        display: block;
        width: 1.4rem;
        height: 0.75rem;
        background-color: transparent;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        box-shadow: 0.7rem 0.35rem 0 0.3rem rgb(90, 90, 90);
        transform: rotate(-45deg);
        z-index: 1;
    }

    @media screen and (max-width: 760px) {
        .text-babel-container {
            font-size: 1rem;
            height: 2.5rem;
        }
        
        .text-babel-container:after {
            top: 2.7rem;
        }
    }
    
</style>