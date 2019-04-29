<template>
    
    <div id="events">
        
        <span id="title">Мероприятия в Centro Vamos</span>
        
        <Delimiter/>
        
        <div id="events-grid">
            
            <Event :image="getImgUrl('event')" title="Semana Santa" link="#" date="22-25 апреля" 
                   description=" Неформальная встреча с представителями школы испанского языка LACUNZA,
                    находящейся в невероятном курортном городе Сан-Себастьян, который также называют 
                    Северной Жемчужиной из-за его богатой культуры, многовековой истории, живописной 
                    природы и популярности среди туристов со всего мира" 
            />

            <Event :image="getImgUrl('event')" title="Semana Santa" link="#" date="22-25 апреля"
                   description=" Неформальная встреча с представителями школы испанского языка LACUNZA,
                    находящейся в невероятном курортном городе Сан-Себастьян, который также называют 
                    Северной Жемчужиной из-за его богатой культуры, многовековой истории, живописной 
                    природы и популярности среди туристов со всего мира"
            />

            <Event :image="getImgUrl('event')" title="Semana Santa" link="#" date="22-25 апреля"
                   description=" Неформальная встреча с представителями школы испанского языка LACUNZA,
                    находящейся в невероятном курортном городе Сан-Себастьян, который также называют 
                    Северной Жемчужиной из-за его богатой культуры, многовековой истории, живописной 
                    природы и популярности среди туристов со всего мира"
            />

            <Event :image="getImgUrl('event')" title="Semana Santa" link="#" date="22-25 апреля"
                   description=" Неформальная встреча с представителями школы испанского языка LACUNZA,
                    находящейся в невероятном курортном городе Сан-Себастьян, который также называют 
                    Северной Жемчужиной из-за его богатой культуры, многовековой истории, живописной 
                    природы и популярности среди туристов со всего мира"
            />
            
        </div>
        
    </div>
    
</template>

<script>
    
    import Delimiter from "../Delimiter"
    import Event from "../Event"
    
    export default {
        components: {
            Delimiter,
            Event
        },
        methods: {
            getImgUrl(imagePath) {
                var images = require.context('../../assets/events', false, /\.jpg$/);
                return images('./' + imagePath + ".jpg");
            }
        }
    }
</script>

<style scoped>

    #events {
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
        margin-top: 30px;
    }
    
    #events-grid {
        display: inline-grid;
        grid-template-columns: fit-content(100%) auto auto auto;
        grid-gap: 30px;
        justify-items: center;
    }
    
</style>