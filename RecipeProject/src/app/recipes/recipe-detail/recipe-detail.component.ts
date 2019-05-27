import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  focusedRecipe: Recipe = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.focusedRecipe = recipe;
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.moveIngredientsToShoppingList(this.focusedRecipe);
  }

}
