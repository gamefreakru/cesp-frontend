<template>
    <modal name="teacher-modal" 
            :classes="['teacher-modal-container']"
            @before-open="beforeOpen"
            @before-close="beforeClose"
            :width=this.width
            :height=this.height>
        <div class="teacher-modal" role="dialog">
            <img v-if="image" class="teacher-modal-image" :src="image" :alt="name">
            <img v-else class="teacher-modal-image" src="../assets/teachers/teacher-default.svg" :alt="name">
            <div class="teacher-modal-info-container">
                <span class="teacher-modal-info-name">{{name}}</span>
                <span class="teacher-modal-info-city">{{city}}</span>
                <div class="teacher-modal-info-languages-container">
                    <div class="teacher-modal-info-language" 
                          v-for="(language, index) in languages" 
                          :class="language.color" 
                          :key="index">
                        {{language.name}}
                    </div>
                </div>
                <div class="teacher-modal-info-descritption">
                    {{description}}
                </div>
            </div>
            <img class="teacher-modal-close-image" @click="hideModal" src="../assets/common/cross.svg" alt="close">
        </div>
        <div class="teacher-modal-tablet" role="dialog">
            <div class="teacher-modal-tablet-header-container">
                <img v-if="image" class="teacher-modal-image" :src="image" :alt="name">
                <img v-else class="teacher-modal-image" src="../assets/teachers/teacher-default.svg" :alt="name">
                <div class="teacher-modal-info-container">
                    <span class="teacher-modal-info-name">{{name}}</span>
                    <span class="teacher-modal-info-city">{{city}}</span>
                    <div class="teacher-modal-info-languages-container">
                        <div class="teacher-modal-info-language"
                              v-for="(language, index) in languages"
                              :class="language.color"
                              :key="index">
                            {{language.name}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="teacher-modal-info-descritption">{{description}}</div>
            <img class="teacher-modal-close-image" @click="hideModal" src="../assets/common/cross.svg" alt="close">
        </div>
    </modal>
</template>

<script>
    export default {
        props: {
            image: String,
            name: String,
            city: String,
            languages: Array,
            description: String,
            width: {
                type: String,
                default: "1240"
            },
            height: {
                type: String,
                default: "630"
            }
        },
        methods : {
            hideModal() {
                this.$emit('hideModal')
            },
            beforeOpen() {
                document.documentElement.style.overflow = 'hidden'
            },
            beforeClose() {
                document.documentElement.style.overflow = 'auto'
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
    
    .teacher-modal-tablet {
        display: none;
        width: 60rem;
        height: 76rem;
        padding: 5rem 6rem 1rem;
        background-color: white;
        align-items: flex-start;
        box-sizing: border-box;
        position: relative;
        box-shadow: 0 4px 16px 0 rgba(41, 41, 41, 0.15);
        border-radius: 0.8rem;
    }
    
    .teacher-modal-image {
        width: 35rem;
        height: 43.5rem;
        min-width: 35rem;
        min-height: 43.5rem;
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

    @media screen and (max-width: 1280px) {
        
        .teacher-modal {
            display: none;
        }
        
        .teacher-modal-tablet {
            display: flex;
            flex-direction: column;
        }
        
        .teacher-modal-image {
            width: 18rem;
            height: 22.4rem;
            min-width: 18rem;
            min-height: 22.4rem;
        }
        
        .teacher-modal-info-container {
            margin-left: 3rem;
        }
        
        .teacher-modal-tablet-header-container {
            display: flex;
            align-items: flex-end;
        }
        
        .teacher-modal-info-descritption {
            margin-top: 4rem;
        }
        
    }

    @media screen and (max-width: 760px) {
        
        .teacher-modal-tablet {
            width: 30rem;
            height: 48rem;
            padding: 3rem 2rem;
        }
        
        .teacher-modal-image {
            width: 10.8rem;
            height: 13.5rem;
            min-width: 10.8rem;
            min-height: 13.5rem;
        }
        
        .teacher-modal-info-container {
            margin-left: 2rem;
        }
        
        .teacher-modal-info-name {
            font-size: 1.6rem;
        }

        .teacher-modal-info-city {
            font-size: 1.2rem;
            margin-top: 1rem;
        }
        
        .teacher-modal-info-languages-container {
            margin-top: 1rem;
            flex-direction: column;
        }

        .teacher-modal-info-language {
            margin: 0.4rem 0;
        }
        
        .teacher-modal-info-language:first-child {
            margin-top: 0;
        }
        
        .teacher-modal-info-language:last-child {
            margin-bottom: 0;
        }
        
        .teacher-modal-info-descritption {
            font-size: 1.2rem;
            line-height: 1.5;
            margin-top: 1rem;
        }
        
    }

</style>