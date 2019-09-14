<template>
    <router-link class="blog-card-container" :style="style" :to="link">
        <div class="blog-card-text-container">
            <span class="blog-card-title">{{title}}</span>
            <span class="blog-card-description">{{description}}</span>
        </div>
        <div class="blog-card-position-container">
            <div class="blog-card-delimiter"></div>
            <div class="blog-card-bottom-flex-container">
                <span class="blog-card-link-title">Читать дальше</span>
                <img class="blog-card-arrow-image" src="../assets/common/arrow.svg" alt="arrow"/>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            image: String,
            title: String,
            description: String,
            link: String
        },
        computed: {
            style() {
                return 'background-image: url(' + this.image + ')';
            }
        }
    }
</script>

<style scoped>

    .blog-card-container {
        width: 38.6rem;
        height: 56rem;
        background-color: white;
        border-radius: 1.2rem;
        background-repeat: no-repeat;
        background-size: 100% 35%;
        text-decoration: none;
        text-align: left;
        color: black;
        position: relative;
        border: solid 1px rgba(0, 0, 0, 0.1);
    }
    
    .blog-card-text-container {
        display: flex;
        flex-direction: column;
        max-width: 38.6rem;
        padding: 0 4rem;
        position: absolute;
        top: 21rem;
    }

    .blog-card-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 2.4rem;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
    }

    .blog-card-description {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        line-height: 1.71;
    }

    .blog-card-position-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 2.5rem;
        left: 0; right: 0;
        margin-left: auto;
        margin-right: auto;
        padding: 0 4rem;
    }

    .blog-card-delimiter {
        height: 0.1rem;
        background-color: rgba(0, 0, 0, 0.1);
        margin-bottom: 1.25rem;
        width: 31rem;
    }

    .blog-card-bottom-flex-container {
        display: flex;
        margin-top: 1.25rem;
        align-items: flex-start;
        margin-right: auto;
    }

    .blog-card-link-title {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.4rem;
        text-transform: uppercase;
        margin-right: 1rem;
    }
    
</style>