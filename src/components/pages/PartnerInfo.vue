<template>

    <div id="partner-info">

        <div id="header">

            <img id="circle-image" :alt="name" :src="image"/>
            
            <div id="header-container">
                <span id="title">{{ name }}</span>
                <span id="link">Сайт: <a :href="link">{{ linkTitle }}</a></span>      
            </div>

        </div>
        
        <div id="description" v-html="description"></div>
        
        <ImageCarousel :images="images" :images-per-page=3 :image-width=380 :image-height=250 />

    </div>

</template>

<script>
    
    import ImageCarousel from '../ImageCarousel'
    
    export default {
        components: {
            ImageCarousel
        },
        data() {
            return {
                image: this.getImgUrl('partner'),
                name: "Московский Дом Книги",
                link: "#",
                linkTitle: "mdk-arbat.ru",
                description: "Один из крупнейших в Европе и самый большой в России Московский дом книги на Новом Арбате был " +
                    "открыт в 1967году и с тех пор стал самым популярным книжным магазином нашего города Здесь регулярно " +
                    "проводят различные встречи с интересными и знаменитыми личностями: писателями, актерами и ведущими, " +
                    "мероприятия при поддержке Правительства Москвы, детские фестивали, образовательные программы, " +
                    "благотворительные акции в помощь детям. <br><br>" +
                    "Так же вы можете попасть на различные бесплатные мастер-классы от уроков по макияжу до изучения испанского языка," +
                    " поиграть в настольные игры или литературную мафию. В «Московском Доме Книги» регулярно проходят видео" +
                    " показы и презентации наилучших творений отечественного и зарубежного кинематографа в рамках проекта «Реальное кино». <br><br>" +
                    "А так же на площадке Art-клуба «Переплет» вы можете окунуться в мир творческих людей, артистов Московских театров и кино," +
                    " познакомиться с покупателями и зрителями и обрести новых друзей по интересам.<br><br>" +
                    "<b>Адрес (главный филиал):</b><br><br>" +
                    "Россия, г. Москва, ул. Новый Арбат, д.8 (м. Арбатская)<br><br>" +
                    "<b>Телефоны:</b><br><br>" +
                    "+7 (495) 789-35-91 (сеть магазинов)<br>" +
                    "+7 (495) 648-17-68 (интернет-магазин)",
                images: [this.getImgUrl('partner-info1'), this.getImgUrl('partner-info2'), this.getImgUrl('partner-info3')]
            }
        },
        methods: {
            getImgUrl(imagePath) {
                var images = require.context('../../assets/partners', false, /\.jpg$/);
                return images('./' + imagePath + ".jpg");
            }
        }
    }
</script>

<style scoped>

    #partner-info {
        display: flex;
        flex-direction: column;
        margin: 0 55px 60px;
        padding: 30px 40px;
        background-color: #ffffffb3;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0 1px 6px #0000001a;
    }

    #header {
        display: flex;
        margin-top: 40px;
        justify-content: center;
        align-self: flex-start;
    }
    
    #header-container {
        display: flex; 
        flex-direction: column;
        margin-left: 50px;
        justify-content: center;
        text-align: left;
    }
    
    #circle-image {
        width: 230px;
        height: 150px;
        border-radius: 10%;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    
    #title {
        font-size: 2.5rem;
    }
    
    #link a {
        text-decoration: none;
        color: #0089FF;
    }
    
    #link a:hover {
        color: #83C6FF;
    }
    
    #description {
        text-align: left;
        line-height: 1.5;
        margin: 40px 0;
    }

</style>