<template>
    <div class="update">
        <center>
            <table>
                <th>
                Titulo:
                <input type="text" v-model="title" id="title">
                </th>
                <tr>
                    <td>
                    Descripción:
                    <input type="text" v-model="description" id="description">
                    </td>
                </tr>
                <td>
                    Ingredientes:
                    <router-link v-bind:to="'/' + idRecipe + '/deleteIngredient'" tag="button">Editar</router-link>
                </td>
            </table>
            <button @click="updateRecipe">Guardar Cambios</button>
            <router-link to="/" tag="button">Terminado</router-link>
        </center>
    </div>    
</template>

<script>
import axios from "axios";
const api = "http://localhost:8080/api";

export default {
    name: 'update',
    data: () => ({
        idRecipe : 0,
        title: null,
        description: null,

    }),
    beforeMount(){
        //get info recipe
        axios.get(api + '/recipes/' + this.$route.params.idRecipe)
        .then( response => {
            this.idRecipe = response.data.idRecipe;
            this.title = response.data.title;
            this.description = response.data.description;
        }).catch( function (error) { console.log(error)})
    },
    methods:{
        updateRecipe(){
            this.title = document.getElementById("title").value
            this.description = document.getElementById("description").value
            axios.put(api +"/recipe/"+this.idRecipe ,
            { idRecipe: this.idRecipe, title: this.title, description:this.description})
            .catch( function (error) { console.log(error)})
            alert("cambios guardados exitosamente.")
        }
    }
}
</script>