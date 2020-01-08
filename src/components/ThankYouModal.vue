<template>
    <modal name="thank-you-modal"
           :classes="['thank-you-modal-container']"
           @before-open="beforeOpen"
           @before-close="beforeClose"
           :width="1270"
           :height="250">
        <div class="thank-you-modal">
            <span class="thank-you-modal-title">Ваша заявка принята!</span>
            <span class="thank-you-modal-description">
                Наш менеджер скоро свяжется с вами для уточнения всех деталей.
            </span>
            <div class="thank-you-modal-button-container" @click="hideModal">
                <span class="thank-you-modal-button-title">Закрыть</span>
                <img class="thank-you-modal-button-image" src="../assets/common/arrow.svg" alt="arrow"/>
            </div>
            <img class="thank-you-modal-close-image" @click="hideModal" src="../assets/common/cross.svg" alt="close">
        </div>
    </modal>
</template>

<script>
    export default {
        methods : {
            hideModal() {
                this.$emit("hideModal")
            },
            beforeOpen() {
                document.documentElement.style.overflow = 'hidden'
            },
            beforeClose() {
                document.documentElement.style.overflow = 'auto'
            }
        }
    }
</script>

<style scoped>
    
    .thank-you-modal-container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(41, 41, 41, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1.2rem;
    }
    
    .thank-you-modal {
        width: 127rem;
        height: 25rem;
        background-image: url("../assets/signup-form/signup-form-background.png");
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5.5rem 0;
        box-sizing: border-box;
        position: relative;
        border-radius: 1.2rem;
    }
    
    .thank-you-modal-title { 
        font-family: GothamPro-Medium, sans-serif;
        font-size: 2.4rem;
        text-align: left;
        width: 30rem;
    }
    
    .thank-you-modal-description {
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        text-align: left;
        line-height: 1.5;
        width: 30rem;
        margin: 1rem 0 2rem 0;
    }
    
    .thank-you-modal-button-container {
        display: flex;
        width: 30rem;
        cursor: pointer;
    }
    
    .thank-you-modal-button-title {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.4rem;
        text-transform: uppercase;
    }
    
    .thank-you-modal-button-image {
        margin-left: 1rem;
    }
    
    .thank-you-modal-close-image {
        position: absolute;
        right: 3.5rem;
        top: 3.5rem;
        cursor:  pointer;
    }
    
</style>