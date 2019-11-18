<template>
    <div class="teacher-modal-container">
        <div class="teacher-modal" role="dialog">
            <img v-if="image" class="teacher-modal-image" :src="image" :alt="name">
            <img v-else class="teacher-modal-image" src="../assets/teachers/teacher-default.svg" :alt="name">
            <div class="teacher-modal-info-container">
                <span class="teacher-modal-info-name">{{name}}</span>
                <span class="teacher-modal-info-city">{{city}}</span>
                <div class="teacher-modal-info-languages-container">
                    <span class="teacher-modal-info-language" 
                          v-for="(language, index) in languages" 
                          :class="language.color" 
                          v-bind:key="index">
                        {{language.name}}
                    </span>
                </div>
                <div class="teacher-modal-info-descritption">
                    {{description}}
                </div>
            </div>
            <img class="teacher-modal-close-image" @click="close" src="../assets/common/cross.svg" alt="close">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
            name: String,
            city: String,
            languages: Array,
            description: String
        },
        methods : {
            close() {
                this.$emit("close");
            }
        }
    }
</script>

<style scoped>

    .teacher-modal-container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(41, 41, 41, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .teacher-modal {
        width: 124rem;
        height: 63rem;
        background-color: white;
        display: flex;
        align-items: flex-start;
        padding: 9rem 12rem;
        box-sizing: border-box;
        position: relative;
        box-shadow: 0 4px 16px 0 rgba(41, 41, 41, 0.15);
        border-radius: 0.8rem;
    }
    
    .teacher-modal-image {
        width: 35rem;
        height: 43.5rem;
    }
    
    .teacher-modal-info-container {
        display: flex;
        flex-direction: column;
        margin-left: 5rem;
        justify-content: flex-start;
    }
    
    .teacher-modal-info-name {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 4rem;
        text-align: left;
    }
    
    .teacher-modal-info-city {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.8rem;
        margin-top: 2rem;
        text-align: left;
    }

    .teacher-modal-info-languages-container {
        display: flex;
        margin-top: 2.5rem;
    }

    .teacher-modal-info-language {
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
    
    .teacher-modal-info-descritption {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        text-align: center;
        line-height: 1.71;
        margin-top: 2rem;
    }

    .teacher-modal-close-image {
        position: absolute;
        right: 2rem;
        top: 2rem;
        cursor:  pointer;
    }

</style>