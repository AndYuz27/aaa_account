<template>
    <div class="cont-auth">
    <div class="auth" v-if="type === 'login'">
        <h3 style="margin-top: 0; padding: 15px;">Войти</h3>
        <form @submit="authUser">
            <input type="email" placeholder="Ваш электронный адрес" required name="email" v-model="authEmail">
            <br>
            <input type="password" placeholder="Ваш пароль" required name="password" v-model="authPwd">
            <br>
            <button class="btn_auth" type="submit">Войти</button>
        </form>
        <hr>
        <router-link to="/signup">Зарегистрироваться</router-link>
        <hr>
        <router-link to="/change-pwd">Восстановить пароль</router-link>
    </div>
    <div class="auth" v-else-if="type === 'signup'">
        <h3>Зарегистрироваться</h3>
        <form @submit="regUser">
            <input type="text" placeholder="Ваше имя" name="name" v-model="regName">
            <input type="email" placeholder="Ваш электронный адрес" required name="email" v-model="regEmail">
            <input type="password" placeholder="Ваш пароль" required name="password" v-model="regPwd">
            <input type="password" placeholder="Повторите пароль" required v-model="repeatPwd" :class="repeatPwd !== '' && !checkPwd ? 'wrong' : 'success'" @input="check">
            <button class="btn_auth" type="submit">Зарегистрироваться</button>
        </form>
        <hr>
        <router-link to="/auth">Войти</router-link>
    </div>
    <div v-else>
        <h3>Восстановить пароль</h3>
        ...
        <hr>
        <router-link to="/auth">На страницу входа</router-link>
    </div>
    </div>
</template>

<script>
export default {
    name: "auth-block",
    props: ["type"],
    data() {
        return {
            regName: "",
            regPwd: "",
            repeatPwd: "",
            regEmail: "",
            checkPwd: false,
            authEmail: "",
            authPwd: "",
        }
    },
    methods: {
        authUser: async function(e) {
            e.preventDefault();
            let body = {
                email: this.authEmail,
                password: this.authPwd
            }
            const data = await fetch("https://srv.petiteweb.dev/api/profile/users/auth", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application.json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json());
            if (data.message === "ok") {
                e.target.reset();
                localStorage.setItem("user", JSON.stringify(data.data));
                
                this.$router.replace("/profile");
                this.$forceUpdate();

            } else {
                alert(data.message);
                alert("произошла ошибка с API, пожалуйста обратитесь к Лексе - surnacheva@ithub.ru")
            }
        },
        regUser: async function(e) {
            e.preventDefault();
            // console.log(this.checkPwd);
            let body = {
                name: this.regName,
                email: this.regEmail,
                password: this.regPwd
            }
            if (this.checkPwd) {
                const data = await fetch("https://srv.petiteweb.dev/api/profile/users/add", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application.json"
                    },
                    body: JSON.stringify(body)
                }).then(res => res.json());
                if (data.message === "ok") {
                    e.target.reset();
                    this.$forceUpdate();
                    localStorage.setItem("user", JSON.stringify(data.data));
                    window.location.reload("/profile")

                    // this.$router.replace("/profile");
                } else {
                    alert(data.message);
                alert("произошла ошибка с API, пожалуйста обратитесь к Лексе - surnacheva@ithub.ru")
                }
                // console.log(data);
            } else {
                alert("Пароли не совпадают!")
            }
        },
        check: function() {
            this.checkPwd = this.regPwd === this.repeatPwd
        }
    }
}
</script>

<style scoped>
    .wrong {
        border-color: red;
    }
    .success {
        border-color: green;
    }
    input{
        width: 250px;
        height: 32px;
        margin-bottom: 10px;
        border-radius: 8px;
        font-size: 14pt;
        transition: 0.5s;
    }
    input:hover{
        box-shadow: 2px 3px 5px #000;

    }
    input[value]{
        font-size: 14pt;
    }
    .auth{
        width: 350px;
        height: 100%;
        padding: 25px;
        background-color: lightgray;
        border-radius: 15px;
        box-shadow: 2px 3px 5px #000;
    }
    a{
        cursor: pointer;
    }
    button{
        cursor: pointer;
    }
    .btn_auth{
        padding: 5px 15px 5px 15px;
        border-radius: 8px;
        background-color: lime;
        box-shadow: 2px 3px 5px #000;
        margin: 5px;
        transition: 0.5s;

    }
    .btn_auth:hover{
        box-shadow: 2px 3px 5px #00a;
        background-color: lightgreen;

    }
    .btn_auth:active{
        box-shadow: 2px 3px 5px #00a;
        background-color: green;
    }
    .cont-auth{
        padding-top: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
</style>