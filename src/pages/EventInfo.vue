<template>
    
    <div id="event-info">
        
        <span id="title">{{ title }}</span>
        
        <ImageCarousel v-bind:images="images" :images-per-page=2 :image-width=600 :image-height=400 style="margin: 20px 0"/>
        
        <div id="description" v-html="description"></div>
        
        <Button :text="buttonText" link="#" :button-height=20 :button-width="buttonWidth" style="align-self: center; margin: 20px 0"/>
        
    </div>
    
</template>

<script>

    import ImageCarousel from "../components/ImageCarousel";
    import Button from "../components/Button";

    export default {
        components: {
          ImageCarousel,
          Button  
        },
        data() {
            return {
                title: "Фитнес тур в Барселону",
                images: [this.getImgUrl('event-info1'), this.getImgUrl('event-info2')],
                description: "Фитнес тур в <b>Барселону</b> в июне!<br>" +
                    "Приглашаем Вас объединить прекрасное и полезное в фитнес-туре в Барселону со 2 по 11 июня!<br><br>" +
                    "Барселона один из самых красивых городов не только Каталонии, но и Испании. Каждое утро и в течении" +
                    " дня можно видеть множество людей занимающихся спортом: бег, ходьба, велосипед и многое другое, " +
                    "присоединяйтесь с поездке и станьте частью любителей спорта в Барселоне!",
                buttonText: "Я хочу",
                buttonWidth: 200 
            }
        },
        methods: {
            getImgUrl(imagePath) {
                var images = require.context('../assets/events', false, /\.jpg$/);
                return images('./' + imagePath + ".jpg");
            }
        }
    }
</script>

<style scoped>

    #event-info {
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
        margin-bottom: 20px;
    }
    
    #description {
        text-align: left;
        line-height: 1.5;
        font-size: 1.1rem;
    }
    
</style>