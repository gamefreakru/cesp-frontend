<template>
    <div class="teacher-card-container" v-on:click="showModal">
        <img v-if="image" class="teacher-card-image" :src="image" :alt="name">
        <img v-else class="teacher-card-image" src="../assets/teachers/teacher-default.svg" :alt="name">
        <span class="teacher-card-title">{{name}}</span>
        <span class="teacher-card-city">{{city}}</span>
        <div class="teacher-card-languages-container">
            <span class="teacher-card-language" v-for="(language, index) in languages" :class="language.color">
                {{language.name}}
            </span>
        </div>
        <div class="teacher-card-description">{{shortDescription}}</div>
        <TeacherPopup v-show="isModalVisible" 
                      @close="closeModal" 
                      v-body-scroll-lock:reserve-scroll-bar-gap="isModalVisible"
                      v-bind:image="imageLarge"
                      v-bind:name="name"
                      v-bind:city="city"
                      v-bind:languages="languages"
                      v-bind:description="description"
        />
    </div>
</template>

<script>

    import TeacherPopup from "../components/TeacherPopup";

    export default {
        components: {
            TeacherPopup
        },
        props: {
            image: String,
            imageLarge: String,
            name: String,
            city: String,
            languages: Array,
            shortDescription: String,
            description: String
        },
        data() {
            return {
                isModalVisible: false,
            }
        },
        methods: {
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        }
    }
</script>

<style scoped>

    .teacher-card-container {
        display: flex;
        flex-direction: column;
        width: 28rem;
        height: 50rem;
        align-items: center;
        cursor: pointer;
    }
    
    .teacher-card-image {
        width: 18rem;
        height: 22.5rem;
    }
    
    .teacher-card-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 2.4rem;
        margin-top: 3rem;
    }
    
    .teacher-card-city {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.4rem;
        margin-top: 1rem;
    }
    
    .teacher-card-languages-container {
        display: flex;
        margin-top: 2.5rem;
    }
    
    .teacher-card-language {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1rem;
        text-transform: uppercase;
        padding: 0.8rem 1.2rem;
        margin: 0 0.6rem;
    }
    
    .yellow {
        color: #ffbc00;
        border: solid 0.1rem #ffbc00;
        border-radius: 0.4rem;
    }
    
    .red {
        color: var(--tomato);
        border: solid 0.1rem var(--tomato);
        border-radius: 0.4rem;
    }
    
    .teacher-card-description {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        line-height: 1.71;
        margin-top: 2.5rem;
    }
    
</style>