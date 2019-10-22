<template>
    <div id="container">
        <img :alt="title" :src="image"/>
        <span id="title">{{ title }}</span>
        <p class="description">{{ description }}</p>
        
        <p v-if="duration" class="description">
            <b>Продолжительность:</b>
            <br>
            {{ duration }}
        </p>
        <span v-if="discount" class="description">
            <b>{{ discount }}</b>
        </span>
        <span v-if="priceInfo" class="description">{{ priceInfo }}</span>
        
        <Button v-if="signup" text="записаться" style="align-self: flex-start" 
                link="/contacts" 
                :buttonWidth=160
                :buttonHeight=15 />
    </div>
</template>

<script>
    
    import Button from "./Button.vue"
    
    export default {
        props: {
            title: String,
            image: String,
            description: String,
            duration: String,
            discount: String,
            priceInfo: String,
            signup: Boolean
        },
        components: {
            Button
        }
    }
</script>

<style scoped>

 #container {
     display: flex;
     flex-direction: column;
     width: 37rem;
     height: auto;
     margin: 0 0 auto;
     font-size: 1.6rem;
 }
    
#container > img {
    width: 37rem;
    height: 17rem;
}
    
#title {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 1rem 0;
}
    
.description {
    line-height: 1.5;
    text-align: left;
    color: #312A1E;
}
    
</style>