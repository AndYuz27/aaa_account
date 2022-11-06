<template>
    <div v-if="type === 'login'">
        <h3>Войти</h3>
        <form @submit="authUser">
            <input type="email" placeholder="Ваш электронный адрес" required name="email" v-model="authEmail">
            <input type="password" placeholder="Ваш пароль" required name="password" v-model="authPwd">
            <button type="submit">Войти</button>
        </form>
        <hr>
        <router-link to="/signup">Зарегистрироваться</router-link>
        <hr>
        <router-link to="/change-pwd">Восстановить пароль</router-link>
    </div>
    <div v-else-if="type === 'signup'">
        <h3>Зарегистрироваться</h3>
        <form @submit="regUser">
            <input type="text" placeholder="Ваше имя" name="name" v-model="regName">
            <input type="email" placeholder="Ваш электронный адрес" required name="email" v-model="regEmail">
            <input type="password" placeholder="Ваш пароль" required name="password" v-model="regPwd">
            <input type="password" placeholder="Повторите пароль" required v-model="repeatPwd" :class="repeatPwd !== '' && !checkPwd ? 'wrong' : 'success'" @input="check">
            <button type="submit">Зарегистрироваться</button>
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
            const data = await fetch("https://dream-design-server.herokuapp.com/api/users/auth", {
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
            } else {
                alert(data.message);
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
                const data = await fetch("https://dream-design-server.herokuapp.com/api/users/add", {
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
                } else {
                    alert(data.message);
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
</style>