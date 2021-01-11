<template>
<v-app class="tryfonts">
     <v-app-bar app color="primary" dark height="50">
            <v-icon>bubble_chart</v-icon>
            <v-toolbar-title>
                <span class="font-weight-regular tryfonts">Add</span><span class="font-weight-bold tryfonts">Blog</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
                <v-btn class="white black--text mr-2" @click="add">Add Blog</v-btn>
                <v-btn class="mr-2 white black--text" @click="add">Edit Blog</v-btn>
                <v-btn class="mr-2 white black--text" @click="logOut">Logout</v-btn>
     </v-app-bar>
     <v-content>
         <v-container>
               <v-col>
                    <v-row>
                        <v-col></v-col>
                        <v-col md="8">
                         <v-card md8 hover="11" v-if="!submitted">
                              <v-card-title class="primary white--text pl-4 tryfonts">Blog<v-spacer></v-spacer>
                <span class="font-weight-regular tryfonts">{{ tdate }}</span>
                              </v-card-title>

                              <v-card-text>
                    <v-form ref="form" class="py-2 px-4">
                       <v-text-field  prepend-icon="create" v-model="blogname" label="Blog-Title"
                       :rules="titleRules" required></v-text-field>
                       <v-textarea prepend-icon="notes" v-model="blogcontent" label="Blog-Content"
                       :rules="contentRules" required></v-textarea>
                       <v-select
                       required
                       prepend-icon="user"
                        v-model="blogauthor"
                        :items="users"
                        :rules="[v => !!v || 'Item is required']"
                        label="User"
                        ></v-select>
                        <v-btn class="primary mr-4" @click.prevent="reset">Reset</v-btn>
                       <v-btn class="primary mr-4" @click.prevent="submit">Add Blog</v-btn>


                    </v-form>
                              </v-card-text>
                         </v-card>
                         </v-col>
                         <v-col></v-col>

                    </v-row>
                    <v-row md="8">
                      <v-col></v-col>
                      <v-col md="8">
                      <v-card v-if="submitted" hover="11">
                        <v-card-title class="tryfonts">Post Created Successfully
                          <v-spacer></v-spacer>
                            <v-btn depressed class="primary" @click="addNew">Add another blog
                            <v-icon right >add</v-icon>
                            </v-btn>
                      </v-card-title>
                        <v-card-text class="tryfonts">Post details {{ blogname }} <br>Posted Successfully</v-card-text>

                      </v-card>
                      </v-col>
                        <v-col></v-col>
                    </v-row>
        </v-col>
    </v-container>

     </v-content>
</v-app>
</template>

<script>
const axios = require('axios');
export default {
    name:'Addblog',
    data(){
        return{
            submitted:false,
            addex:false,
            blogname:'',blogcontent:'',
            blogauthor:'',
            authid:0,
            //bdate:null,
            //tdate:new Date().toLocaleString(),
            author: null,
            users: [
                'Prashanith',
                'Abhinay'
            ],
            titleRules: [
              v => !!v || 'Title is required',
              v => (v && v.length <= 26) || 'Title must be less than 26 characters',
            ],
            contentRules: [
              v => !!v || 'Content cannot be empty',
              v => (v && v.length <= 1000) || 'Content Size Exceeded',
            ],
        }
    },
    methods:{
      reset () {
        this.$refs.form.reset()
      },
      submit(){
        if (this.blogauthor=='Prashanith') {
          this.authid=1
        }
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${this.$store.state.jwtoken}`,
          }
          axios.post('http://127.0.0.1:8000/Post/', { title:this.blogname,
                  content:this.blogcontent,
                  author:this.authid,
                } , {
            headers: headers
          })
          .then((response) => {
            console.log(response);
              this.$refs.form.reset()
              this.submitted=true
          }, (error) => {
            console.log(error);
          });
      },
      addNew(){
        this.submitted=false       
       },
       logOut(){
         this.$store.dispatch('logOut')
       }
       
    },

}
</script>

<style scoped>

.tryfonts{
  font-family: 'Ubuntu', sans-serif;
}
a{
  text-decoration: none;
  color: white;
}
</style>
