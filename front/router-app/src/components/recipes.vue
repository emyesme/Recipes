<template>
  <div class="recipes">
    <title>Recetas</title>
    <center>
      <table>
        <th>Nueva Receta</th>
        <tr>
          <td>Titulo:</td>
          <td><input type="text" id="title" placeholder="Titulo"></td>
        </tr>
        <tr>
          <td>Descripción:</td>
          <td><input type="text" id="description" placeholder="Descripción"></td>
        </tr>
      </table>
      <center><button @click="addRecipe">Nueva Receta</button></center>
      <br>
      <br>
      <br>
      <table>
        <th>Recetas</th>
        <tr v-for="recipe in recipes" v-bind:key="recipe.idrecipe">
          <td> {{ recipe.idRecipe }}  -  {{ recipe.title }} </td>
          <td><router-link v-bind:to="'/Recipe/' + recipe.idRecipe" tag="button">Mostrar</router-link></td>
          <td><button @click='deleteRecipe(recipe.idRecipe)'> Eliminar</button></td>
        </tr>
      </table>
    </center>
  </div>
</template>

<script>
import axios from 'axios';
const api='http://localhost:8080/api';
export default {

  name: 'recipes',
  data: () => ({
    idRecipe: 0,
    title: null,
    description: null,
    recipes: [],
    message: null,
  }),
  beforeMount(){  
    axios.get(api + '/recipes')
    .then(response => {
    this.recipes = response.data})
    .catch( function (error) { console.log(error)})
  },
  methods:{
    deleteRecipe: function(id){
      console.log(api + '/recipe/' + id)
      axios.delete(api + '/recipe/'+ id)
      .catch( function(error) { console.log(error)})
      window.location.reload();
    },
    addRecipe(){
      this.title = document.getElementById("title").value
      this.description = document.getElementById("description").value
      //create recipe
      if ( this.title == "" || this.description == ""){
        alert("Alguno de los campos esta vacio.")
        return
      }
      axios.post(api + "/recipe" ,
      { title: this.title, description:this.description})
      .catch( function (error){ console.log(error)})
      alert("información guardada exitosamente\nahora puedes agregar ingredientes al entrar a tu receta.")
      window.location.reload();
    }
  }
}
</script>


