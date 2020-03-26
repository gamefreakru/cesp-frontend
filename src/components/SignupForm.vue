<template>
    <div class="signup-container">
        <span class="signup-title">
            Запишитесь на 
            <span style="color: var(--tomato)">бесплатный</span>
            пробный урок!
        </span>
        <div class="signup-form-container">
            <form class="signup-form-submit-container" @submit.prevent="submit">
                <input type="text" v-model="name" class="signup-form-input" placeholder="Ваше имя (обязательно)">
                <input type="text" v-model="contact" class="signup-form-input" placeholder="Телефон (обязательно)">
                <button type="submit" onsubmit="ym(52043682, 'reachGoal', 'send'); return true;"
                        class="signup-form-button">
                    Записаться
                </button>
            </form>
        </div>
        <div class="signup-legal-text">Нажимая на кнопку я соглашаюсь с
            <router-link class="signup-legal-link" to="/policy">Политикой конфиденциальности</router-link>
        </div>
        <ThankYouModal class="signup-thank-you-modal" @hideModal="hideModal"/>
        <ThankYouModal class="signup-thank-you-modal-tablet" width="680" @hideModal="hideModal"/>
        <ThankYouModal class="signup-thank-you-modal-phone" width="280" height="180" @hideModal="hideModal"/>
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
            }
        },
        methods: {
            submit() {
                this.showModal();
                Service.post("sendemail", {
                    name: this.name,
                    contact: this.contact,
                }, (status) => {
                    if (status === 200) {
                        this.name = '';
                        this.contact = '';
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

    .signup-container {
        width: 124rem;
        height: 23rem;
        background-image: url("../assets/signup-form/signup-form-background.png");
        background-size: cover;
        background-position: center;
        border-radius: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 4rem;
        box-sizing: border-box;
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

    .signup-form-submit-container {
        display: flex;
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
        margin: 0 1rem;
    }

    .signup-form-input:first-child {
        margin-left: 0;
    }

    .signup-form-input::placeholder {
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        color: #ccc0a9;
    }

    .signup-form-input:focus {
        outline: none;
    }

    .signup-form-button {
        width: 36rem;
        height: 5.6rem;
        margin-left: 1rem;
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

    .signup-legal-link {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.2rem;
        color: var(--tomato);
        text-decoration: none;
    }

    .signup-thank-you-modal-tablet {
        display: none;
    }

    .signup-thank-you-modal-phone {
        display: none;
    }

    @media screen and (max-width: 1280px) {
        .signup-container {
            min-width: 60rem;
            width: 68rem;
            height: 36.5rem;
            background-image: url('../assets/signup-form/signup-form-contacts-background.png');
        }

        .signup-form-container {
            flex-direction: column;
        }

        .signup-form-submit-container {
            flex-direction: column;
        }

        .signup-form-input {
            margin: 0.75rem 0;
        }

        .signup-form-button {
            margin: 0.75rem 0;
        }

        .signup-legal-text {
            align-self: center;
            margin: 1rem 0 0 0;
            width: 50rem;
        }

        .signup-thank-you-modal {
            display: none;
        }

        .signup-thank-you-modal-tablet {
            display: block;
        }
        
    }

    @media screen and (max-width: 760px) {
        .signup-container {
            padding: 2rem;
            height: 27.5rem;
            width: calc(100% - 10rem);
            min-width: 28rem;
        }

        .signup-title {
            font-size: 1.6rem;
            margin-bottom: 1rem;
        }

        .signup-form-container {
            margin-top: 0;
        }

        .signup-form-submit-container {
            flex-direction: column;
        }

        .signup-form-input {
            width: 24rem;
            height: 4rem;
            margin: 0.5rem 0;
            font-size: 1.2rem;
            padding-left: 0;
            text-align: center;
        }

        .signup-form-input::placeholder {
            font-size: 1.2rem;
        }

        .signup-form-button {
            width: 24rem;
            height: 4rem;
            margin: 0.5rem 0;
        }

        .signup-legal-text {
            width: 22rem;
            font-size: 1.1rem;
        }

        .signup-legal-link {
            font-size: 1.1rem;
        }

        .signup-thank-you-modal-tablet {
            display: none;
        }

        .signup-thank-you-modal-phone {
            display: block;
        }
    }

</style>