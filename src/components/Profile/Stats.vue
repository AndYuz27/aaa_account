<template>
    <div class="stat">
<i v-if="type" :classs="'bi bi-heart'"></i>
</div>
</template>

<script>
export default {
    name: "Stats",
    props: ["cnt", "type"]
}
</script>

<style scoped>

</style>