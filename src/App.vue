<!--
    TODO: Мы хотим создать сервис по поиску графических дизайнеров / художников
    Что должен делать сервис?
        Дизайнер регистрируется на сайте и заполняет свой профиль. - Что должно быть в профиле? (Портфолио)
            - кто я
            - мои работы (картинки / описание)
            - моя автобиография
            - мои навыки
        Пользователь хочет найти дизайнера - ищет по фильтрам, выбирает страницу дизайнера, смотрит портфолио, пишет в чат дизайнеру

    Надо:
        Найти похожие сайты оказания фриланс-услуг (по специализации художника)
        Найти положительные и отрицательные моменты во всех подобных сайтах
        Список этих моментов выложить в канале группы:
            Картинка (скриншот) + комментарий
        Можно искать как по реальным сайтам, так и по сервисам с дизайном

-->

<!--<template>-->
<!--    <h1>{{title}}</h1>-->
<!--    <div class="cards">-->
<!--        <my-card v-for="d in days" v-bind:text="d" v-bind:key="d"></my-card>-->
<!--    </div>-->
<!--</template>-->
<!--  -->


<template>
    <header>
        <h1>Design-core</h1>
        <button v-on:click="modalOpen" class="login">Sign In</button> 
    <router-link to="/">Home</router-link>
    <router-link to="/profile">Profile</router-link>
    </header>  

        <router-view></router-view>
    <div class="modal-wrapper" :style="{display: modalActivity ? 'flex' : 'none'}">
        
        <div class="modal">
            <form>
                <label>E-mail</label>
                <input type="email" name="email" id="inp_email">
                <br>
                <label>Пароль</label>
                <input type="password" name="pwd" id="inp_pwd">
                <br>
            </form>
            <div class="modal-close"><button v-on:click="modalClose">x</button></div>
        </div>
    </div>
</template>

<script>
    // import Card from "./components/Card";


    export default {
        name: "App",
        components: {
            // "my-card": Card,
            // "usr-profile": Profile,
            // "m-page": MainPage
        },
        data() {
            return {
                title: "Графика / здание",
                days: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ],
                router: [

                ],
                modalActivity: false
            }
        },
        methods: {
            modalOpen(){
                this.modalActivity = true;
            },
            modalClose(){
                this.modalActivity = false;
            }
        }
    }
</script>
<style>
body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
}
    h1 {
        color: green;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(4, 120px);
        gap: 20px;
    }
    .modal-wrapper{
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
        background-color: #0004;
    }
    .modal{
        background-color: #fff;
        padding: 70px;
        border-radius: 8px;
        position: relative;
    }
    .modal-close{
        position: absolute;
        top: 6px;
        right: 10px;
        line-height: 1;
        transform: rotate(45deg);
        cursor: pointer;;
    }
    header{
        padding-left: 32pt;
        padding-right: 32pt;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: aqua;
    }
    .login{
        background-color: azure;
        border: 0.5px solid;
        width: 96px;
        height: 32px;
        font-size: 16pt;
        border-radius: 8px;

    }
</style>