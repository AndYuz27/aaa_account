<template>
    <div class="stat">
        <!-- <button class="btn_n" @click="incr"><font-awesome-icon icon="fa-solid fa-heart" /> </button><p>{{ cnt1 }}</p>
        <button class="btn_n" @click="incr2"><font-awesome-icon icon="fa-solid fa-user" /> </button><p>{{ cnt2 }}</p>
        <button class="btn_n" @click="incr3"><font-awesome-icon icon="fa-solid fa-share-from-square" /> </button><p>{{ cnt3 }}</p> -->
        
        <!-- <a v-if="type === 'like'" :href="'#' + data.split('')" target="_blank"> <font-awesome-icon icon="fa-solid fa-heart" /> {{ data }}</a>
        <a v-else-if="type === 'sub'" :href="'#' + data.split('')" target="_blank"> <font-awesome-icon icon="fa-solid fa-user" /> {{ data }}</a>
        <a v-else-if="type === 'sub'" :href="'#' + data.split('')" target="_blank"> <font-awesome-icon icon="fa-solid fa-user" /> {{ data }}</a>
        <a v-else-if="type === 'shares'" :href="'#' + data.split('')" target="_blank"> <font-awesome-icon icon="fa-solid fa-share-from-square" /> {{ data }}</a>

  -->
</div>
</template>

<script>
export default {
    name: "Stats",
    props: ["type", "data"],
    data() {
        return {cnt1: 0,
                cnt2: 0,
                cnt3: 0}
    },
    methods: {
        incr() {
            this.cnt1++;
        },
        incr2(){
            this.cnt2++;
        },
        incr3(){
            this.cnt3++;
        },
    },
}
</script>

<style scoped>
/* .stat{

} */
button{
    background: none;
    border: none;
        color: #ffffff;
        padding-left: 15px;
}
a {
        color: #ffffff;
        padding: 15px;
    }
    a:hover {
        color: blanchedalmond;
    }
font-awesome-icon{
    color: white
}

</style>