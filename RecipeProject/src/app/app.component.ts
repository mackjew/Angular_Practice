import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './header/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RecipeProject';
  showRecipe: boolean = true;
  showShoppingList: boolean = false;
  recipeToPass: Recipe;

  onNavigate(sectionToShow: string) {
    if(sectionToShow === 'recipe')
    {
      this.showRecipe = true;
      this.showShoppingList = false;
    }
    else if(sectionToShow === 'shoppingList')
    {
      this.showRecipe = false;
      this.showShoppingList = true;
    }
  }

}
