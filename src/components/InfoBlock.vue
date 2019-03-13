<template>
  <div id="container">
    <p id="title">{{ title }}</p>
    <img :alt="title" :src="getImgUrl(image)"/>
    <p id="description" v-html="description"></p>
    <p id="linkText">{{ linkTitle }}</p>
  </div>
</template>

<script>

  export default {
    props: {
      title: String,
      image: String,
      description: String,
      linkTitle: String
    },
    methods : {
      getImgUrl(imagePath) {
        var images = require.context('../assets/main/info', false, /\.jpg$/);
        return images('./' + imagePath + ".jpg");
      }
    }
  }

  
</script>

<style scoped>

 #container {
   width: 250px;
   height: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #fbfbfb;
   margin: 0 10px auto;
   border: #ffd906 2px solid;
   border-radius: 0 0 8px 8px;
   padding: 0 10px;
 }
 
 #container > img {
   width: 240px;
   height: 160px;
 }

 #title {
   font-size: 1.25rem;
   font-weight: bold;
 }

 #description {
   line-height: 1.5;
   text-align: left;
 }

 #linkText {
   text-align: left;
   margin: 0 0 15px 0;
   align-self: flex-start;
   color: #312a1e;
   font-size: 1.1rem;
   font-weight: 600;
 }

</style>
