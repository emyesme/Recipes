<template>
    <div class="deleteIngredient">
        <center>
            <table>
                <th>{{ title }} ID: {{ idRecipe}} </th>
                <tr><th>Ingredientes</th></tr>
                <tr v-for="i in ingredients" v-bind:key="i.idIngredient">
                    <td> {{ i.quantity }}  ({{ i.unit }})  {{ i.name }} </td>
                    <td><router-link v-bind:to="'/'+idRecipe+'/'+i.idIngredient" tag="button">Modificar</router-link></td>
                    <td><button @click='deleteIngredient(i.idIngredient)'>Eliminar</button></td>
                </tr>
                <router-link v-bind:to="'/' + idRecipe + '/newIngredients'" tag="button">Agregar</router-link>
                <router-link v-bind:to="'/Recipe/' + idRecipe" tag="button">Volver</router-link>
            </table>
        </center>
    </div>
</template>


<script>
import axios from "axios";
const api = "http://localhost:8080/api";

export default {
    name:'deleteIngredient',
    data: () => ({
        idIngredient:0,
        idRecipe : 0,
        title: null,
        description: null,
        name: null,
        quantity: 0,
        unit: null,
        ingredients: [],
    }),
    beforeMount(){
        //get info recipe
        axios.get(api + '/recipes/' + this.$route.params.idRecipe)
        .then( response => {
            this.idRecipe = response.data.idRecipe;
            this.title = response.data.title;
            this.description = response.data.description;
        }).catch( function (error) { console.log(error)})
        //get info ingredients
        axios.get(api + '/recipes/' + this.$route.params.idRecipe + '/ingredients')
        .then( response => {
            this.ingredients = response.data;
        }).catch( function (error) { console.log(error)})
    },
    methods:{
        deleteIngredient(id){
            console.log(api + '/recipe/'+this.idRecipe+'/'+id)
            axios.delete(api + '/recipe/'+this.idRecipe+'/'+id)
            .catch( function (error) { console.log(error)})
            alert("ingrediente eliminado.");
            window.location.reload();
            
        },
        
    } 
}
</script>
