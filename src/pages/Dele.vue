<template>
    <div class="dele-page-container">
        <div class="dele-page-header">
            <img style="position: absolute; bottom:0; left: 3rem;" src="../assets/dele/dele-left.svg" alt="">
            <img style="position: absolute; bottom:0; right: 6rem;" src="../assets/dele/dele-right.svg" alt="">
            <span class="dele-page-title">
                Подготовка к DELE
                <TextBabel class="dele-page-text-babel-wrapper" text="DELE"/>
            </span>
        </div>
        <div class="dele-page-body">
            <div class="dele-page-text-block" style="margin-top: 6rem;">
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
                             v-bind:key="index"
                             v-bind:image="teacher.photo"
                             v-bind:name="teacher.name"
                             v-bind:city="teacher.city"
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
                <span style="width: 18rem;" class="dele-page-schedule-section-level-column-title">Уровень</span>
                <span style="width: 20rem;" class="dele-page-schedule-section-level-column-title">Преподаватель</span>
                <span style="width: 20rem;" class="dele-page-schedule-section-level-column-title">Время занятий</span>
                <span style="width: 20rem;" class="dele-page-schedule-section-level-column-title">Дата начала</span>
                <span class="dele-page-schedule-section-level-column-title">Цена</span>
            </div>
            <div class="dele-page-schedule-sections-levels-container">
                <ScheduleSectionLevel v-for="(schedule, index) in scheduleA"
                                      v-bind:class="{ 'dele-page-schedule-section-levels-wrapper-border': 
                                      index!==scheduleA.length - 1 }"
                                      v-bind:key="index"
                                      v-bind:title="schedule.level"
                                      v-bind:language-section-level-items="schedule.scheduleItems"
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
                <span style="width: 18rem;" class="dele-page-schedule-section-level-column-title">Уровень</span>
                <span style="width: 20rem;" class="dele-page-schedule-section-level-column-title">Преподаватель</span>
                <span style="width: 20rem;" class="dele-page-schedule-section-level-column-title">Время занятий</span>
                <span style="width: 20rem;" class="dele-page-schedule-section-level-column-title">Дата начала</span>
                <span class="dele-page-schedule-section-level-column-title">Цена</span>
            </div>
            <div class="dele-page-schedule-sections-levels-container">
                <ScheduleSectionLevel v-for="(schedule, index) in scheduleB"
                                      v-bind:class="{ 'dele-page-schedule-section-levels-wrapper-border': 
                                      index!==scheduleB.length - 1 }"
                                      v-bind:key="index"
                                      v-bind:title="schedule.level"
                                      v-bind:language-section-level-items="schedule.scheduleItems"
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
                <span style="width: 18rem;" class="dele-page-schedule-section-level-column-title">Уровень</span>
                <span style="width: 20rem;" class="dele-page-schedule-section-level-column-title">Преподаватель</span>
                <span style="width: 20rem;" class="dele-page-schedule-section-level-column-title">Время занятий</span>
                <span style="width: 20rem;" class="dele-page-schedule-section-level-column-title">Дата начала</span>
                <span class="dele-page-schedule-section-level-column-title">Цена</span>
            </div>
            <div class="dele-page-schedule-sections-levels-container">
                <ScheduleSectionLevel v-for="(schedule, index) in scheduleC"
                                      v-bind:class="{ 'dele-page-schedule-section-levels-wrapper-border': 
                                      index!==scheduleC.length - 1 }"
                                      v-bind:key="index"
                                      v-bind:title="schedule.level"
                                      v-bind:language-section-level-items="schedule.scheduleItems"
                />
            </div>
            <div class="dele-page-text-block">
                В Центре испанского языка VAMOS проходит подготовка по всем уровням DELE.
                Наиболее популярен у студентов В2. Этот уровень языка – обязательное условие
                для обучения в колледжах иуниверситетах Испании, а также для получения квалифицированной должности.
            </div>
            <SignupForm type="signup" class="dele-page-signup-form-wrapper"/>
        </div>
    </div>
</template>

<script>

    import TextBabel from "../components/TextBabel";
    import SignupForm from "../components/SignupForm";
    import LinkButton from "../components/LinkButton";
    import TeacherCard from "../components/TeacherCard";
    import ScheduleSectionLevel from "../components/ScheduleSectionLevel";
    import Service from "../service"

    export default {
        components: {
            TextBabel,
            SignupForm,
            LinkButton,
            TeacherCard,
            ScheduleSectionLevel
        },
        data() {
            return {
                teachers: {},
                scheduleA: {},
                scheduleB: {},
                scheduleC: {}
            }
        },
        mounted() {
            Service.get("teachers?count=6", (status, data) => {
                this.teachers = data;
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
        -webkit-border-bottom-right-radius: 0.8rem;
    }

    .dele-page-schedule-section-levels-wrapper-border {
        border-bottom: 0.4rem solid #e5e5e5;
    }

    .dele-page-signup-form-wrapper {
        margin: 10rem 0;
    }

</style>