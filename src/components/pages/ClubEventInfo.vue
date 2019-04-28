<template>
    <div id="club-event">

        <div id="club-event-section">

            <span id="title">Разговорный клуб "{{ title }}"</span>
            <br>
            <div id="description">
                <b>Разговорный клуб {{ date }}!</b>
                <br>
                <span>
                    <b>{{ date }}</b>
                    в Centro VAMOS на нашем еженедельном разговорном клубе мы обсудим тему
                    <b>"{{ title }}"</b>
                </span>
                <br>
                <b>Специально для вас мы заранее подготовили вопросы, которые мы обсудим на нашем разговорном клубе:</b>
            </div>

            <ol>
                <li v-for="(question, index) in questions" v-bind:key="index">{{ question }}</li>
            </ol>

            <b>Ведущий: <a :href="leaderLink">{{ leaderName }}</a></b>
            <span>Ждём вас! Начало: 19.00</span>

            <Button text="Записаться онлайн" link="#" :button-height="20" :button-width=300 style="align-self: center"/>

        </div>

    </div>
</template>

<script>

    import Button from '../Button'

    export default {
        components: {
            Button
        },
        data() {
            return {
                // name: this.route.params.name,
                title: "La igualdad de genero",
                date: "19.04.2019",
                questions: ['¿Qué significa la iguaidad para ti?',
                    '¿Quién tiene más derechos ahora: hombres o mujeres?',
                    '¿Por qué el hombre tiene que pagar por la mujer en la cita?',
                    '¿Por qué los hombres cobran más que las mujeres?',
                    '¿Por qué los hombres se dedican solo a trabajar y las mujeres a trabajar, cocinar, limpiar y cuidar a los niños?',
                    '¿Por qué existen los trabajos exclusivamente para los hombres?',
                    '¿Por qué las mujeres ahora quieren independizarse tanto?',
                    '¿Cuáles son las carecteristicas principales de la desigualidad en la sociedad?',
                    '¿En tu casa hay desigualdad?',
                    '¿En que paises hay mucha desigualdad y en que otros no existe?'
                ],
                leaderName: "Rafael",
                leaderLink: "#"
            }
        }
    }
</script>

<style scoped>

    #club-event {
        padding: 60px 55px;
        color: black;
    }

    #club-event-section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 1.1rem;
        line-height: 1.5;
        text-align: left;

    }

    #title {
        font-size: 1.5rem;
        font-weight: bold;
    }

    a {
        font-weight: bold;
        color: #465F99;
        text-decoration: none;
    }

    a:hover {
        color: black;
    }

</style>