<template>
    <div class="profile">
        <h2>{{dd}}</h2>
        <h5>{{tgaaa}}</h5>
        <img src="https://www.artranked.com/images/74/74530e4354338f1ff8419be8c0843478.jpg" alt="paintbrush" width="500">


    </div>
</template>

<script>
import Picture from "@/components/Profile/Picture";
import Contacts from "@/components/Profile/Contacts";
import Stats from "@/components/Profile/Stats";
import Card from "@/components/Card"

export default {
    name: "m-page",
    components: {
        "profile-picture": Picture,
        "profile-contacts": Contacts,
        "p-stat": Stats,
        "pcard": Card
    },
    data() {
        return {
            dd: "Welcome to the site!",
            tgaaa: "@andrlemon",
            // contacts: ["+7(123)456-78-90", "lexysnake@gmail.com", "ds:@lekso4ka", "tg:@lekso4ka"]
            contacts: [
                {type: "phone", value: "+7(123)133-73-33"},
                {type: "email", value: "petya_juke@gmail.com"},
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
                {type: "post1", value: "Мне дали сертификат дизайнера"},
                {type: "post2", value: "Мне кажется, что дизайн сайта очень изменился по сравнению с дизайном сайта 2012 года"},
                {type: "post3", value: "ничего страшного, это был сон про мою молодость в 2012 году"},

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