<template>
    <div class="profile">
        <div class="profile__contacts">
            <profile-picture></profile-picture>
            <h2>{{name}}</h2>
            <div class="profile__item">
                <profile-contacts v-for="(c, i) in contacts" :key="i" :type="c.type" :data="c.value"></profile-contacts>
                <p-stat></p-stat>

            </div>
        </div>
        <div class="profile__about">
            <h2>Графический дизайнер</h2>
        </div>
    </div>
</template>

<script>
import Picture from "@/components/Profile/Picture";
import Contacts from "@/components/Profile/Contacts";
import Stats from "@/components/Profile/Stats";

export default {
    name: "usr-profile",
    components: {
        "profile-picture": Picture,
        "profile-contacts": Contacts,
        "p-stat": Stats
    },
    data() {
        return {
            name: "Петр Жуков",
            // contacts: ["+7(123)456-78-90", "lexysnake@gmail.com", "ds:@lekso4ka", "tg:@lekso4ka"]
            contacts: [
                {type: "phone", value: "+7(123)133-73-33"},
                {type: "email", value: "petya_juke@gmail.com"},
                {type: "tg", value: "@petyorka_juke"},
                {type: "vk", value: "https://vk.com/455465664"},
                // {type: "like", value: "10"},
                // {type: "sub", value: "1000"},
                // {type: "share", value: "5"},
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
</style>