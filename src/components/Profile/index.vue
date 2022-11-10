<template>
    <div class="profile">
        <div v-if="user" class="profile__contacts" >
            <profile-picture></profile-picture>
            <h2>{{userData.name || "Где имя!?"}}</h2>
            <div class="profile__item">
                <a href="">{{userData.email || "Email отсутствует"}}</a>

            </div>
            <div class="stats">
                <button @click="inc2" class="stat_btn"> <font-awesome-icon icon="fa-solid fa-heart" /> {{likes}}</button>
                <button @click="inc1" class="stat_btn"> <font-awesome-icon icon="fa-solid fa-user" /> {{sub}}</button>
                    <button @click="inc3" class="stat_btn"> <font-awesome-icon icon="fa-solid fa-share-from-square" /> {{shared}}</button>

            </div>
        </div>
        <div class="profile__about">    
            <h2 v-if="user">{{userData.description || "Описании не найдено ((("}}</h2>
            <div v-if="user">

            </div>
            <div class="portfolio">
                <div class="ddff">
                <div v-if="user" class="portfolio__btn" @click="addProject">Добавить</div>
                <div class="prt_grid">
                <div class="card1">
                    <div class="profile__item" v-for="item of projects" :key="item._id">
                    <h2>{{item.title || "Название отсутствует"}}</h2>
                    
                    <div class="portfolio__image" :style="{backgroundImage: `url(${item.main_image})`}"></div>
                    <button class="btn_del" @click="removeProject(item._id)">Удалить</button>
                    <a :href="item.link" target="_blank" v-show="item.link">ссылка на АРТ</a>
                    <p>Описание: {{item.description || "Пользователь не оставил описания ((("}}</p>
                    <p>Дата: {{item.date || "Даты нету ((("}}</p>
                    <!-- <p>Likes: {{item.likes.length || "There is no likes"}}</p> -->
                    </div>
                    </div>
                    </div>
                </div>
                <div v-if="!user" class="NoValidUser">Вы не вошли в систему. Пожалуйста
                          <router-link v-if="!user" to="/auth">войдите под вашим именем.</router-link>
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
            age: 20,
            sub: 35,
            likes: 25,
            shared: 35,
            projects: this.userData.portfolio || [],
            user: localStorage.getItem("user"),
        }
    },
    methods: {
        inc() {
            this.age++;
        },
        inc1() {
            this.sub++;
        },
        dec() {
            this.age > 0 && this.age--
        },
        dec1() {
            this.sub > 0 && this.sub--
        },
        addProject() {
            this.$emit("showPopup");
        },
        inc2() {
            this.likes++;
        },
        dec2() {
            this.likes > 0 && this.likes--
        },
        inc3() {
            this.shared++;
        },
        dec3() {
            this.shared > 0 && this.shared--
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
            alert("Проект удален")
        },
        getLike(){
            
        }
    }
}
</script>

<style scoped>
    .profile {
        display: grid;
        grid-template-columns: 30% 1fr;
        width: 1200px;
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
        background-color: darkgray;
        border-radius: 8px;
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
    margin-top: 12px;
    padding-right: 2vh;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: #ffffff;
    font-size: 18px;
}
.stat_btn:hover {
    color: blanchedalmond;
}
.prt_grid{
    padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}
a {
    color: #ffffff;
    text-decoration: none;
}
a:hover {
    color: blanchedalmond;
}
.btn_del{
    margin-top: 12px;
    background-color: crimson;
    color: #fff;
    border-radius: 8px;
}
</style>