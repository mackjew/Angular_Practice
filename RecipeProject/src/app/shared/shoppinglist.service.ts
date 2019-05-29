import { OnDestroy } from '@angular/core';

import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService implements OnDestroy {
  ingredientsChanged = new Subject<Ingredient[]>();
  startEditing = new Subject();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingred: Ingredient) {
    this.ingredients.push(ingred);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, ingred: Ingredient) {
    this.ingredients[index] = ingred;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  ngOnDestroy() {
    console.log('ShoppingListService destoryed!!!');
  }
}
