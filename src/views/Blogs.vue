<template>
<v-app class="blue-grey lighten-5">
<v-container>
    <HelloWorld/>
    <v-col class="mt-3 pt-11">
        <v-row justify="center" >
            <v-col md2></v-col>
            <v-card  md8 width="1050" class="mx-11 my-11" outlined 
                     v-for="blog in blogs" :key="blog.id" >
                <v-card-title  class="tryfonts black--text font-weight-regular headline" >
                   {{ blog.title }} 
                   <v-spacer></v-spacer>
                    <v-menu bottom transition="scale-transition">
                         <template v-slot:activator="{ on }">
                        <v-icon color="primary" dark v-on="on" >list</v-icon>
                         </template>
                        <v-list width="150">
                        <v-list-item>
                            <v-list-item-title>Update</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Delete</v-list-item-title>
                        </v-list-item>
                        </v-list>
                    </v-menu>
                    <br>

                </v-card-title>
               <v-card-text class="tryfonts title font-weight-normal">
                    <span class="font-weight-thin" >{{ blog.date_posted }}</span>
                    <br>
                  {{ blog.content}}
                </v-card-text>
            </v-card>
           <v-col md2>
            </v-col>
        </v-row>
    </v-col>
</v-container>
</v-app>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
const axios = require('axios');
export default {
    components:{
        HelloWorld
    },
    name:'Blogs',
    data(){
        return{           
            blogs:[],
            todaydate:Date.now(),
        }
    },
    created(){
      axios.get('http://127.0.0.1:8000/Post/')
    .then((response) => {
        this.blogs=response.data
        console.log('Hello date_formatted')
        console.log(response.status);
        console.log(response.statusText);
       });
    },
}
</script>

<style scoped>
.tryfonts{
font-family: 'Ubuntu', sans-serif;
}
</style>