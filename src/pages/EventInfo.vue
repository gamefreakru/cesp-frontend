<template>
    <div id="event-info">
        <span id="title" v-html="event.name"/>
        <ImageCarousel :images="event.photos" :images-per-page=2 :image-width=600 :image-height=400 style="margin: 20px 0"/>
        <div id="description" v-html="event.info"></div>
        <Button :text="buttonText" link="/contacts" onclick="ym(52043682, 'reachGoal', 'want'); return true;" :button-height=20 :button-width="buttonWidth" style="align-self: center; margin: 20px 0"/>
    </div>
</template>

<script>

    import ImageCarousel from "../components/ImageCarousel";
    import Button from "../components/Button";
    
    import Service from "../service";

    export default {
        components: {
          ImageCarousel,
          Button  
        },
        data() {
            return {
                event: {},
                buttonText: "Я хочу",
                buttonWidth: 200 
            }
        },
        mounted() {
            Service.get("events/" + this.$route.params.name, (status, data) => {
                this.event = data;
            })
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
        font-size: 1.6rem;
    }

    #title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem;
        margin-top: 15rem;
        
    }
    
    #description {
        text-align: left;
        line-height: 1.5;
    }
    
</style>