<template>
    <div class="recipe">
        <center>
            <table>
                <th> {{ title }} <router-link v-bind:to="'/'+idRecipe+'/update'" tag="button" align=LEFT>Editar</router-link></th>
                <tr v-for="i in ingredients" v-bind:key="i.idIngredient">
                    <td> {{ i.quantity }}  ({{ i.unit }})  {{ i.name }} </td>
                </tr>
                <tr>
                    <td>Descripcion: {{ description }} </td>
                </tr>
                    <td>
                        Ingredientes:
                        <router-link v-bind:to="'/' + idRecipe + '/deleteIngredient'" tag="button">Editar</router-link>
                    </td>
            </table>
            <router-link to="/" tag="button">Volver</router-link>
        </center>
    </div>    
</template>

<script>
import axios from "axios";
const api = "http://localhost:8080/api";

export default {
    name: 'recipe',
    data: () => ({
        idRecipe : 0,
        title: null,
        description: null,
        idIngredient: 0,
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
    }
}
</script>
