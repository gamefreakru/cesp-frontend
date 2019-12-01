<template>
    <div v-if="type === 'signup'" class="signup-container">
        <span v-if="type === 'signup'" class="signup-title">
            Запишитесь на 
            <span style="color: var(--tomato)">бесплатный</span>
            пробный урок!
        </span>
        <div class="signup-form-container">
            <form @submit.prevent="submit">
                <input type="text" v-model="name" class="signup-form-input" style="margin-right: 2rem;" placeholder="Ваше имя (обязательно)">
                <input type="text" v-model="contact" class="signup-form-input" style="margin: 0 2rem;" placeholder="Контактный телефон (обязательно)">
                <button type="submit" onsubmit="ym(52043682, 'reachGoal', 'send'); return true;" class="signup-form-button" style="margin-left: 2rem;">
                    Записаться
                </button>
            </form>
        </div>
        <div class="signup-legal-text">Нажимая на кнопку я соглашаюсь с 
            <router-link class="signup-legal-link" to="/policy">Политикой конфиденциальности</router-link>
        </div>
        <ThankYouModal v-show="isModalVisible" @close="closeModal" v-body-scroll-lock:reserve-scroll-bar-gap="isModalVisible" />
    </div>
    <div v-else-if="type === 'contact'" class="signup-container signup-container-question">
         <span class="signup-title">
            Есть вопросы? 
            <span style="color: var(--tomato)">Напишите </span>
            нам.
        </span>
        <div class="signup-form-container">
            <form @submit.prevent="submit">
                <input type="text" v-model="name" class="signup-form-input" style="margin-right: 2rem;" placeholder="Ваше имя (обязательно)">
                <input type="text" v-model="contact" class="signup-form-input" style="margin-left: 2rem;" placeholder="Контактный телефон (обязательно)">
                <textarea v-model="message" class="signup-form-input signup-form-input-question" style="margin: 3rem 2rem 0 2rem;" placeholder="Напишите ваш вопрос здесь"></textarea>
                <button type="submit" onsubmit="ym(52043682, 'reachGoal', 'send'); return true;" class="signup-form-button" style="margin-left: 2rem; margin-top: 3rem;">
                    Отправить
                </button>
            </form>
        </div>
        <div class="signup-legal-text signup-legal-text-question">Нажимая на кнопку я соглашаюсь с
            <router-link class="signup-legal-link" to="/policy">Политикой конфиденциальности</router-link>
        </div>
        <ThankYouModal v-show="isModalVisible" @close="closeModal" v-body-scroll-lock:reserve-scroll-bar-gap="isModalVisible" />
    </div>
</template>

<script>
    import Service from '../service'
    import ThankYouModal from './ThankYouModal';
    
    export default {
        components: {
            ThankYouModal
        },
        props: {
            type: String  
        },
        data() {
            return {
                name: "",
                contact: "",
                message: "",
                isModalVisible: false
            }
        },
        methods: {
            submit() {
                Service.post("sendemail", {
                    name: this.name,
                    contact: this.contact,
                    body: this.message
                }, (status) => { 
                    if(status === 200) {
                        this.name = '';
                        this.contact = '';
                        this.showModal();
                    }
                })
            },
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        }
    }
</script>

<style scoped>

    .signup-container {
        width: 124rem;
        height: 23rem;
        background-image: url("../assets/signup-form/signup-form-background.svg");
        background-size: cover;
        background-position: center;
        border-radius: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 4rem;
        box-sizing: border-box;
    }
    
    .signup-container-question {
        height: 43rem !important;
    }
    
    .signup-title {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 2.4rem;
    }
    
    .signup-form-container {
        margin-top: 3rem;
        display: flex;
        flex-wrap: wrap;
    }
    
    .signup-form-input {
        width: 36rem;
        height: 5.6rem;
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        box-sizing: border-box;
        border-radius: 0.8rem;
        border: none;
        padding-left: 2rem;
    }
    
    .signup-form-input::placeholder {
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        color: #ccc0a9;
    }
    
    .signup-form-input:focus {
        outline: none;
    }
    
    .signup-form-input-question {
        width: 76rem !important;
        height: 10rem !important;
    }
    
    .signup-form-input-question::placeholder {
        transform:translate3d(0,10px,0)
    }
    
    .signup-form-button {
        width: 36rem;
        height: 5.6rem;
        background-color: var(--tomato);
        border: none;
        border-radius: 0.8rem;
        box-shadow: 0 0.4rem 1.6rem 0 #fa5932;
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.4rem;
        color: white;
        text-transform: uppercase;
        cursor: pointer;
    }
    
    .signup-form-button:focus {
        outline: none;
    }
    
    .signup-legal-text {
        font-family: GothamPro, sans-serif;
        font-size: 1.2rem;
        align-self: flex-end;
        margin-top: 2.5rem;
        margin-right: 7rem;
        width: 25rem;
        line-height: 1.5;
    }

    .signup-legal-text-question {
        align-self: center !important;
        width: 50rem !important;
        margin-right: 0 !important;
    }
    
    .signup-legal-link {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.2rem;
        color: var(--tomato); 
        text-decoration: none;
    }
    
</style>