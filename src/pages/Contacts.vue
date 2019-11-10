<template>
    <div id="contacts">
        <SectionHeader image="contact"
                       title="Contactos"
                       description="Контакты"/>
        <div id="contacts-section">
            <form @submit.prevent="submit" class="contacts-info">
                <span class="contacts-title">Напишите нам</span>
                <input class="contacts-input" v-model="name" name="name" placeholder="Ваше имя" />
                <input class="contacts-input" v-model="contact" name="contact" placeholder="Телефон или Email" />
                <input class="contacts-input contacts-input-body" v-model="body" name="comments" placeholder="Письмо" />
                <FormButton text="Отправить" :button-height="40" :button-width="150" style="align-self: center"/>
                <ThankYouModal v-show="isModalVisible" @close="closeModal" v-body-scroll-lock:reserve-scroll-bar-gap="isModalVisible" />
            </form>
            <div class="contacts-info">
                <span class="contacts-title">Наши контакты</span>
                <a class="contacts-label" :href="'tel:{{ phone }}'">{{ phone }}</a>
                <a class="contacts-label" :href="'tel:{{ additionalPhone }}'">{{ additionalPhone }}</a>
                <a class="contacts-label" :href="'mailto:{{ email }}'">{{ email }}</a>
                <br>
                <span v-for="(metro, index) in metroStationsInfo" v-bind:key="index"
                      v-bind:data="metro">{{ metro }}</span>
                <YandexMaps :height="325" style="margin-top: 20px"/>
            </div>
        </div>
    </div>
</template>

<script>

    import SectionHeader from '../components/SectionHeader'
    import FormButton from '../components/FormButton'
    import YandexMaps from '../components/YandexMaps'
    import Service from '../service'
    import ThankYouModal from '../components/ThankYouModal';

    export default {
        props: {
            phone: String,
            additionalPhone: String,
            email: String,
            address: String,
            metroStationsInfo: Array
        },
        components: {
            FormButton,
            SectionHeader,
            YandexMaps,
            ThankYouModal
        },
        data() {
            return {
                name: "",
                contact: "",
                body: "",
                isModalVisible: false
            }
        },
        methods: {
            submit() {
                Service.post("sendemail", {
                    name: this.name,
                    contact: this.contact,
                    body: this.body
                }, (status) => {
                    if(status === 200) {
                        this.name = '';
                        this.contact = '';
                        this.body = '';
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

    #contacts {
        padding: 6rem 5.5rem;
        font-size: 1.6rem;
        margin-top: 10rem;
    }

    #contacts-section {
        display: flex;
        margin-top: 2rem;
    }

    .contacts-title {
        font-weight: bold;
        align-self: center;
        margin: 2rem 0;
        font-size: 2rem;
    }

    .contacts-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 2rem;
    }

    .contacts-label {
        color: #312A1E;
        margin-bottom: 1rem;
    }

    .contacts-input {
        margin-bottom: 1.5rem;
        width: 55rem;
        height: 4.5rem;
        padding : 0 0.5rem;
        border: 0.2rem solid #F0BF00;
        overflow: auto;
        outline: none;
        border-radius: 0.5rem;
    }

    .contacts-input-body {
        height: 25rem;
    }

    .contacts-input-body::placeholder {
        margin-bottom: 1.5rem;
        vertical-align: top;
    }

</style>