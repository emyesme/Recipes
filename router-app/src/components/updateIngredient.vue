<template>
    <div class ="updateIngredient">
        <center>
            <table>
                <th>Modificar Ingrediente {{ idIngredient }} </th>
                 <tr>
                    <td> Nombre : </td>
                    <td><input  id="name" type="text" v-model="name"></td>
                    <td> Cantidad : </td>
                    <td><input id="quantity" type="text" v-model="quantity"></td>
                    <td> Unidad : </td>
                    <td><input id="unit" type="text" v-model="unit"></td>
                </tr>
                <button @click="updateIngredient">Guardar</button>
                <router-link v-bind:to="'/'+idRecipe+'/deleteIngredient'" tag="button">Terminar</router-link>
            </table>
        </center>
    </div>

</template>


<script>

import axios from 'axios';
const api = "http://localhost:8080/api";

export default {
    name:'updateIngredient',
    data: () => ({
        title:null,
        name: null,
        unit: null,
        quantity: 0,
        idIngredient:0,
        idRecipe:0,
        description:null,

    }),
    beforeMount(){
        axios.get(api + '/recipes/' + this.$route.params.idRecipe)
        .then( response => {
            this.idRecipe = response.data.idRecipe;
            this.title = response.data.title;
            this.description = response.data.description;
        }).catch( function (error) { console.log(error)})
        axios.get(api + '/recipes/'+this.$route.params.idRecipe + '/' +this.$route.params.idIngredient)
        .then( response => {
            this.idIngredient = response.data.idIngredient;
            this.name = response.data.name;
            this.unit = response.data.unit;
            this.quantity = response.data.quantity;
        }).catch( function (error) { console.log(error)})
    },
    methods:{
        updateIngredient(){
            this.name = document.getElementById("name").value;
            this.unit = document.getElementById("unit").value;
            this.quantity = document.getElementById("quantity").value;
            axios.put(api+'/recipe/'+this.idRecipe+'/'+this.idIngredient,
            { idIngredient:this.idIngredient,
            idRecipe:this.idRecipe,
            name:this.name,
            quantity:Number(this.quantity),
            unit:this.unit}).catch( function (error) { console.log(error)})
            alert("cambios guardados exitosamente.")
        }
    }
}
</script>