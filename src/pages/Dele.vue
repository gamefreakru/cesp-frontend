<template>
    <div class="dele-page-container">
        <div class="dele-page-header">
            <img class="dele-page-image-left" src="../assets/dele/dele-left.svg" alt="">
            <img class="dele-page-image-left-tablet" src="../assets/dele/dele-left-tablet.svg" alt="">
            <img class="dele-page-image-right" src="../assets/dele/dele-right.svg" alt="">
            <img class="dele-page-image-right-tablet" src="../assets/dele/dele-right-tablet.svg" alt="">
            <span class="dele-page-title">
                Подготовка к DELE
                <TextBabel class="dele-page-text-babel-wrapper" text="DELE"/>
            </span>
        </div>
        <div class="dele-page-body">
            <div class="dele-page-text-block dele-page-text-block-wrapper">
                В центре VAMOS проходит подготовка к сдаче экзамена на получение сертификата DELE в Москве.
                Наши ученики успешно проходят это сложное испытание благодаря качественно выстроенной программе.
                При подготовке используются учебники, разработанные по европейским стандартам.
                Вы можете выбрать курсы или заниматься индивидуально с репетитором.
                В VAMOS подготовку к DELE проходят как взрослые, так и школьники.
            </div>
            <span class="dele-page-teachers-header">
                Преподают <span style="color: var(--tomato)">носители языка</span>
            </span>
            <div class="dele-page-teachers-card-container">
                <TeacherCard class="dele-page-teacher-card-wrapper" v-for="(teacher, index) in teachers"
                             :key="index"
                             :image="teacher.photo"
                             :name="teacher.name"
                             :city="teacher.city"
                             type="small"
                />
                <TeacherCard class="dele-page-teacher-card-wrapper-tablet" v-for="(teacher, index) in teachersTablet"
                             :key="index + '-tablet'"
                             :image="teacher.photo"
                             :name="teacher.name"
                             :city="teacher.city"
                             type="small"
                />
                <TeacherCard class="dele-page-teacher-card-wrapper-phone" v-for="(teacher, index) in teachersPhone"
                             :key="index + '-phone'"
                             :image="teacher.photo"
                             :name="teacher.name"
                             :city="teacher.city"
                             type="small"
                />
            </div>
            <LinkButton class="dele-page-link-button-wrapper" title="Все преподаватели" link="/teachers"/>
            <span class="dele-page-text-block-header">Когда нужен DELE?</span>
            <div class="dele-page-text-block">
                <b>DELE</b> - сертификат, который подтверждает уровень знания испанского и признаётся во всём мире.
                Для его получения необходимо пройти международный экзамен. Экзамен на получение dele – полезный опыт.
                Он дает точное представление ученику о его уровне испанского. 
                Требуется для поступления в колледжи и университеты Испании. 
                Помогает получить престижную работу, где нужен испанский.
                Также dele необходим для получения испанского гражданства.
            </div>
            <div class="dele-page-text-block">
                DELE не имеет срока давности. Вы проходите экзамен один раз.
                Если результат в зависимости от ваших целей вас удовлетворяет, то вы больше не возвращаетесь к нему.
                Если же продолжите изучать язык и вам захочется снова зафиксировать свой уровень,
                вы можете сдать dele еще раз. Сдается экзамен в два этапа за два дня.
            </div>
            <div class="dele-page-information-block-сontainer">
                <span class="dele-page-information-block-title">
                    Экзамен проверяет следующие навыки:
                </span>
                <div class="dele-page-information-block-item-container">
                    <div class="dele-page-information-block-item">
                        <img class="dele-page-information-block-item-image" src="../assets/dele/item.svg" alt="">
                        <span class="dele-page-information-block-item-text">чтения,</span>
                    </div>
                    <div class="dele-page-information-block-item">
                        <img class="dele-page-information-block-item-image" src="../assets/dele/item.svg" alt="">
                        <span class="dele-page-information-block-item-text">грамматики,</span>
                    </div>
                    <div class="dele-page-information-block-item">
                        <img class="dele-page-information-block-item-image" src="../assets/dele/item.svg" alt="">
                        <span class="dele-page-information-block-item-text">аудирования,</span>
                    </div>
                    <div class="dele-page-information-block-item">
                        <img class="dele-page-information-block-item-image" src="../assets/dele/item.svg" alt="">
                        <span class="dele-page-information-block-item-text">разговорной речи,</span>
                    </div>
                </div>
            </div>
            <span class="dele-page-text-block-header">Уровни DELE</span>
            <div class="dele-page-level-container">
                <img class="dele-page-level-image" src="../assets/dele/a-level.svg" alt="">
                <div class="dele-page-level-information-container">
                    <div class="dele-page-level-information">
                        <span class="dele-page-level-information-level">А1 — </span>
                        <span class="dele-page-level-information-description">
                            ученик может говорить на простые темы, понимает базовые структуры испанского;
                        </span>
                    </div>
                    <div class="dele-page-level-information">
                        <span class="dele-page-level-information-level">А2 — </span>
                        <span class="dele-page-level-information-description">
                            ученик понимает и употребляет фразы из повседневной речи. Может рассказать о себе, 
                            своих увлечениях, сориентироваться в магазине, кафе, аэропорту;
                        </span>
                    </div>
                </div>
            </div>
            <div class="dele-page-schedule-section-levels-header">
                <span style="width: 12rem;" class="dele-page-schedule-section-level-column-title">Уровень</span>
                <span style="width: 16rem;" class="dele-page-schedule-section-level-column-title">Преподаватель</span>
                <span style="width: 16rem;" class="dele-page-schedule-section-level-column-title">Время занятий</span>
                <span style="width: 10rem;" class="dele-page-schedule-section-level-column-title">Дата начала</span>
                <span style="width: 20rem;" class="dele-page-schedule-section-level-column-title">Продолжительность</span>
                <span class="dele-page-schedule-section-level-column-title">Цена</span>
            </div>
            <div class="dele-page-schedule-sections-levels-container">
                <ScheduleSectionLevel class="dele-page-schedule-section-level-wrapper" v-for="(schedule, index) in scheduleA"
                                      :class="{ 'dele-page-schedule-section-levels-wrapper-border': 
                                      index!==scheduleA.length - 1 }"
                                      :key="index"
                                      :duration="schedule.duration"
                                      :title="schedule.level"
                                      :language-section-level-items="schedule.scheduleItems"
                />
            </div>
            <div class="dele-page-level-container">
                <img class="dele-page-level-image" src="../assets/dele/b-level.svg" alt="">
                <div class="dele-page-level-information-container">
                    <div class="dele-page-level-information">
                        <span class="dele-page-level-information-level">B1 — </span>
                        <span class="dele-page-level-information-description">
                            на этом уровне подтверждается понимание несложных текстов, 
                            умение поддержать разговор на повседневные темы, а также написать небольшой простой текст;
                        </span>
                    </div>
                    <div class="dele-page-level-information">
                        <span class="dele-page-level-information-level">B2 — </span>
                        <span class="dele-page-level-information-description">
                           это владение навыками беглой беседы, умение точно формулировать мысли письменно, 
                            обоснованно высказываться на разные темы, хорошо понимать аутентичную речь;
                        </span>
                    </div>
                </div>
            </div>
            <div v-if="scheduleB" class="dele-page-schedule-section-levels-header">
                <span style="width: 12rem;" class="dele-page-schedule-section-level-column-title">Уровень</span>
                <span style="width: 16rem;" class="dele-page-schedule-section-level-column-title">Преподаватель</span>
                <span style="width: 16rem;" class="dele-page-schedule-section-level-column-title">Время занятий</span>
                <span style="width: 10rem;" class="dele-page-schedule-section-level-column-title">Дата начала</span>
                <span style="width: 20rem;" class="dele-page-schedule-section-level-column-title">Продолжительность</span>
                <span class="dele-page-schedule-section-level-column-title">Цена</span>
            </div>
            <div class="dele-page-schedule-sections-levels-container">
                <ScheduleSectionLevel class="dele-page-schedule-section-level-wrapper" v-for="(schedule, index) in scheduleB"
                                      :class="{ 'dele-page-schedule-section-levels-wrapper-border': 
                                      index!==scheduleB.length - 1 }"
                                      :key="index"
                                      :duration="schedule.duration"
                                      :title="schedule.level"
                                      :language-section-level-items="schedule.scheduleItems"
                />
            </div>
            <div class="dele-page-level-container">
                <img class="dele-page-level-image" src="../assets/dele/c-level.svg" alt="">
                <div class="dele-page-level-information-container">
                    <div class="dele-page-level-information">
                        <span class="dele-page-level-information-level">C1 — </span>
                        <span class="dele-page-level-information-description">
                            знание языка на высоком уровне. Сюда входит понимание больших сложных текстов, 
                            умение вести разговор на любую тему, а также уверенный навык письменной речи
                            с использованием сложных грамматических конструкций;
                        </span>
                    </div>
                    <div class="dele-page-level-information">
                        <span class="dele-page-level-information-level">C2 — </span>
                        <span class="dele-page-level-information-description">
                            знание языка, идентичное носителю. На этом уровне необходимо продемонстрировать
                            умение тщательно выражать свои мысли по сложным предметам разговора, употреблять
                            в письменной речи трудные обороты, 100% понимать аутентичную речь.
                        </span>
                    </div>
                </div>
            </div>
            <div v-if="scheduleC.length >= 1" class="dele-page-schedule-section-levels-header">
                <span style="width: 12rem;" class="dele-page-schedule-section-level-column-title">Уровень</span>
                <span style="width: 16rem;" class="dele-page-schedule-section-level-column-title">Преподаватель</span>
                <span style="width: 16rem;" class="dele-page-schedule-section-level-column-title">Время занятий</span>
                <span style="width: 10rem;" class="dele-page-schedule-section-level-column-title">Дата начала</span>
                <span style="width: 20rem;" class="dele-page-schedule-section-level-column-title">Продолжительность</span>
                <span class="dele-page-schedule-section-level-column-title">Цена</span>
            </div>
            <div class="dele-page-schedule-sections-levels-container">
                <ScheduleSectionLevel class="dele-page-schedule-section-level-wrapper" v-for="(schedule, index) in scheduleC"
                                      :class="{ 'dele-page-schedule-section-levels-wrapper-border': 
                                      index!==scheduleC.length - 1 }"
                                      :key="index"
                                      :duration="schedule.duration"
                                      :title="schedule.level"
                                      :language-section-level-items="schedule.scheduleItems"
                />
            </div>
            <div class="dele-page-text-block">
                В Центре испанского языка VAMOS проходит подготовка по всем уровням DELE.
                Наиболее популярен у студентов В2. Этот уровень языка – обязательное условие
                для обучения в колледжах иуниверситетах Испании, а также для получения квалифицированной должности.
            </div>
            <SignupForm class="dele-page-signup-form-wrapper"/>
            <SignupFormModal @hideModal="hideModal('signup-form-modal')"/>
            <SignupFormModalTablet @hideModal="hideModal('signup-form-modal-tablet')"/>
            <SignupFormModalPhone @hideModal="hideModal('signup-form-modal-phone')"/>
        </div>
    </div>
</template>

<script>

    import TextBabel from "../components/TextBabel";
    import SignupForm from "../components/SignupForm";
    import LinkButton from "../components/LinkButton";
    import TeacherCard from "../components/TeacherCard";
    import ScheduleSectionLevel from "../components/ScheduleSectionLevel";
    import SignupFormModal from "../components/SignupFormModal";
    import SignupFormModalTablet from "../components/SignupFormModalTablet";
    import SignupFormModalPhone from "../components/SignupFormModalPhone";
    import Service from "../service"

    export default {
        components: {
            TextBabel,
            SignupForm,
            LinkButton,
            TeacherCard,
            ScheduleSectionLevel,
            SignupFormModal,
            SignupFormModalTablet,
            SignupFormModalPhone
        },
        data() {
            return {
                teachers: {},
                teachersTablet: {},
                teachersPhone: {},
                scheduleA: {},
                scheduleB: {},
                scheduleC: {}
            }
        },
        mounted() {
            Service.get("teachers?count=6", (status, data) => {
                this.teachers = data;
                this.teachersTablet = data.slice(0, 4);
                this.teachersPhone = data.slice(0, 1);
            });
            Service.get("schedule/levels?levelNames=A1&levelNames=A1.1&levelNames=A1.2&levelNames=A2.1&levelNames=A2.2",
                (status, data) => {
                    this.scheduleA = data;
                });
            Service.get("schedule/levels?levelNames=B1.1&levelNames=B1.2&levelNames=B2.1&levelNames=B2.2&levelNames=B2.3",
                (status, data) => {
                    this.scheduleB = data;
                });
            Service.get("schedule/levels?levelNames=C1&levelNames=C1.1&levelNames=C1.2&levelNames=C2.1&levelNames=C2.2",
                (status, data) => {
                    this.scheduleC = data;
                });
        },
        methods: {
            hideModal(name) {
                this.$modal.hide(name)
            }
        }
    }
</script>

<style scoped>

    .dele-page-header {
        height: 35rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--background-color-white);
    }
    
    .dele-page-image-left {
        position: absolute; 
        bottom: 0; 
        left: 3rem;   
    }
    
    .dele-page-image-left-tablet {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 25%;
        display: none;
    }
    
    .dele-page-image-right {
        position: absolute; 
        bottom: 0; 
        right: 6rem;   
    }
    
    .dele-page-image-right-tablet {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20%;
        display: none;
    }

    .dele-page-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 4rem;
        margin-top: 25rem;
        width: 50rem;
        position: relative;
    }

    .dele-page-text-babel-wrapper {
        position: absolute;
        top: -4rem;
        left: 45rem;
    }

    .dele-page-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dele-page-text-block {
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        text-align: left;
        line-height: 1.5;
        width: 84rem;
        margin-top: 2rem;
    }
    
    .dele-page-text-block-wrapper {
        margin-top: 6rem;
    }

    .dele-page-teachers-header {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 2.4rem;
        margin-top: 6rem;
    }

    .dele-page-teachers-card-container {
        display: flex;
        align-items: center;
        margin-top: 3rem;
    }

    .dele-page-teacher-card-wrapper {
        margin: 0 4rem;
    }
    
    .dele-page-teacher-card-wrapper-tablet {
        margin: 0 3.5rem;
        display: none;
    }
    
    .dele-page-teacher-card-wrapper-phone {
        display: none;
    }

    .dele-page-link-button-wrapper {
        margin-top: 3rem;
    }

    .dele-page-text-block-header {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 3rem;
        margin-top: 6rem;
    }

    .dele-page-information-block-сontainer {
        width: 124rem;
        height: 17.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("../assets/common/block-background.png");
        border-radius: 1.2rem;
        margin-top: 3rem;
        box-sizing: border-box;
    }

    .dele-page-information-block-title {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.8rem;
        margin-top: 3rem;
    }

    .dele-page-information-block-item-container {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 1rem;
        justify-items: start;
        margin-top: 2rem;
    }

    .dele-page-information-block-item {
        display: flex;
        align-items: center;
    }

    .dele-page-information-block-item-image {
        width: 2.4rem;
        height: 2.4rem;
    }

    .dele-page-information-block-item-text {
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        margin-left: 1rem;
    }

    .dele-page-level-container {
        display: flex;
        align-items: center;
        width: 84rem;
        margin-top: 3rem;
    }

    .dele-page-level-image {
        width: 15rem;
        height: 15rem;
        min-width: 15rem;
        min-height: 15rem;
    }

    .dele-page-level-information-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 3rem;
    }

    .dele-page-level-information {
        display: flex;
        margin: 0.6rem 0;
    }

    .dele-page-level-information-level {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 2.4rem;
        min-width: 7rem;
    }

    .dele-page-level-information-description {
        font-family: GothamPro, sans-serif;
        font-size: 1.6rem;
        text-align: left;
        line-height: 1.5;
        margin-top: 0.6rem;
    }

    .dele-page-schedule-section-levels-header {
        width: 124rem;
        height: 5rem;
        display: flex;
        align-items: center;
        background-color: var(--light-text);
        border-top-left-radius: 1.2rem;
        border-top-right-radius: 1.2rem;
        margin-top: 3rem;
        border-bottom: 0.4rem solid #ccc0a9;
        box-sizing: border-box;
    }

    .dele-page-schedule-section-level-column-title {
        font-family: GothamPro-Bold, sans-serif;
        text-transform: uppercase;
        text-align: left;
        font-size: 1.2rem;
        margin-left: 4rem;
        margin-top: 0.5rem;
    }

    .dele-page-schedule-sections-levels-container {
        width: 124rem;
        margin-bottom: 6rem;
        padding: 0 4rem;
        box-sizing: border-box;
        box-shadow: 0 0.4rem 1.6rem 0 rgba(41, 41, 41, 0.15);
        border-bottom-left-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
    }

    .dele-page-schedule-section-levels-wrapper-border {
        border-bottom: 0.4rem solid #e5e5e5;
    }

    .dele-page-signup-form-wrapper {
        margin: 10rem 0;
    }

    @media screen and (max-width: 1280px) {

        .dele-page-header {
            height: 20rem;
        }
        
        .dele-page-image-left {
            display: none;
        }
        
        .dele-page-image-left-tablet {
            display: block;
        }
        
        .dele-page-image-right {
            display: none;
        }
        
        .dele-page-image-right-tablet {
            display: block;
        }
        
        .dele-page-title {
            margin-top: 13rem;
            font-size: 3rem;
        }
        
        .dele-page-text-babel-wrapper {
            top: -3.5rem;
            left: 39rem;
        }
        
        .dele-page-text-block {
            width: calc(100% - 17rem);
        }
        
        .dele-page-text-block-wrapper {
            margin-top: 5rem;
        }
        
        .dele-page-teachers-header {
            margin-top: 3.5rem;
        }
        
        .dele-page-teacher-card-wrapper {
            display: none;
        }
        
        .dele-page-teacher-card-wrapper-tablet {
            display: block;
        }
        
        .dele-page-text-block-header {
            margin-bottom: 3rem;
        }
        
        .dele-page-information-block-сontainer {
            width: calc(100% - 9rem);
        }
        
        .dele-page-level-container {
            width: calc(100% - 9rem);
            margin-top: 0;
        }
        
        .dele-page-schedule-section-levels-header {
            display: none;
        }
        
        .dele-page-schedule-sections-levels-container {
            margin-top: 3rem;
            width: calc(100% - 9rem);
            border-radius: 0.8rem;
        }
        
        .dele-page-schedule-section-level-wrapper {
            margin-top: 2.5rem;
        }
        
        .dele-page-signup-form-wrapper {
            margin-top: 6rem;
        }
        
    }

    @media screen and (max-width: 760px) {

        .dele-page-header {
            height: 23rem;
        }
        
        .dele-page-image-left-tablet {
            display: none;
        }
        
        .dele-page-image-right-tablet {
            display: none;
        }
        
        .dele-page-title {
            font-size: 1.8rem;
            margin-top: 18rem;
        }
        
        .dele-page-text-babel-wrapper {
            left: 33rem;
        }
        
        .dele-page-text-block {
            width: calc(100% - 4rem);
            font-size: 1.2rem;
            margin-top: 1rem;
        }
        
        .dele-page-teachers-header {
            font-size: 1.8rem;
        }
        
        .dele-page-teachers-card-container {
            margin-top: 2.5rem;
        }
        
        .dele-page-teacher-card-wrapper-tablet {
            display: none;
        }

        .dele-page-teacher-card-wrapper-phone {
            display: block;
        }
        
        .dele-page-text-block-header {
            font-size: 1.8rem;
            margin-top: 4rem;
            margin-bottom: 1rem;
        }
        
        .dele-page-information-block-сontainer {
            width: calc(100% - 4rem);
            padding: 0 2rem;
            height: 23rem;
        }

        .dele-page-information-block-item-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;
            margin-top: 1rem;
        }
        
        .dele-page-information-block-item {
            margin: 0.6rem 0;
        }
        
        .dele-page-information-block-title {
            font-size: 1.4rem;
            text-align: left;
        }
        
        .dele-page-information-block-item-text {
            font-size: 1.2rem;
            text-align: left;
        }
        
        .dele-page-level-container {
            flex-direction: column;
            width: calc(100% - 4rem);
        }
        
        .dele-page-level-information-container {
            margin-left: 0;
        }

        .dele-page-level-image {
            width: 8rem;
            height: 8rem;
            min-width: 8rem;
            min-height: 8rem;
        }
        
        .dele-page-level-information-level {
            font-family: GothamPro-Medium, sans-serif;
            font-size: 1.6rem;
        }
        
        .dele-page-level-information-description {
            font-size: 1.2rem;
            margin-top: 0;
        }
        
        .dele-page-schedule-sections-levels-container {
            width: calc(100% - 2rem);
            margin-bottom: 4rem;
            padding: 0 2rem;
        }
        
        .dele-page-signup-form-wrapper {
            margin: 4rem 0;
        }
    }

</style>