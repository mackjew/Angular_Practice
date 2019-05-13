
import { Recipe } from '../header/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../header/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', []),
    new Recipe('Fish Recipe', 'Cook the fish', 'https://thumbs-prod.si-cdn.com/qXrJJ-l_jMrQbARjnToD0fi-Tsg=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg', [new Ingredient('Fish', 1), new Ingredient('Oil', 2), new Ingredient('Salt', 1)]),
    new Recipe('Chicken Recipe', 'Cook the chicken', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFl00_xsx9ItRPlD7Ii6fG_f0cQMDOdHsosRvZs7wIrjuKLY8', [new Ingredient('Chicken', 2), new Ingredient('Salt', 2), new Ingredient('Garlic', 1), new Ingredient('Rosemary', 1), new Ingredient('Oil', 2)]),
    new Recipe('Vegetable Recipe', 'Cook the vegetable', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdwBDQZeSsqNGmobwpuZL7bAFKbaRX88NjBurbbY8EL4pbpJV', [new Ingredient('Tomato', 1), new Ingredient('Potato', 1), new Ingredient('Carrot', 1), new Ingredient('Onion', 1), new Ingredient('Bell Pepper', 1)])];

  constructor(private shopListService: ShoppingListService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  moveIngredientsToShoppingList(recipe: Recipe) {
    recipe.ingredients.forEach(
      (value: Ingredient) => {
        this.shopListService.addIngredient(value);
      }, this);
  }

  // moveIngredientsToShoppingList(recipeID: number) {
  //   let r: Recipe = this.recipes[recipeID];
  //   r.ingredients.forEach(
  //     (value: Ingredient) => {
  //       this.shopListService.addIngredient(value);
  //   }, this);

  // }
}
