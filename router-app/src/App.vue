<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  td{
    background: black;    
    font-family:initial;
    text-align: left;
    color:azure;
    padding:10px;
    font-size:15pt;  
  }  
  th{
    background:rgb(52, 138, 52);
    font-family:initial;
    text-align:center;
    color:whitesmoke;
    padding:10px;
    font-size:15pt;
  }
  button{
    background:lightgray;
    font-family:initial;
    font-size:15pt;
    text-align:center;
    padding:5px;    
    color:black;
  }
  html{
    background:maroon;
  }
</style>
