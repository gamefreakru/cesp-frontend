<template>
    <div class="courses-container">
        <SectionHeader image="course"
                       title="Cursos"
                       description="Курсы испанского и каталонского в Москве"/>
        <Delimiter/>
        <SubMenu v-bind:items="[
        {
            name: 'Типы курсов',
            active: true,
            link: '/courses'
        },
        {
            name: 'Расписание',
            active: false,
            link: '/schedule'
        }]"/>
        <Delimiter/>
        <div id="courses-grid">
            <Course v-for="(course, index) in courses"
                    v-bind:key="index"
                    v-bind:title="course.name"
                    v-bind:description="course.description"
                    v-bind:image="course.photo"
                    v-bind:duration="course.durationInfo" 
                    v-bind:price-info="course.costInfo"
                    v-bind:discount="course.discountPercent | formatDiscountMessage"
                    v-bind:signup="true" />
        </div>
        <div id="courses-footer">
            <span id="footer-title">Курсы испанского в Москве — эффективные методики дают отличный результат</span>
            <div id="footer-description">
                <br>
                Стоит ли убеждать в том, что в наше время без знания одного-двух иностранных языков обойтись очень трудно?
                Современный мир каждому человеку предъявляет требование — быть полиглотом. И многие из нас стараются соответствовать
                этому требованию. Современные жители мегаполисов много путешествуют, ведут международный бизнес,
                читают книги на языке оригинала, покупают недвижимость заграницей. Поэтому языковые курсы в Москве не страдают 
                от отсутствия желающих овладеть грамматикой и разговорной речью европейских языков. 
                Испанский язык — один из самых востребованных.
                <br>
                <br>
                Испания за последние годы стала для россиян одной из самых интересных и привлекательных. 
                В эту страну многие едут отдыхать и учиться, строят там дачи, приобретают дома и квартиры, 
                а потому на курсы испанского сегодня записывается большое число желающих выучить язык. 
                Все они — люди разного возраста, социального положения и различных интересов. 
                Вернее, один общий интерес все-таки их объединяет довольно серьезно. Это испанский язык: курсы, общение, культура страны.
                <br>
                <br>
                Всем известно, что в компании единомышленников и под руководством профессионала изучение иностранного языка всегда проходит
                более интересно и эффективно. Многим удается заговорить на испанском языке уже через пару недель обучения.
                Это неудивительно: высококвалифицированные преподаватели, коммуникативные методики, новейшие учебники — 
                все это дает отличный результат. Вы просто начинаете говорить по-испански.
                <br>
                <br>
                Проблема одна — где найти этих единомышленников и хорошего педагога? Какие курсы испанского языка в 
                Москве действительно гарантируют качественное изучение языка в группе неравнодушных людей. 
                Выбирайте те курсы, где работают педагоги c опытом, владеющие современными методами преподавания 
                иностранных языков и изучавшие язык непосредственно в тех странах, где он является государственным. 
                Мы надеемся, что наши курсы испанского языка не только отвечают этим требованиям, 
                но и дают стимул и мотивацию к дальнейшему углублению и погружению в язык, ведь это процесс долгий, 
                который длится годами и, чтобы он действительно был успешным, уже в самом начале нужно применить 
                грамотные стимулирующие методики.
                <br>
                <br>
                Даже если работа идет в группах, преподаватели знают, как найти индивидуальный подход к каждому, 
                кто записался на наши курсы испанского в Москве. Кроме того, занятия организованы так, 
                чтобы участники могли обмениваться знаниями. Процесс обучения — познавательный, разноплановый, неутомительный.
                Готовитесь вы к сдаче экзамена по испанскому, собираетесь на отдых в Испании или язык вам понадобился 
                для продвижения по карьерной лестнице, мы постараемся помочь вам преобрести прочные и уверенные знания испанского языка.
            </div>
        </div>
    </div>
</template>

<script>

    import SectionHeader from '../components/SectionHeader.vue'
    import Course from '../components/Course.vue'
    import Delimiter from '../components/Delimiter'
    import SubMenu from '../components/SubMenu'
    import Service from "../service";

    export default {
        components: {
            SectionHeader,
            Course,
            Delimiter,
            SubMenu
        },
        filters: {
            formatDiscountMessage(value)
            {
                if(!value) return '';
                return "Скидка " + value.toString() + "%";
            }
        },
        data() {
            return {
                courses: {}
            }
        },
        mounted() {
            Service.get("courses", (status, data) => {
                this.courses = data;
            })
        }
    }
</script>

<style scoped>

    .courses-container {
        padding: 5rem 5.5rem;
        margin-top: 10rem;
        font-size: 1.6rem;
    }
    
    #courses-footer {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }

    #courses-grid {
        margin-top: 5rem;
        display: inline-grid;
        grid-template-columns: auto auto auto;
        grid-gap: 50px 35px;
    }
    
    #footer-title {
        font-size: 1.6rem;
        color: #888888;
        font-weight: bold;
        text-align: left;
    }
    
    #footer-description {
        font-size: 1.4rem;
        color: #888888;
        text-align: left;
    }

</style>