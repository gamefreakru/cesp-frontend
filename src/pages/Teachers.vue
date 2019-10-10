<template>
    <div class="teachers-container">
        <SectionHeader image="teachers"
                       title="Profesores"
                       description="Наши преподаватели"/>
        <div id="teachers-grid">
            <Teacher v-for="(teacher, index) in teachers"
                     v-bind:key="index"
                     v-bind:image="teacher.photo"
                     v-bind:name="teacher.name"
                     v-bind:position="teacher.position"
                     v-bind:description="teacher.info" />
        </div>
    </div>
</template>

<script>
    
    import SectionHeader from "../components/SectionHeader"
    import Teacher from "../components/Teacher"
    import Service from "../service";

    export default {
        components: {
            SectionHeader,
            Teacher
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

    .teachers-container {
        padding: 60px 55px;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.6rem;
        margin-top: 10rem;
    }

    #teachers-grid {
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 50px 35px;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    
</style>