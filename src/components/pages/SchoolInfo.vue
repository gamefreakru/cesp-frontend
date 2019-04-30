<template>
    
    <div id="school-info">

        <span id="title">Школа испанского языка {{ title }}</span>

        <ImageCarousel v-bind:images="images" :images-per-page=4 :image-width=300 :image-height=200 style="margin: 20px 0"/>

        <span id="sub-title">{{ title }}</span>
        <div id="description" v-html="description"></div>
        
        <Button text="Записаться" link="#" :button-height=20 :button-width=200 style="align-self: center"/>
        
    </div>
    
</template>

<script>
    
    import ImageCarousel from "../ImageCarousel";
    import Button from "../Button"
    
    export default {
        components: {
          ImageCarousel,
          Button  
        },
        data() {
            return {
                title: "International House Barcelona", 
                images: [this.getImgUrl('school-info1'), this.getImgUrl('school-info2'), 
                    this.getImgUrl('school-info3'), this.getImgUrl('school-info4'), this.getImgUrl('school-info4')],
                description: "Языковая школа Españole IH Valencia приглашает всех желающих изучать испанский язык в уютной атмосфере" +
                    " с профессиональными преподавателями! Españole IH Valencia - член крупнейшей международной сети независимых " +
                    "языковых школ International House World Organisation, целью которой является достижение наивысших стандартов " +
                    "преподавания языков по всему миру. Школа аrкредитована Институтом Сервантеса и, кроме того, является членом " +
                    "Национальной Федерации испанских школ FEDELE. <br><br>" +
                    "Вы, безусловно, по достоинству оцените прекрасное месторасположение школы в самом сердце Валенсии, " +
                    "в его историческом центре. Занятия проходят в красивом отреставрированном здании, которое полностью " +
                    "готово принять в своих стенах студентов со всего мира. Аудитории полностью оборудованы для полноценного " +
                    "изучения испанского языка. Кроме самих языковых курсов вас ждет обширная и интересная культурная программа. <br><br>" +
                    "Все преподаватели школы - профессионалы своего дела, которые не один год преподают испанский язык иностранным" +
                    " студентам и в полной мере владеют коммуникативной методикой преподавания языка, которая позволяет студентам" +
                    " в кратчайшие сроки погрузиться в язык, а также улучшить свои коммуникативные навыки."
            }
        },
        methods: {
            getImgUrl(imagePath) {
                var images = require.context('../../assets/schools', false, /\.jpg$/);
                return images('./' + imagePath + ".jpg");
            }
        }
    }
</script>

<style scoped>

    #school-info {
        display: flex;
        flex-direction: column;
        margin: 0 55px 60px;
        padding: 20px;
        background-color: #ffffffb3;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0 1px 6px #0000001a;
    }
    
    #title {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 10px 0;
    }
    
    #sub-title {
        font-weight: bold;
        margin-bottom: 10px;
    }
    
    #description {
        text-align: left;
        color: #312A1E;
        padding: 0 50px;
        margin: 10px 0;
    }
    
</style>