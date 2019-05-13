import { RecipeService } from './../../shared/recipe.service';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent  {
  @Input() recipeItem: Recipe;

  constructor(private recipeService: RecipeService) { }

  onClick() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
