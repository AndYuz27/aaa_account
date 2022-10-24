<template>
    <div v-if="type === 'login'">
        <h3>Войти</h3>
        <input type="text" placeholder="ваше имя">
            <input type="email" placeholder="ваш e-mail">
            <input type="password" placeholder="ваш пароль">
                   <hr>
        <router-link to="/signup">Зарегистрироваться</router-link>
        <hr>
        <router-link to="/change-pwd">Восстановить пароль</router-link>
    </div>
    <div v-else-if="type === 'signup'">
        <h3>Зарегистрироваться</h3>
        <form action="" method="post">
            <input type="text" placeholder="ваше имя">
            <input type="email" placeholder="ваш e-mail">
            <input type="password" placeholder="ваш пароль">
            <input type="password" placeholder="повтори пароль">
        </form>
        <hr>
        <router-link to="/auth">Войти</router-link>
    </div>
    <div v-else>
        <h3>Восстановить пароль</h3>
        <input type="email" placeholder="ваш e-mail">
        <hr>
        <router-link to="/auth">На страницу входа</router-link>
    </div>
</template>

<script>
export default {
    name: "auth-block",
    props: ["type"]
}
</script>

<style scoped>
</style>