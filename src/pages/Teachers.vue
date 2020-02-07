<template>
    <div class="teachers-page-container">
        <div class="teachers-page-header-container">
            <img class="teachers-page-header-image-left" src="../assets/teachers/teachers-left.svg" alt="">
            <img class="teachers-page-header-image-right" src="../assets/teachers/teachers-right.svg"  alt="">
            <img class="teachers-page-header-image-left-tablet" src="../assets/teachers/teachers-left-tablet.svg"  alt="">
            <img class="teachers-page-header-image-right-tablet" src="../assets/teachers/teachers-right-tablet.svg"  alt="">
            <span class="teachers-page-title">
                Наши <span style="color: var(--tomato);">преподаватели</span>
                <TextBabel class="teachers-page-text-babel-wrapper" text="Profesores"/>
            </span>
        </div>
        <div class="teachers-page-card-container">
            <TeacherModal class="teachers-page-teacher-modal"
                          width="1240"
                          height="630"
                          @hideModal="hideModal"
                          :image="modalData.largePhoto"
                          :name="modalData.name"
                          :city="modalData.city"
                          :languages="modalData.languages"
                          :description="modalData.info"/>
            <TeacherModal class="teachers-page-teacher-modal-tablet"
                          width="600"
                          height="760"
                          @hideModal="hideModal"
                          :image="modalData.largePhoto"
                          :name="modalData.name"
                          :city="modalData.city"
                          :languages="modalData.languages"
                          :description="modalData.info"/>
            <TeacherModal class="teachers-page-teacher-modal-phone"
                          width="300"
                          height="480"
                          @hideModal="hideModal"
                          :image="modalData.largePhoto"
                          :name="modalData.name"
                          :city="modalData.city"
                          :languages="modalData.languages"
                          :description="modalData.info"/>
            <TeacherCard class="teacher-page-card-wrapper" v-for="(teacher, index) in teachers"
                         v-on:click.native=showModal(teacher)
                         :key="index"
                         :image="teacher.photo"
                         :image-large="teacher.largePhoto"
                         :name="teacher.name"
                         :city="teacher.city"
                         :languages="teacher.languages"
                         :short-description="teacher.shortInfo"
                         :description="teacher.info"
                         type="normal"/>
        </div>
    </div>
</template>

<script>

    import TextBabel from "../components/TextBabel";
    import TeacherCard from "../components/TeacherCard";
    import TeacherModal from "../components/TeacherModal"
    import Service from "../service";
    
    export default {
        components: {
            TextBabel,
            TeacherCard,
            TeacherModal
        },
        filters: {
            trim(value, count) {
                return value.substring(0, count) + "...";
            }
        },
        methods: {
            showModal(teacher) {
                this.modalData = teacher;
                this.$modal.show('teacher-modal');
            },
            hideModal() {
                this.$modal.hide('teacher-modal');
            }
        },
        data() {
            return {
                teachers: {},
                modalData: {
                    largePhoto: "",
                    name: "",
                    city: "",
                    languages: [],
                    info: ""
                }
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
    
    .teachers-page-header-container {
        height: 35rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--background-color-white);
    }
    
    .teachers-page-header-image-left {
        position: absolute; 
        bottom: 0; 
        left: 0;
    }
    
    .teachers-page-header-image-right {
        position: absolute; 
        bottom: 0; 
        right: 0;
    }
    
    .teachers-page-header-image-left-tablet {
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    
    .teachers-page-header-image-right-tablet {
        display: none;
        position: absolute;
        bottom: 0;
        right: 0;
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
    
    .teachers-page-teacher-modal {
        z-index: 10;
    }
    
    .teachers-page-teacher-modal-tablet {
        display: none;
        z-index: 10;
    }
    
    .teachers-page-teacher-modal-phone {
        display: none;
        z-index: 10;
    }
    
    .teachers-page-card-container {
        display: flex;
        margin: 4rem 0 0 0;
        flex-wrap: wrap;
        justify-content: center;
    }

    .teacher-page-card-wrapper {
        margin: 3.5rem 2rem;
        cursor: pointer;
    }

    @media screen and (max-width: 1280px) {
        
        .teachers-page-header-container {
            height: 20rem;
        }
        
        .teachers-page-header-image-left {
            display: none;
        }
        
        .teachers-page-header-image-right {
            display: none;
        }
        
        .teachers-page-header-image-left-tablet {
            display: block;
        }
        
        .teachers-page-header-image-right-tablet {
            display: block;
        }
        
        .teachers-page-title {
            font-size: 3rem;
            width: 40rem;
            margin-top: 12rem;
        }
        
        .teachers-page-text-babel-wrapper {
            top: -3.5rem;
            left: 35.5rem;
        }
        
        .teachers-page-teacher-modal {
            display: none;
        }

        .teachers-page-teacher-modal-tablet {
            display: block;
        }
    }

    @media screen and (max-width: 760px) {

        .teachers-page-header-container {
            height: 23.5rem;
        }
        
        .teachers-page-header-image-left-tablet {
            display: none;
        }
        
        .teachers-page-header-image-right-tablet {
            display: none;
        }
        
        .teachers-page-title {
            font-size: 1.8rem;
            width: 25rem;
            margin-top: 18rem;
        }
        
        .teachers-page-text-babel-wrapper {
            left: 20rem;
        }
        
        .teachers-page-card-container {
            margin: 4rem 0;
        }
        
        .teacher-page-card-wrapper {
            margin: 2rem;
        }
        
        .teachers-page-teacher-modal-tablet {
            display: none;
        }
        
        .teachers-page-teacher-modal-phone {
            display: block;
        }
    }

</style>