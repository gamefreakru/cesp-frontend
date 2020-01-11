<template>
    <div class="events-container">
        <span id="title">Мероприятия в Centro Vamos</span>
        <Delimiter/>
        <div id="events-grid">
            <Event v-for="(event, index) in events"
                   v-bind:key="index"
                   v-bind:title="event.name"
                   v-bind:link="event.sysName" 
                   v-bind:image="event.photo"
                   v-bind:description="event.shortInfo" />
        </div>
    </div>
</template>

<script>
    
    import Delimiter from "../components/Delimiter"
    import Event from "../components/Event"
    
    import Service from "../service"
    
    export default {
        components: {
            Delimiter,
            Event
        },
        data() {
            return {
                events: {}
            }
        },
        mounted() {
            Service.get("events", (status, data) => {
                this.events = data;
            })
        }
    }
</script>

<style scoped>

    .events-container {
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
        font-size: 3rem;
        font-weight: bold;
        margin-top: 20rem;
    }
    
    #events-grid {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 5rem 3%;
        justify-items: center;
    }
    
</style>