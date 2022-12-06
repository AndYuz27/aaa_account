<template>
    <h1>Test is here</h1>
        <div class="container">
                    <div class="card" v-for="u of users" :key="u.email">
                        {{u.name || "NoName"}}      
                              <br>
                                 {{u.email}}  
                                 <hr>             
                                 </div>
                                </div>
                                </template>
<script>export default {
    data() {
        return {
            users: []//this.getUsers
        }
    },
    name: "test-data",
    created() {
fetch("https://srv.petiteweb.dev/api/profile/users/")
            .then(res => res.json())
            .then(data => {

         
            if (data.message === "ok") {
                this.users = data.data
            }
       })

}
}
</script><style scoped></style>