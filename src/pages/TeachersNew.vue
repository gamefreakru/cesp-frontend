<template>
    <div class="teachers-container">
        <div class="teachers-container-header">
            <img style="position: absolute; bottom:0; left: 0;" src="../assets/teachers/teachers-left.svg" alt="">
            <img style="position: absolute; bottom:0; right: 0;" src="../assets/teachers/teachers-right.svg"  alt="">

            <span class="teachers-title">
                <span style="color: var(--tomato);">Наши</span>
                 преподаватели
                <TextBabel class="text-babel-teachers-wrapper" text="Profesores"/>
            </span>
        </div>
        <div class="teachers-card-container">
            <TeacherCard  v-on:click="showModal" class="teacher-card-wrapper" v-for="(teacher, index) in teachers"
                         v-bind:key="index"
                         v-bind:image="teacher.photo"
                         v-bind:title="teacher.name"
                         v-bind:description="teacher.info | trim(200)"/>
            <TeacherPopup v-show="isModalVisible" @close="closeModal" v-body-scroll-lock:reserve-scroll-bar-gap="isModalVisible">
                <div>какой то контент</div>
            </TeacherPopup>
        </div>
    </div>
</template>

<script>

    import TextBabel from "../components/TextBabel";
    import TeacherCard from "../components/TeacherCard";
    import TeacherPopup from "../components/TeacherPopup";
    import Service from "../service";


    export default {
        components: {
            TextBabel,
            TeacherCard,
            TeacherPopup
        },
        filters: {
            trim(value, count) {
                return value.substring(0, count) + "...";
            }
        },
        data() {
            return {
                teachers: {},
                isModalVisible: false
            }
        },
        mounted() {
            Service.get("teachers", (status, data) => {
                this.teachers = data;
            })
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
    .teachers-container {
        background-color: white;
    }
    
    .teachers-container-header {
        background-color: #fffae5;
        height: 40rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3) 55%);
    }

    .teachers-title {
        font-family: FedraSerifAPro, sans-serif;
        font-size: 4rem;
        margin-top: 25rem;
        max-width: 60rem;
        position: relative;
    }
    
    .teachers-container-body {
        height: 90rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .teachers-card-container {
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 5rem 3.5rem;
        margin-bottom: 20px;
        
      
        margin-top: 4rem;
    }

    .teacher-card-wrapper {
        margin: 0 2rem;
    }

    .text-babel-teachers-wrapper {
        position: absolute;
        top: -4rem;
        left: 44rem;
        bottom: 0;
    }

</style>