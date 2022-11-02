<template>
    <div class="profile">
        <div class="profile__contacts">
            <profile-picture></profile-picture>
            <h2>{{name}}</h2>
            <div class="profile__item">
                <profile-contacts v-for="(c, i) in contacts" :key="i" :type="c.type" :data="c.value"></profile-contacts>
                
                <p-stat v-for="(c, i) in cnt_l" :key="i" :type="c.type" :data="c.value"></p-stat>

            </div>
        </div>
        <div class="profile__about">
            <h2>Графический дизайнер</h2>
<div class="cards">
    <div class="image"><img src="https://medialeaks.ru/wp-content/uploads/2020/08/annotacziya-2020-08-04-161956.jpg" alt="" width="128"></div>
    <div class="image"><img src="https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/352a_6788528703342920710.jpg" alt="" width="128"></div>
    <div class="image"><img src="https://static.wikia.nocookie.net/mlp/images/a/a4/Map_of_Equestria_2015.jpg" alt="" width="128"></div>
</div>
<div class="posts">
    <h2 v-for="(post, index) in posts" :key="post">{{index}} {{post}}</h2>
</div>
        </div>
    </div>
</template>

<script>
import Picture from "@/components/Profile/Picture";
import Contacts from "@/components/Profile/Contacts";
import Stats from "@/components/Profile/Stats";
import Card from "@/components/Profile/Card.vue"

export default {
    name: "usr-profile",
    components: {
        "profile-picture": Picture,
        "profile-contacts": Contacts,
        "p-stat": Stats,
        "pcard": Card
    },
    data() {
        return {
            name: localStorage.getItem("name"),
            // contacts: ["+7(123)456-78-90", "lexysnake@gmail.com", "ds:@lekso4ka", "tg:@lekso4ka"]
            contacts: [
                {type: "phone", value: "+7(123)133-73-33"},
                {type: "email", value: "petya_juke@gmail.com" /*localStorage.getItem("email")*/},
                {type: "tg", value: "@petyorka_juke"},
                {type: "vk", value: "https://vk.com/455465664"},
                // {type: "like", value: "10"},
                // {type: "sub", value: "1000"},
                // {type: "share", value: "5"},
            ],
            cnt_l: [
                {type: "like", value: "15"},
                {type: "sub", value: "200"},
                {type: "shares", value: "5"},
            ],
                posts: [
                'Мне дали сертификат дизайнера',
                'Мне кажется, что дизайн сайта очень изменился по сравнению с дизайном сайта 2012 года',
                'ничего страшного, это был сон про мою молодость в 2012 году',

            ]
        }
    }
    }

</script>

<style scoped>
    .profile {
        display: grid;
        grid-template-columns: 30% 1fr;
        width: 1200px;
        margin: auto;
    }
    .profile__contacts {
        background: #222;
        color: #fff;
        padding: 30px;
        
    }
    .profile__about {
        border: #222 solid 1px;
        padding: 30px;
    }
    .profile__item {
        display: flex;
        flex-direction: column;
    }
    .p-stat{
        display: flex;
flex-direction: row;
margin: 20px;
    }
    .cards{
        display: flex;
        flex-direction: row;
        padding: 15px;
        border: 2px solid;
    }
</style>