<template>
    
    <div id="program">
        
        <span id="title">Методика и подробное описание уровней преподавания языка</span>
        <div id="description">
            В нашем центре Centro Espanol Vamos процесс преподавания испанского и каталонского языков
            базируется на основе хорошо себя зарекомендовавшей коммуникативной методики,
            разработанной согласно европейским стандартам.
            <br><br>

            Эта методика широко применяется во всех языках и пользуется успехом у студентов со всего мира.
            В соответствии с международными стандартами принятыми Европейским Советом для утверждения
            общей шкалы оценки преподавания и владения любого иностранного языка, Общеевропейским Советом
            по компетенциям владения иностранным языком была определена общая градация,
            которая имеет шесть базовых уровней: A1, A2, B1, B2, C1 и C2.
        </div>
        
        <span id="level">Европейская система уровней владения иностранным языком:</span>
        
        <router-link to="/">Уровень A1</router-link>
        <router-link to="/">Уровень A2.1</router-link>
        <router-link to="/">Уровень A2.2</router-link>
        <router-link to="/">Уровень B1.1</router-link>
        <router-link to="/">Уровень B1.2</router-link>
        <router-link to="/">Уровень B2.1</router-link>
        <router-link to="/">Уровень B2.2</router-link>
        <router-link to="/">Уровень B2.3</router-link>
        <router-link to="/">Уровень C1.1</router-link>
        <router-link to="/">Уровень C1.2</router-link>
        <router-link to="/">Уровень C2.1</router-link>
        <router-link to="/">Уровень C2.2</router-link>
        <router-link to="/">Уровень C1+</router-link>
        <router-link to="/">Уровень C2+</router-link>
        
    </div>
    
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

    #program {
        display: flex;
        flex-direction: column;
        margin: 0 55px 60px;
        padding: 20px;
        background-color: #ffffffb3;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0 1px 6px #0000001a;
        text-align: left;
        font-size: 1.1rem;
        line-height: 1.3;
    }
    
    #title {
        font-size: 1.5rem;
        margin: 20px 0;
    }
    
    #level {
        font-size: 1.3rem;
        font-weight: bold;
        margin: 20px 0;
    }
    
    a {
        color: #465F99;
        margin: 5px 0;
    }
    
    a:hover {
        color: #7897E1;
    }
    
</style>