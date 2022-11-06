<template>
    <div class="stat">
        <i v-if="type" :class="'bi bi-heart'"></i>
        {{ cnt }}
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