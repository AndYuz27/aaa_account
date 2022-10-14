<template>
    <a v-if="type === 'phone'" :href="'tel:' + data">{{ data }}</a>
    <a v-else-if="type === 'email'" :href="'mailto:' + data">{{ data }}</a>
    <a v-else-if="type === 'tg'" :href="'https://t.me/' + data.split('@')[1]" target="_blank">{{ data }}</a>
    <!-- <a v-else-if="type === 'like'" :href="'#' + data.split('@')[1]" target="_blank"> <font-awesome-icon icon="fa-solid fa-heart" /> {{ data }}</a>
    <a v-else-if="type === 'sub'" :href="'#' + data.split('@')[1]" target="_blank"> <font-awesome-icon icon="fa-solid fa-user" /> {{ data }}</a>
    <a v-else-if="type === 'share'" :href="'#' + data.split('@')[1]" target="_blank"> <font-awesome-icon icon="fa-solid fa-share-from-square" /> {{ data }}</a> -->
    <a v-else :href="'#'" target="_blank">{{ data }}</a>
   
    
</template>

<script>
export default {
    name: "profile-contacts",
    props: ["type", "data"]
}
</script>

<style scoped>
    a {
        color: #ffffff;
    }
    a:hover {
        color: blanchedalmond;
    }
</style>