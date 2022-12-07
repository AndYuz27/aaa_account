<template>
    <div class="image" :style="{width: size + 'px', height: size + 'px', image}"></div>
</template>

<script>
export default {
    name: "profile-picture",
    data() {
        return {
            size: 200,
            backgroundImage: "url(https://static10.tgstat.ru/channels/_0/4e/4efa0e9d54788404fd7ce9a5eb78b399.jpg)"
        }
    }
}
</script>

<style scoped>
    .image {
        border-radius: 50%;
        background-color: navy;
        background-image: url(https://static10.tgstat.ru/channels/_0/4e/4efa0e9d54788404fd7ce9a5eb78b399.jpg);
        margin: auto;
        background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
    }
</style>