<template>
    <div class="profile">
        <div class="profile__contacts">
            <profile-picture></profile-picture>
            <h2>{{userData.name || "Где имя!?"}}</h2>
            <div class="profile__item">
                <!-- <profile-contacts v-for="(c, i) in contacts" :key="i" :type="c.type" :data="c.value"></profile-contacts> -->
                <a href="">{{userData.email || "Email отсутствует"}}</a>

            </div>
            <div class="stats">
        <a href="#" class="stat_btn"> <font-awesome-icon icon="fa-solid fa-heart" /> 2</a>
        <a href="#" class="stat_btn"> <font-awesome-icon icon="fa-solid fa-user" /> 2</a>
        <a href="#" class="stat_btn"> <font-awesome-icon icon="fa-solid fa-user" /> 2</a>
        <a href="#" class="stat_btn"> <font-awesome-icon icon="fa-solid fa-share-from-square" /> 2</a>

            </div>
        </div>
        <div class="profile__about">
            <h2>{{userData.description || "Description isn't found ((("}}</h2>
            <div>
                Возраст:
                <button @click="dec">-</button>
                {{age}}
                <button @click="inc">+</button>
            </div>
            <div class="portfolio">
                <div class="ddff">
                <div class="portfolio__btn" @click="addProject">Add project</div>
                <div class="prt_grid">
                <div class="card1">
                    <div class="profile__item" v-for="item of projects" :key="item._id">
                    <h2>{{item.title}}</h2>
                    
                    <div class="portfolio__image" :style="{backgroundImage: `url(${item.main_image})`}"></div>
                    <button @click="removeProject(item._id)">Remove</button>
<!--                    <p v-show="item.description">{{item.description}}</p>-->
                    <a :href="item.link" target="_blank" v-show="item.link">ссылка на АРТ</a>
                    <p>Description: {{item.description || "..."}}</p>
                    <p>Likes: {{item.likes.length || "There is no likes"}}</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Picture from "@/components/Profile/Picture";
import Contacts from "@/components/Profile/Contacts";

export default {
    name: "usr-profile",
    components: {
        "profile-picture": Picture,
        "profile-contacts": Contacts
    },
    props: ["userData"],
    data() {
        return {
            name: "Lorem Ispum",
            // contacts: ["+7(123)456-78-90", "lexysnake@gmail.com", "ds:@lekso4ka", "tg:@lekso4ka"]
            // contacts: [
            //     {type: "phone", value: "+7(123)456-78-90"},
            //     {type: "email", value: "antoshka@ivanov.son"},
            //     {type: "tg", value: "@antoshka"},
            //     {type: "vk", value: "https://vk.com/1234567890"}
            // ],
            age: 20,
            projects: this.userData.portfolio || []
        }
    },
    methods: {
        inc() {
            this.age++;
        },
        dec() {
            this.age > 0 && this.age--
        },
        addProject() {
            this.$emit("showPopup");
        },
        removeProject(id){
            console.log(id, this.userData._id)

            fetch(`https://dream-design-server.herokuapp.com/api/users/project/remove/${this.userData._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                        "Accept": "application/json"
                },
                body: JSON.stringify({"_id": id})
            })
            .then(res => res.json())
            .then(data => {
                console.log("result", data);
                if(data.message === "ok"){
                    localStorage.setItem("user", JSON.stringify(data.data))
                    this.projects = this.projects.filter(p => p._id !== id)
                }
            })
        }
    }
}
</script>

<style scoped>
    .profile {
        display: grid;
        grid-template-columns: 30% 1fr;
        width: 1200px;
        /* margin: auto; */
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
        margin-right: 5px;
    }
    .portfolio {
        padding: 30px 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
    }
    .portfolio__item {
        padding: 30px;
        
    }
    .portfolio__btn {
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 10px;
        padding: 10px;
    }
    .portfolio__image{
        height: 243px;
        width: 243px;
        background-size: cover;
    }
    .card1{
        padding: 30px 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
    }
    font-awesome-icon{
    color: white
}
.stat_btn{
    padding-right: 2vh;
}
.prt_grid{
    padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}
</style>