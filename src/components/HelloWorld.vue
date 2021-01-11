<template>
<div>
<v-navigation-drawer v-model="navex" absolute temporary
src="https://images.pexels.com/photos/304664/pexels-photo-304664.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
>
      <v-list nav dense class="white--text">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="pt-n3 pl-1 pr-5 mt-n2"><span class="title"><v-icon @click="navex=false">menu_open</v-icon> BlogSpot</span></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
        <v-list-item v-for="item in items"
          :key="item.title" link router :to="item.route" >
          <v-list-item-icon class="black--text" text--darken-5>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="black--text text--darken-5" >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>
      </v-list>
     <v-footer :padless="padless" bottom> version </v-footer>
         
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark height="50">
     <v-icon left @click="navex=!navex">menu</v-icon>
        <v-toolbar-title >
            <span class="font-weight-regular">Prashanith </span><span class="text-uppercase font-weight-bold">BlogSpot</span>
        </v-toolbar-title>
        <v-spacer></v-spacer> 
        <router-link :to="{ name:'Loginnest'}">
        <v-btn depressed class="light blue darken-3" v-if="!loginCheck"> Login
        <v-icon right >supervised_user_circle</v-icon>
        </v-btn>
        </router-link>
        <v-btn depressed class="light blue darken-3" v-if="loginCheck" @click="logout">Logout
        <v-icon right >supervised_user_circle</v-icon>
        </v-btn>
    </v-app-bar>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed:{
   loginCheck(){
      return this.$store.getters.loginCheck
    }
  },
  methods:{
    logout(){
      this.$store.commit('removeToken')
    }

  },
  data(){
   return{
     navex:false,
     items:[
       { title:'Home',icon:'home',route:'/'},
       { title:'Blogs',icon:'library_books',route:'/blogs'},
       { title:'Login',icon:'supervisor_account',route:'/login'},
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