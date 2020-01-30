<template>
    <div class="contacts-container">
         <span class="contacts-title">
            Есть вопросы? 
            <span style="color: var(--tomato)">Напишите </span>
            нам.
        </span>
        <form @submit.prevent="submit" class="contacts-form-container">
            <div class="contacts-form-input-container">
                <input type="text" v-model="name" class="contacts-form-input" placeholder="Ваше имя (обязательно)">
                <input type="text" v-model="contact" class="contacts-form-input" placeholder="Телефон (обязательно)">
            </div>
            <textarea v-model="message" class="contacts-form-input-body"
                      placeholder="Напишите ваш вопрос здесь"></textarea>
            <button type="submit" onsubmit="ym(52043682, 'reachGoal', 'send'); return true;"
                    class="contacts-form-button">
                Отправить
            </button>
        </form>
        <div class="contacts-legal-text">Нажимая на кнопку я соглашаюсь с
            <router-link class="contacts-legal-link" to="/policy">Политикой конфиденциальности</router-link>
        </div>
        <ThankYouModal class="contacts-thank-you-modal" @hideModal="hideModal"/>
        <ThankYouModal class="contacts-thank-you-modal-tablet" width="680" @hideModal="hideModal"/>
    </div>
</template>

<script>
    
    import ThankYouModal from "./ThankYouModal";
    import Service from "../service";
    
    export default {
        name: "ContactsForm",
        components: {
            ThankYouModal
        },
        data() {
            return {
                name: "",
                contact: "",
                message: "",
            }
        },
        methods: {
            submit() {
                Service.post("sendemail", {
                    name: this.name,
                    contact: this.contact,
                    body: this.message
                }, (status) => {
                    if (status === 200) {
                        this.name = '';
                        this.contact = '';
                        this.message = '';
                        this.showModal();
                    }
                })
            },
            showModal() {
                this.$modal.show('thank-you-modal')
            },
            hideModal() {
                this.$modal.hide('signup-form-modal');
                this.$modal.hide('signup-form-modal-tablet');
                this.$modal.hide('signup-form-modal-phone');
                this.$modal.hide('thank-you-modal')
            }
        }
    }
</script>

<style scoped>

    .contacts-container {
        width: 124rem;
        height: 43rem;
        background-image: url('../assets/signup-form/signup-form-contacts-background.png');
        background-size: cover;
        background-position: center;
        border-radius: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 4rem;
        box-sizing: border-box;
    }

    .contacts-title {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 2.4rem;
    }

    .contacts-form-container {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contacts-form-input {
        width: 36rem;
        height: 5.6rem;
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        box-sizing: border-box;
        border-radius: 0.8rem;
        border: none;
        padding-left: 2rem;
        margin: 0 2rem;
    }

    .contacts-form-input:first-child {
        margin-left: 0;
    }
    
    .contacts-form-input:last-child {
        margin-right: 0;
    }

    .contacts-form-input::placeholder {
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        color: #ccc0a9;
    }

    .contacts-form-input:focus {
        outline: none;
    }

    .contacts-form-input-body {
        width: 76rem;
        height: 9.6rem;
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        box-sizing: border-box;
        border-radius: 0.8rem;
        border: none;
        padding-left: 2rem;
        margin-top: 3rem;
        resize: none;
    }
    
    .contacts-form-input-body::placeholder {
        transform: translate3d(0, 10px, 0);
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        color: #ccc0a9;
    }
    
    .contacts-form-input-body:focus {
        outline: none;
    }

    .contacts-form-button {
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
        margin-top: 3rem;
    }

    .contacts-form-button:focus {
        outline: none;
    }

    .contacts-legal-text {
        font-family: GothamPro, sans-serif;
        font-size: 1.2rem;
        margin-top: 1.5rem;
        line-height: 1.5;
    }

    .contacts-legal-link {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.2rem;
        color: var(--tomato);
        text-decoration: none;
    }
    
    .contacts-thank-you-modal-tablet {
        display: none;
    }

    @media screen and (max-width: 1280px) {

        .contacts-container {
            width: 72rem;
            height: 46rem;
        }
        
        .contacts-form-input {
            width: 30rem;
            margin: 0 1rem;
        }

        .contacts-form-input-body {
            width: 62rem;
            height: 15.6rem;
            margin-top: 2rem;
        }

        .contacts-form-button {
			margin-top: 2rem;
		}
        
        .contacts-thank-you-modal {
            display: none;
        }

        .contacts-thank-you-modal-tablet { 
            display: block;
        }

    }

    @media screen and (max-width: 760px) {

        .contacts-title {
            font-size: 1.6rem;
            margin-bottom: 1rem;
        }

        .contacts-form-container {
            margin-top: 0;
        }

    }

</style>