<template>
    <div class="mainpage">
        <h2>{{dd}}</h2>
        <h5>{{tgaaa}}</h5>
        <img src="https://www.pngall.com/wp-content/uploads/6/Vector-Joystick-PNG-File.png" alt="paintbrush" width="500">
        <div class="pg1">
            <h3>About Site</h3>
            <p>{{lrm}}</p> 
        </div>
        <div class="bg_loop"></div>
        <div class="a_space"></div>

    </div>
</template>

<script>
export default {
    name: "home-page",
    created() {

},
//     data: {
//     images: [
//       'http://via.placeholder.com/350x150',
//       'http://via.placeholder.com/200x140',
//       'http://via.placeholder.com/200x100'
//     ],selectedImage: ''
//   },
//   created () {
//     const idx = Math.floor(Math.random() * this.images.length)
//     this.selectedImage = this.images[idx]
//   },
components: {

},
data() {
    return {
        dd: "Welcome to the site!",
        tgaaa: "@andrlemon",
        lrm: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quo quaerat eligendi tempore soluta, dolorum iure eos, repudiandae molestiae fuga facere est. Ea error quam impedit ex? Omnis nihil earum, in mollitia minima doloremque nulla atque officia natus! Pariatur aspernatur ut consectetur unde quaerat corporis ea officia dolores dolor, sapiente quo consequuntur rerum officiis dolorem voluptas temporibus totam quas, optio cumque veritatis! Dignissimos aliquid, nobis magnam totam sequi dicta fugit cum quia deserunt est! Nesciunt accusantium ullam minus nulla commodi.",
        images: [
'https://i.pinimg.com/originals/60/a1/ce/60a1ce7af01d06775077d5db0e2ceee0.gif',
'https://picsum.photos/600/200',
'https://picsum.photos/600/200'
]

        // cnt_l: [
        //     {type: "like", value: "15"},
        //     {type: "sub", value: "200"},
        //     {type: "shares", value: "5"},
        // ]
    }
}
}
</script>

<style scoped>
body{
    margin: 0;
}
.mainpage{
display: flex;
flex-direction: column;
background-color: rgb(255, 255, 0);
align-items: center;
}
.bg_loop{
width: 100%;
height: 382px;
background-color: #000;
background-image: url(https://i.pinimg.com/originals/60/a1/ce/60a1ce7af01d06775077d5db0e2ceee0.gif);
background-position: center;
background-repeat: no-repeat; 
background-size: cover; 
}
.pg1{
padding: 25px;
}
.a_space{
width: 100%;
height: 224px;

}
</style>


<style scoped>

</style>