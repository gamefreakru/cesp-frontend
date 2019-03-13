<template>
  <div id="container">
    <p id="title">{{ title }}</p>
    <img :alt="title" :src="image"/>
    <p id="description" v-html="description"></p>
    <a href="#">{{ linkTitle }}</a>
  </div>
</template>

<script>

  export default {
    props: {
      title: String,
      image: String,
      description: String,
      linkTitle: String
    }
  }
</script>

<style scoped>

 #container {
   width: 250px;
   height: 350px;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #fbfbfb;
   margin: 0 20px;
   border: #ffd906 2px solid;
   border-radius: 0 0 8px 8px;
   padding: 15px 10px;
 }

 #title {
   font-size: 1.25rem;
   font-weight: bold;
   margin: 0;
 }

 #description {
   line-height: 1.5;
   text-align: left;
 }

 a {
   text-align: left;
 }

</style>
