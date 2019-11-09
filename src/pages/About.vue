<template>
    <div class="about-container">
        <div id="title">Курсы испанского языка в Centro VAMOS</div>
        <div id="description">
            <img alt="О школе" src="../assets/about/about.gif" style="position: relative; float: right; margin-left: 10px;"/>
            <div>
                Считаете, что выучить язык – это долго и скучно? Мы думаем, что это не так.
                Вы уже знаете, что значит "Hola!", пробовали хамон и паэлью и хотите узнать больше.
                Или вы совсем не знакомы с Испанией, и это ваш первый шаг. Мы поможем!
                От вас требуется желание и посещаемость. От нас - много полезной информации и приятная атмосфера.
            </div>
            <ul>
                <li>Мы специализируемся только на испанском и каталанском языках, а значит, знаем о них много и поможем
                    узнать вам.
                </li>
                <li>Наши занятия мы стараемся сделать нескучными и максимально полезными. Кроме лексики и грамматических
                    материалов,
                    мы делаем акцент на разговорной практике. На уроках, а часто и на переменах, максимально много
                    говорим на испанском языке.
                </li>
                <li>На занятиях мы активно используем видео- и аудио-материалы, устраиваем скайп-конференции со школами
                    в Испании.
                    Все это помогает развивать понимание устной испанской речи.
                </li>
                <li>Программа каждого курса доступна для всех. Вы в любой момент легко можете проверить, предоставлен ли
                    вами материал курса в полном объеме.
                    Прямо на сайте можно скачать программу курса "Испанский для начинающих" и познакомиться с
                    Общеевропейской системой изучения иностранных
                    языков, которой мы следуем при подготовке занятий.
                </li>
                <li>Мы работаем с группами из 6-8 человек, поэтому можем уделить внимание каждому. В небольших группах
                    преподаватель
                    и студенты быстрее находят общий язык, а занятия проходят динамичнее и эффективнее.
                </li>
                <li>С нами работают только носители языка, увлеченные своей профессией, с большим опытом
                    преподавания испанского и каталанского для иностранцев.
                </li>
                <li>Мы уделяем большое внимание не только занятиям, но и переменам. Здесь всегда можно выпить чай или
                    кофе и поболтать с друзьями.
                </li>
                <li>Мы организуем мероприятия, посвященные знакомству с культурой Испании и Латинской Америки</li>
                <li>Если вы хотите поехать на курсы в Испанию, то у нас вы сможете посмотреть информацию о языковых
                    школах Испании.
                </li>
            </ul>
        </div>
        <Button text="типы курсов" link="/courses" :button-height=20 style="align-self: center; margin-bottom: 50px;"/>
        <ImageCarousel v-bind:images="[getCarouselImgUrl('slide1'), getCarouselImgUrl('slide2'), getCarouselImgUrl('slide3'), 
                getCarouselImgUrl('slide4'), getCarouselImgUrl('slide5'), getCarouselImgUrl('slide6'), getCarouselImgUrl('slide7'),
                getCarouselImgUrl('slide8'), getCarouselImgUrl('slide9'), getCarouselImgUrl('slide10'), getCarouselImgUrl('slide11'),
                getCarouselImgUrl('slide12'), getCarouselImgUrl('slide13'), getCarouselImgUrl('slide14'), getCarouselImgUrl('slide15'), 
                getCarouselImgUrl('slide16'), getCarouselImgUrl('slide17'), getCarouselImgUrl('slide18'), getCarouselImgUrl('slide19'), 
                getCarouselImgUrl('slide20'), getCarouselImgUrl('slide21')]"/>
        <div id="sub-description">
            <img alt="О школе" src="../assets/about/about-teacher.jpg" style="position: relative; float: left; margin-right: 20px;"/>
            <b>Руже Вила Орриольс</b>
            <br>
            <br>
            Основатель центра VAMOS.
            Образование - Universidad de Barcelona, классическая филология. Преподавать испанский язык начал в Греции в
            2003 году.
            Четыре года проработал в Институте Сервантеса в Сербии. С 2008 по 2011 преподавал испанский и каталонский
            языки
            для взрослых и испанский для детей в Московском Институте Сервантеса. В 2011 открыл собственные курсы
            испанского языка.
            <br>
            <br>
            <span class="quote">"Учиться, общаясь в дружеской атмосфере" — девиз нашего центра.</span>
            <br>
            <br>
            До того, как оказаться в Москве, я успел поработать в качестве преподавателя Института Сервантеса в разных
            странах.
            Испанский язык очень популярен в современном мире, однако мотивы у студентов разные. Греки, например, учат
            испанский,
            чтобы получить высокооплачиваемую должность в какой-либо правительственной структуре, сербы – чтобы
            эмигрировать в Европу,
            немцы, наоборот, никуда уезжать из своей страны не собираются, и испанский язык им нужен просто в целях
            самосовершенствования.
            Большинство же российских студентов собирается использовать испанский в первую очередь для путешествий.
            Поэтому наша программа построена так, чтобы студенты быстро научились говорить по-испански и ориентироваться
            в типичных ситуациях.
            Я работаю в Москве уже четыре года. В университете Барселоны я изучал латинский и греческий,
            но мне всегда был интересен русский язык и русская культура.
        </div>
        <Button text="Преподаватели" link="/teachers" :button-height=20 style="align-self: center; margin-bottom: 20px;"/>
    </div>
</template>

<script>

    import ImageCarousel from '../components/ImageCarousel'
    import Button from '../components/Button'

    export default {
        components: {
            ImageCarousel,
            Button
        },
        methods: {
            getCarouselImgUrl(imagePath) {
                var images = require.context('../assets/carousel', false, /\.jpg$/);
                return images('./' + imagePath + ".jpg");
            }
        }
    }
</script>

<style scoped>

    .about-container {
        display: flex;
        flex-direction: column;
        margin: 0 55px 60px;
        padding: 20px;
        background-color: #ffffffb3;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0 1px 6px #0000001a;
        text-align: left;
        font-size: 1.6rem;
        line-height: 1.3;
        font-family: 'Open Sans', sans-serif;
    }

    #title {
        font-size: 3rem;
        margin: 15rem 0 1.5rem 0;
    }
    
    #sub-description {
        margin: 30px 0;
    }

    ul {
        list-style-image: url("../assets/about/check.png");
    }

    li {
        margin: 20px 0;
    }
    
    .quote {
        font-size: 1.5rem;
        color: #465F99;
    }

</style>