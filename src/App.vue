<template>
<v-app>
  <router-view></router-view>
</v-app>
</template>

<script>
export default {
  name: 'App',
  data(){
   return{
     navex:false,
     items:[
       { title:'Home',icon:'home',route:'/'},
       { title:'Blogs',icon:'library_books',route:'/blogs'},
       { title:'Loginpage',icon:'supervisor_account',route:'/loginpage'},
       { title:'Addblog',icon:'create',route:'/addblog'},
       { title:'About',icon:'question_answer',route:'/about'}      

     ],
     
   }
  }
};
</script>
<style  scoped>
a{
  text-decoration: none;
  color: white;
}
.tryfonts{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
