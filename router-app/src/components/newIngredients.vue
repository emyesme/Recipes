<template>
    <div class ="newIngredients">
        <center>
            <table>
                <th>
                    Titulo: {{ title }}
                </th>
                <th>
                    ID: {{ idRecipe }}
                </th>
                <tr>
                    <button @click="plus">+</button>
                    <button @click="less">-</button>
                </tr>
                 <tr v-for="i in count" v-bind:key="i">
                    <td>Ingrediente  {{ i }} </td>
                    <td> Nombre : </td>
                    <td><input  v-bind:id="'name_'+i" type="text" placeholder="nombre"></td>
                    <td> Cantidad : </td>
                    <td><input v-bind:id="'quantity_'+i" type="text" placeholder="cantidad"></td>
                    <td> Unidad : </td>
                    <td><input v-bind:id="'unit_'+i" type="text" placeholder="unidad"></td>
                </tr>
                <button @click="addIngredients">Guardar</button>
                <router-link v-bind:to="'/Recipe/' + idRecipe" tag="button">Terminar</router-link>
            </table>
        </center>
    </div>

</template>


<script>

import axios from 'axios';
const api = "http://localhost:8080/api";

export default {
    name:'newIngredients',
    data: () => ({
        count:0,
        title:null,
        name: null,
        unit: null,
        quantity: 0,
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
    },
    methods:{
        plus(){
            if (this.count < 10) {
                this.count++;
            }
            if(this.count == 10){
                alert("Se pueden agregar maximo 10 ingredientes.")
            }
        },
        less(){
            if (this.count > 0){
                this.count--;
            }
        },
        addIngredients(){
            for (var i=1;i<=this.count;i++){
                this.name = document.getElementById("name_"+i).value;
                this.unit = document.getElementById("unit_"+i).value;
                this.quantity = document.getElementById("quantity_"+i).value;
                if(this.name == "" || this.unit == "" || this.quantity == 0){
                    alert("Existen campos vacios")
                    return
                }
                console.log(api+"/recipe/"+this.idRecipe)
                axios.post(api+"/recipe/"+this.idRecipe,
                {idRecipe: this.idRecipe, name:this.name, quantity:Number(this.quantity), unit:this.unit})
                .catch( function (error) { console.log(error)})   
            }
            alert("Ingredientes agregados exitosamente.");
            this.count=0;
        }

    }
}
</script>

