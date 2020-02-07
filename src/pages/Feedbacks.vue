<template>
    <div id="feedbacks">
        <SectionHeader image="feedback"
                       title="Opiniones"
                       description="Отзывы о курсах испанского"/>
        <div id="feedbacks-grid">
            <Feedback v-for="(feedback, index) in feedbacks"
                      :key="index" 
                      :image="feedback.photo"
                      :text="feedback.message"
                      :date="feedback.date"
                      :author="feedback.signature" />
        </div>
        <div id="feedbacks-footer">
            <span id="footer-title">Откуда берутся отзывы?</span>
            <div id="footer-grid">
                <img alt="facebook" src="../assets/feedbacks/facebook.png">
                <span>Отзывы с таким значком мы взяли из социальных сетей и интернета. Их можно найти в facebook и vk,
                    на сайтах и форумах.</span>
                <img alt="vcard" src="../assets/feedbacks/vcard.png">
                <span>Это отзывы из анкет, которые наши студенты заполняют в конце курса.
                    Анкеты анонимные, но в большинстве случаев респонденты вписывают свое имя. 
                    Если здесь есть ваш отзыв, и вы не хотите, чтоб он стоял на сайте, сообщите нам.
                    <br>
                    <br>
                    Вы можете оставить свой отзыв через facebook, vk или отправить нам письмо.
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    
    import SectionHeader from '../components/SectionHeader.vue'
    import Feedback from '../components/Feedback.vue'
    import Service from '../service'
    
    export default {
        components: {
            SectionHeader,
            Feedback
        },
        data() {
            return {
                feedbacks: {}
            }
        },
        mounted() {
            Service.get("feedbacks", (status, data) => {
                this.feedbacks = data;
            })
        }
    }
</script>

<style scoped>

    #feedbacks-grid {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 50px 2%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        align-items: center;
        justify-content: center;
    }
    
    #feedbacks {
        padding: 6rem 1%;
        font-size: 1.6rem;
        margin-top: 10rem;
    }

    #feedbacks-footer {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }
    
    #footer-title {
        font-size: 1.4rem;
        font-weight: bold;
        text-align: left;
    }
    
    #footer-grid {
        display: inline-grid;
        grid-template-columns: auto auto;
        grid-gap: 20px 20px;
        margin: 20px 0;
    }
    
    #footer-grid > span {
        text-align: left;
    }
    
</style>