<template>
    <div id="partner-info">
        <div id="header">
            <img id="circle-image" :alt="partner.name" :src="partner.photo"/>
            <div id="header-container">
                <span id="title">{{ partner.name }}</span>
                <span id="link">Сайт: <a target="_blank" rel="noopener noreferrer" :href="partner.url">{{ partner.name }}</a></span>      
            </div>
        </div>
        <span class="label" v-if="partner.phone" style="margin-top: 3rem;"><b>Телефон: </b> {{ partner.phone }}</span>
        <span class="label" v-if="partner.address"><b>Адрес: </b> {{ partner.address }}</span>
        <div id="description" v-html="partner.info"></div>
        <ImageCarousel :images="partner.photos" :images-per-page=3 :image-width=350 :image-height=250 />
    </div>
</template>

<script>
    
    import ImageCarousel from '../components/ImageCarousel'
    import Service from '../service'
    
    export default {
        components: {
            ImageCarousel
        },
        data() {
            return {
                partner: {},
            }
        },
        mounted() {
            Service.get("partners/" + this.$route.params.name, (status, data) => {
                this.partner = data;
            })
        }
    }
</script>

<style scoped>

    #partner-info {
        display: flex;
        flex-direction: column;
        margin: 0 5.5rem 6rem;
        padding: 30px 40px;
        background-color: #ffffffb3;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0 1px 6px #0000001a;
        font-size: 1.6rem;
    }

    #header {
        display: flex;
        margin-top: 25rem;
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
        max-width: 23rem;
        max-height: 15rem;
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
    
    .label {
        margin: 1rem 0;
        align-self: flex-start;
    }
    
    #description {
        text-align: left;
        line-height: 1.5;
        margin: 3rem 0;
    }

</style>