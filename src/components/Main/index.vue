<template>
    <div class="wrapper">
        <router-view @showPopup="$emit('showPopup')" :userData="userData"></router-view>
    </div>
</template>

<script>
export default {
    props: ["userData"],
    name: "main-container"
}
</script>

<style>
    .wrapper {
        background-color: mediumspringgreen;
        padding: 0px calc(50% - 600px);
        min-height: calc(100vh - 100px);
        box-sizing: border-box;
    }
</style>