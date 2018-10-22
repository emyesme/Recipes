import Vue from 'vue'
import Router from 'vue-router'
import Recipes from '@/components/recipes'
import Recipe from '@/components/recipe'
import NewIngredients from '@/components/newIngredients'
import Update from '@/components/update'
import DeleteIngredient from '@/components/deleteIngredient'
import UpdateIngredient from '@/components/updateIngredient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recipes',
      component: Recipes
    },
    {
      path: '/Recipe/:idRecipe',
      name:'Recipe',
      component: Recipe
    },
    {
      path:'/:idRecipe/newIngredients',
      name: 'NewIngredients',
      component: NewIngredients 
    },
    {
      path:'/:idRecipe/update',
      name: 'Update',
      component: Update
    },
    {
      path:'/:idRecipe/deleteIngredient',
      name: 'DeleteIngredient',
      component:DeleteIngredient
    },
    {
      path:'/:idRecipe/:idIngredient',
      name:'UpdateIngredient',
      component:UpdateIngredient
    }
  ]
})
