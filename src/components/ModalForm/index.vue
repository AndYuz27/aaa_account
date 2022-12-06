<template>
    <div class="modal">
        <div class="modal-close" @click="$emit('modalClose')">+</div>
        <form @submit.prevent="addProject">
            <input type="text" v-model="title" placeholder="Название проекта" required>
            <input type="text" v-model="image" placeholder="Фото проекта">
            <input type="text" v-model="link" placeholder="Ссылка на продукт">
            <input type="month" v-model="date" placeholder="Когда велась работа над проектом?" >
            <textarea v-model="text" placeholder="Описание"></textarea>
            <button type="submit">Добавить</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ["userData"],
    name: "modal-form",
    data() {
        return {
            title: "",
            image: "",
            text: "",
            link: "",
            date: null,
            tags: []
        }
    },
    methods: {
        addProject() {
            let user = localStorage.getItem("user");
            if (user) {
                user = JSON.parse(user);
            }
            const body = {
                title: this.title,
                link: this.link,
                main_image: this.image,
                description: this.text,
                tags: this.tags,
                date: this.date && new Date(this.date)
            }
            console.log(body);
            console.log(user);
            if (user) {
                fetch(`https://srv.petiteweb.dev/api/profile/users/project/add/${user._id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(body)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.message === "ok") {
                        this.clearForm();
                        user = data.data;
                        localStorage.setItem("user", JSON.stringify(user));
                        this.$emit("modalClose");
                        this.$emit("updateData", user);
                    }
                })
            }
        },
        clearForm() {
            this.title = "";
            this.link = "";
            this.image = "";
            this.text = "";
            this.tags = [];
            this.date = null;
        }
    }
}
</script>

<style scoped>
    .modal form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>