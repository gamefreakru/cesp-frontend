<template>
    <div class="teachers-page-container">
        <div class="teachers-page-container-header">
            <img style="position: absolute; bottom:0; left: 0;" src="../assets/teachers/teachers-left.svg" alt="">
            <img style="position: absolute; bottom:0; right: 0;" src="../assets/teachers/teachers-right.svg"  alt="">
            <span class="teachers-page-title">
                Наши <span style="color: var(--tomato);">преподаватели</span>
                <TextBabel class="teachers-page-text-babel-wrapper" text="Profesores"/>
            </span>
        </div>
        <div class="teachers-page-card-container">
            <TeacherCard class="teacher-page-card-wrapper" v-for="(teacher, index) in teachers"
                         v-bind:key="index"
                         v-bind:image="teacher.photo"
                         v-bind:image-large="teacher.largePhoto"
                         v-bind:name="teacher.name"
                         v-bind:city="teacher.city"
                         v-bind:languages="teacher.languages"
                         v-bind:short-description="teacher.shortInfo"
                         v-bind:description="teacher.info"
            />
        </div>
    </div>
</template>

<script>

    import TextBabel from "../components/TextBabel";
    import TeacherCard from "../components/TeacherCard";
    import Service from "../service";
    
    export default {
        components: {
            TextBabel,
            TeacherCard
        },
        filters: {
            trim(value, count) {
                return value.substring(0, count) + "...";
            }
        },
        data() {
            return {
                teachers: {}
            }
        },
        mounted() {
            Service.get("teachers", (status, data) => {
                this.teachers = data;
            })
        }
    }    
    
</script>

<style scoped>
    
    .teachers-page-container {
        background-color: white;
    }
    
    .teachers-page-container-header {
        height: 35rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--background-color-white);
    }

    .teachers-page-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 4rem;
        margin-top: 25rem;
        width: 50rem;
        position: relative;
    }
    
    .teachers-page-text-babel-wrapper {
        position: absolute;
        top: -4rem;
        left: 46rem;
    }
    
    .teachers-page-card-container {
        display: flex;
        margin: 4rem 0 0 0;
        flex-wrap: wrap;
        justify-content: center;
    }

    .teacher-page-card-wrapper {
        margin: 3.5rem 2rem;
    }

    .text-babel-teachers-wrapper {
        position: absolute;
        top: -4rem;
        left: 44rem;
        bottom: 0;
    }

</style>