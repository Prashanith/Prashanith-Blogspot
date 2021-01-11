<template >
<v-app style="background-image: linear-gradient(to bottom, #1867c0, #5CBBF6);object-fit:fixed;">
<v-container class="ma-0">

  <v-row class="mt-11">
    <v-col md="4">
    </v-col>
    <v-col class="mr-6 mt-10" >
      <v-card  width="400" hover="11">
        <v-card-title class="" color="primary">Login
        </v-card-title>
        <v-card-text>
           <v-form ref="form" v-model="valid" lazy-validation method="POST">
              <v-text-field
                prepend-icon="person"
                name="username"
                label="Username"
                :counter="16"
                :rules="nameRules"
                v-model="username"
                required>
                </v-text-field>
                <v-text-field
                    prepend-icon="lock"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                        <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                  ></v-checkbox>
                  
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click.prevent="validate"
                  >
                  Login
                  </v-btn>

                  <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                  >
                    Reset Form
                  </v-btn>

            </v-form>
         </v-card-text>
      </v-card>
    </v-col>
    <v-col md="4">
    </v-col>
  </v-row>
</v-container>
</v-app>
</template>
<script>
export default {
  data: () => ({
      username:'',
      password: '',
      valid: true,
      checkbox:true,
      show1: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
    }),
  methods: {
      validate () {
        this.$refs.form.validate()
        this.$store.dispatch('retrieveToken',{ 
        username: this.username,
        password: this.password
        }) 
        .then(response=>{
          console.log(response);
          console.log('Hix')
          
        }) 
      },

      reset () {
        this.$refs.form.reset()
      },

      resetValidation () {
        this.$refs.form.resetValidation()
      },
    }
   }    
</script>
