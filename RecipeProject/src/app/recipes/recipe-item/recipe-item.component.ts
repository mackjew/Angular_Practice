
import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit  {
  @Input() recipeItem: Recipe;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    if(this.index === 1) {
      console.log(this.recipeItem);
      console.log(this.recipeItem.imagePath);
    }

  }

}
