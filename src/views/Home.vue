<template>
<v-app>
  <HelloWorld/>
<v-content class="teal lighten-5">
      <v-container>
        <v-col> <!--maincolumn-->
           <v-row class="my-6 mx-5"> 
              <v-col>
                <v-card class="mx-0" max-width="540" width="522" md6 elevation="10">
                   <v-carousel hide-delimiters height="300" cycle show-arrows-on-hover
                 reverse-transition="fade-transition"
                  transition="fade-transition" >
                     <v-carousel-item v-for="(slide,i) in slides" :key="i" v-bind:src="slide.sr">
                 <div class="pt-5 pl-5 display-3 cyan--text font-weight-bold tryfonts" justify="center">
                  <v-chip color="primary" ><v-icon>star</v-icon>{{ slide.ctitle }}</v-chip>
                 </div>
                  </v-carousel-item> 
                </v-carousel>
                </v-card>
              </v-col>
              <v-col>
               <v-card  class="mx-0" max-width="540" width="522" md6 elevation="10">
                <v-carousel hide-delimiters height="300" show-arrows-on-hover
                cycle
                  reverse-transition="fade-transition"
                  transition="fade-transition">
                 <v-carousel-item v-for="(slidea,i) in slidesa" :key="i" v-bind:src="slidea.sr" >
                 <div class="pt-5 pl-5 display-3 cyan--text font-weight-bold tryfonts" justify="center">
                  <v-chip color="primary" ><v-icon>star</v-icon>{{ slidea.ctitle }}</v-chip>
                 </div>
                  </v-carousel-item>
                </v-carousel>
               </v-card>
              </v-col>
             </v-row>
             <v-row class="mx-11 my-10" justify-center>
               <v-card md12 width="1050" height="470" >
                  <div class="tryfonts font-weight-italic display-1 ma-0 pl-10 pt-5 primary--text">Some photography!</div>
                  <v-card-text> 
                    <v-container>
                      <v-row>
                        <v-col width="475" class="ma-0 pa-3">
                          <v-img src="../assets/photo1.jpg"  width="400" height="350" cover>

                          </v-img>
                        </v-col>
                        <v-col width="475">
                           <v-carousel hide-delimiters height="300" show-arrows-on-hover
                cycle
                  reverse-transition="fade-transition"
                  transition="fade-transition">
                 <v-carousel-item v-for="(slideb,i) in slidesb" :key="i" width="400" height="350" v-bind:src="slideb.sr" >
                  </v-carousel-item>
                </v-carousel>

                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                 
               </v-card>
             </v-row>

             <v-row class="mx-11 my-10" justify-center>
               <v-card md12 width="1050" height="470" class="pa-1">
                   
                    <v-card-title class="tryfonts display-1 ma-0 pl-10 pt-5 primary--text">Got some creativity in!</v-card-title>
                  <v-card-text> 
                    <v-container>
                      <v-row>
                        <v-col width="475" class="ma-0 pa-3">
                          <v-img src="../assets/abc.png"  width="400" height="350" cover>

                          </v-img>
                        </v-col>
                        <v-col width="475">
                          <iframe  width="500" height="350" src="https://www.youtube.com/embed/muJTBuyn76Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                 
               </v-card>
             </v-row>
             
          </v-col>
        </v-container>
    
       <v-flex bottom="0" class="grey darken-4 px-0" left="0" height="450" right="0">
              <v-row >
                 <v-col md3 >
                </v-col>
                <v-col  justify="center" class="center">
                   <router-link :to="{ name:'Home'}">
                      <span class="px-12"><v-icon class="grey--text py-5 ml-7">bubble_chart</v-icon>
                  <span class="title grey--text">Prashanith BLOGSPOT</span></span>
                  </router-link>
                  <v-divider color="grey"></v-divider>
                  <span>
                   <a href="https://www.instagram.com/007prashanith" justify="center" target="_blank"><v-icon class="grey--text py-5 pl-11 pr-9">mdi-instagram</v-icon></a>
                   <a href="https://www.facebook.com/007prashanith" justify="center" target="_blank"><v-icon class="grey--text py-5 px-9">mdi-facebook</v-icon></a>
                   <a href="https://github.com/Prashanith" justify="center" target="_blank"><v-icon class="grey--text py-5 px-9">mdi-github</v-icon></a>
                   <a href="prashanith007@okaxis" justify="center" target="_blank"><v-icon class="grey--text py-5 px-9">mdi-twitter</v-icon></a>
                  </span>
                  <v-divider color="grey"></v-divider>
                  <span class="grey--text mt-8 pt-8 px-12">© 2020 The Blogger . All Rights Reserved.</span>
                </v-col>
                 <v-col md3 >
                    
                </v-col>

              </v-row>
        </v-flex>
    </v-content>
</v-app>
  
</template>

<script>
import HelloWorld from "../components/HelloWorld";
export default {
  name: 'Home',
  components:{
    HelloWorld
  },
  data(){
    return{
      slides: [
       {
         ctitle:'travel',
         sr:'https://images.pexels.com/photos/2114206/pexels-photo-2114206.jpeg?cs=srgb&dl=people-standing-on-top-of-mountain-2114206.jpg&fm=jpg'
       },
       {
         ctitle:'fashion',
         sr:'https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?cs=srgb&dl=man-wearing-red-sweatshirt-and-black-pants-leaning-on-the-845434.jpg&fm=jpg'
       },
        {
         ctitle:'food',
         sr:'https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?cs=srgb&dl=platter-of-foods-941869.jpg&fm=jpg'
       },
        {
         ctitle:'automobiles',
         sr:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=white-mercedes-benz-cars-120049.jpg&fm=jpg'
       },
        {
         ctitle:'health',
         sr:'https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?cs=srgb&dl=man-wearing-white-sweater-and-black-shorts-about-to-run-936094.jpg&fm=jpg'
       },   
    ],
    slidesa:[
       {
         ctitle:'sport',
         sr:'https://images.pexels.com/photos/978695/pexels-photo-978695.jpeg?cs=srgb&dl=silhouette-of-a-boy-playing-ball-during-sunset-978695.jpg&fm=jpg'
       },
        {
         ctitle:'business',
         sr:'https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?cs=srgb&dl=business-computer-connection-contemporary-270640.jpg&fm=jpg'
       },
        {
         ctitle:'cinema',
         sr:'https://images.pexels.com/photos/157543/pexels-photo-157543.jpeg?cs=srgb&dl=3-vhs-tape-on-top-of-table-157543.jpg&fm=jpg'
       },
        {
         ctitle:'politics',
         sr:'https://images.pexels.com/photos/1550342/pexels-photo-1550342.jpeg?cs=srgb&dl=usa-flag-waving-on-white-metal-pole-1550342.jpg&fm=jpg'
       },
        {
         ctitle:'gadgets',
         sr:'https://images.pexels.com/photos/257699/pexels-photo-257699.jpeg?cs=srgb&dl=blur-close-up-design-focus-257699.jpg&fm=jpg'
       }, 
    ],
    slidesb:[
      {
        sr:'https://i.ibb.co/GxyCBGf/Pics-Art-03-30-12-15-21.jpg'
      },
      {
        sr:'https://i.ibb.co/JzQ77z0/Pics-Art-03-30-12-15-11.jpg'

      },
       {
        sr:'https://i.ibb.co/5YqB5bL/Pics-Art-03-30-12-14-54.jpg'
      },
       {
        sr:'https://i.ibb.co/rsHtFFf/Pics-Art-03-30-12-13-59.jpg'
      },
       {
        sr:'https://i.ibb.co/7vMb3Pb/Pics-Art-03-30-12-14-38.jpg'
      },
       {
        sr:'https://i.ibb.co/yQdSGVz/Pics-Art-03-30-12-13-42.jpg'
      },
       {
        sr:'https://i.ibb.co/DMP6GMY/a-2.jpg'
      },
    ]
    }
  }
  
}
</script>
<style scoped>
a{
  text-decoration: none;
  color: white;
}
.tryfonts{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
