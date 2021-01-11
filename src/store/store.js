import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    //authUser: {},
    //isAuthenticated: false,
    //jwt: localStorage.getItem('token') || null,
    jwtoken:localStorage.getItem('token') || null,
    endpoints: {
      // TODO: Remove hardcoding of dev endpoints
      obtainJWT: 'https://127.0.0.1:8000/auth/obtain_token/',
      refreshJWT: 'https://127.0.0.1:8000/auth/refresh_token/',
      baseUrl: 'https://127.0.0.1:8000/'
    }
  },
  getters:{
    loginCheck(state){
      if(state.jwtoken!=null)
      return true
      else
      return false
    }
  },
  mutations: {
    setAuthUser(state, {
      authUser,
      isAuthenticated
    }) {
      Vue.set(state, 'authUser', authUser)
      Vue.set(state, 'isAuthenticated', isAuthenticated)
    },
    updateToken(state, newToken) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.setItem('token', newToken);
      state.jwtoken = newToken;
    },
    removeToken(state) {
      state.jwtoken = null;
      localStorage.removeItem('token')
    }
  },
  actions:{
    retrieveToken(context,credentials){

      return new Promise((resolve,reject)=>{
            axios.post('http://127.0.0.1:8000/auth/obtain_token/',{
                  username:credentials.username,
                  password:credentials.password
                  })
                  .then((response) => {
                  // this.$store.commit('updateToken', response.data.token);
                  console.log(response.data.token);
                  localStorage.setItem('token',response.data.token)
                  context.commit('updateToken',response.data.token)
                  this.$router.push({name: 'Home'})     
                  console.log('Hi')  
                  resolve(response)   
                               
                  })
                  .catch((error) => {
                    console.log(error);
                    console.debug(error);
                    console.dir(error);
                    reject(error)
                  })
          })    
    },
    logOut(context){
     // const payload=this.state.jwtoken
     context.jwtoken=null
     context.commit('removeToken') 
     this.$router.push({name:'Home'}) 
       /*   axios.post('http://127.0.0.1:8000/auth/refresh_token/',payload)
                .then((response) => {
                localStorage.removeItem('token')
                context.commit('removeToken')  
                console.log(response) 
                this.$router.push({name:'Home'})

                })
                .catch((error) => {
                  localStorage.removeItem('token')
                  context.commit('removeToken')
                  console.log(error);
                  console.debug(error);
                  console.dir(error);
                 })  */  
    }
  }
})
new Vue(
  {
    router
  }
)