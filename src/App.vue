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



<!--
    TODO: Используя localStorage, переписать шапку так, чтобы при наличии пользователя не было кнопок входа, а при отсутствии пользователя не было ссылки на личный кабинет.
    TODO: На странице пользователя (можно в шапке), добавить кнопку "выйти" - очистить localStorage.
    TODO: Отображать в личном кабинете данные авторизованного пользователя
-->
<template>
    <header>
        <router-link class="logo"  to="/"><h1>Design-Core</h1></router-link>
       <nav>
    <!-- <router-link  to="/">Home</router-link> -->
    <router-link v-if="user" to="/profile"> Profile </router-link>   
    <router-link v-if="user" to="/users">Users</router-link>
    <router-link v-if="!user" to="/auth"> Auth </router-link>
    <button v-if="user" @click="logout">Log Out</button>
    </nav>
</header>
    <main-container @showPopup="modalOpen" :userData="userData"></main-container>
    <div class="modal-wrapper" :style="{display: modalActivity ? 'flex' : 'none'}">
<!--        <div class="modal">-->
<!--            ^_^-->
<!--            <div class="modal-close" @click="modalClose">+</div>-->
<!--        </div>-->
        <ModalForm @modalClose="modalClose"  @updateData="updateUserData"/>
    </div>
    <footer>
<h3>2022 AndYuz27</h3>
<nav>
    <a href="https://github.com/AndYuz27/">GitHub</a>
</nav>
    </footer>
</template>

<script>
    // import Card from "./components/Card/index.vue";
    import ModalForm from "@/components/ModalForm";
    import MainContainer from "@/components/Main";
    export default {
        name: "App",
        components: {
            MainContainer,
            ModalForm
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
                modalActivity: false,
                user: localStorage.getItem("user"),
                userData: {

                }
            }
        },
        methods: {
            modalOpen() {
                this.modalActivity = true;
            },
            modalClose() {
                this.modalActivity = false;
            },
            updateUserData(data) {
            this.userData = data;
            console.log("global user", this.userData);
            },
            logout(){
                localStorage.removeItem("user");
                localStorage.removeItem("name");
                this.$forceUpdate();

                this.$router.replace("/")

            }
            },
            created(){
                let user = localStorage.getItem("user");
                if(user){
                    this.userData = JSON.parse(user)
                }
        }
    }
</script>
<style>
body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
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
        background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(79,245,0,1) 0%, rgba(40,101,229,1) 49%, rgba(0,212,255,1) 100%);
    }
    footer{
        padding-left: 32pt;
        padding-right: 32pt;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(79,245,0,1) 0%, rgba(40,101,229,1) 49%, rgba(0,212,255,1) 100%);
    }
    .login{
        background-color: azure;
        border: 0.5px solid;
        width: 96px;
        height: 32px;
        font-size: 16pt;
        border-radius: 8px;


    }
    a{
        text-decoration: none;
        color: black;
        font-size: 18px;
    }
    button{

        text-decoration: none;
        color: black;
        font-size: 18px;
        background-color: transparent;
        border: none;
    
    }
    .logo{
        color: red;
        transition: 0.3s;
    }
    .logo:hover{
        color: darkred;
    }

</style>