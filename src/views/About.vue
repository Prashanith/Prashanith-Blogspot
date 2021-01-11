<template>
<div style="background-image: linear-gradient(to bottom, #1867c0, #5CBBF6);" >
  <v-container> 
    <v-col >
      <v-row>
          <v-card elevation="11" md12 class="tryfonts">
            <v-card-title justify="center">About</v-card-title>
          
            <v-card-text> 
                <v-icon>create</v-icon>
            I'm Prashanith(Student).I like to write blogs.I would like write blogs on various topics such
            as politics,science,technology,health,etc. This is my personal platform.
            I'm active on the following social media platforms
            </v-card-text>
          </v-card>
      </v-row>
      <v-row class="pl-10">
         <v-col></v-col>
           <v-col ><a href="https://twitter.com/Prashanith1" target="_blank">
             <v-card class="mx-10 tryfonts " color="#26c6da" hover elevation="11" dark md6 width="500">
                 <v-card-title><v-hover><v-icon hover large left>mdi-twitter</v-icon></v-hover>
                 <span class="title font-weight-light" >Twitter</span>
                 </v-card-title>

                 <v-card-text class="headline font-weight-bold">
                   Its time to shut down everything absolutely everything before it spreads  #coronavirusinindia
                   
                 </v-card-text>

               <v-card-actions>
                    <v-list-item class="grow">
                     <v-list-item-avatar color="grey darken-3">
                         <v-img src="../assets/abc.webp" class="elevation-11"> 
                            </v-img>
                     </v-list-item-avatar>

                     <v-list-item-content>
                     <v-list-item-title >Urstruly Prashanith</v-list-item-title>
                    </v-list-item-content>

                      <v-row align="center" justify="end">
                         <v-icon class="mr-1">mdi-heart</v-icon>
                         <span class="subheading mr-2">7</span>
                         <span class="mr-1">·</span>
                         <v-icon class="mr-1">mdi-share-variant</v-icon>
                         <span class="subheading">45</span>
                     </v-row>
                     </v-list-item>
                     </v-card-actions>
                 </v-card>
                </a> 
               </v-col>
          <v-col></v-col>
           <v-col></v-col>
           <v-col></v-col>
      </v-row>
      <v-row>   <!----2nd row of single column---->
        <v-col>
        </v-col>
        <v-col>
        </v-col>
        <v-col>
        </v-col>
        <v-col> <a href="https://www.instagram.com/007prashanith/" target="_blank">
            <v-card class="mx-10 tryfonts " color="black" hover elevation="11" dark md6 width="500">
                 <v-card-title><v-hover><v-icon hover large left>mdi-instagram</v-icon></v-hover>
                 <span class="title font-weight-light" >Instagram</span>
                 </v-card-title>

                 <v-card-text class="headline font-weight-bold">
                   <v-img src="../assets/instapro.jpg" contain >
                     
                   </v-img>
                 </v-card-text>

               <v-card-actions>
                    <v-list-item class="grow">
                     <v-list-item-avatar color="grey darken-3">
                        <v-img src="../assets/abc.webp" class="elevation-11">

                        </v-img>
                     </v-list-item-avatar>

                     <v-list-item-content>
                     <v-list-item-title >Urstruly Prashanith</v-list-item-title>
                    </v-list-item-content>

                      <v-row align="center" justify="end">
                         <v-icon class="mr-1">mdi-heart</v-icon>
                         <span class="subheading mr-2">7</span>
                         <span class="mr-1">·</span>
                         <v-icon class="mr-1">mdi-share-variant</v-icon>
                         <span class="subheading">45</span>
                     </v-row>
                     </v-list-item>
                     </v-card-actions>
                 </v-card>
                 </a>
         
        </v-col>
         <v-col>
        </v-col>
      </v-row>   
       <v-row> <!-- 3rdrow -->
           <v-col></v-col>
           <v-col>
             <a href="https://www.facebook.com/007prashanith/" target="_blank">
            <v-card class="mx-10 light-blue darken-4 tryfonts" hover elevation="11" light md6 width="500">
                 <v-card-title><v-hover><v-icon hover large left >mdi-facebook</v-icon></v-hover>
                 <span class="title font-weight-light" >facebook</span>
                 </v-card-title>

                 <v-card-text class="headline font-weight-bold">
                   <v-img src="../assets/instapro.jpg" contain >
                     
                   </v-img>
                 </v-card-text>

               <v-card-actions>
                    <v-list-item class="grow">
                     <v-list-item-avatar color="grey darken-3">
                        <v-img src="../assets/abc.webp" class="elevation-11">

                        </v-img>
                     </v-list-item-avatar>

                     <v-list-item-content>
                     <v-list-item-title >Urstruly Prashanith</v-list-item-title>
                    </v-list-item-content>

                      <v-row align="center" justify="end">
                         <v-icon class="mr-1">mdi-heart</v-icon>
                         <span class="subheading mr-2">7</span>
                         <span class="mr-1">·</span>
                         <v-icon class="mr-1">mdi-share-variant</v-icon>
                         <span class="subheading">45</span>
                     </v-row>
                     </v-list-item>
                     </v-card-actions>
                 </v-card>
                 </a>
           </v-col>
           <v-col></v-col>
           <v-col></v-col>
           <v-col></v-col>
       </v-row> 
       <v-row>
         <v-col md12 >
        <i class="white--text pa-7 tryfonts" style="justify-content:space-around">© 2020 The Blogger. All Rights Reserved.</i>
        </v-col>       
         </v-row> 

    </v-col>
   
  </v-container>
  </div>
</template>

<script>

export default {
  name:'About'
}
</script>
<style scoped>

.tryfonts{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
a{
  text-decoration: none;
}
</style>
