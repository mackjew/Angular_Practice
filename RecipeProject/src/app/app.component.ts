import { Component, OnInit } from '@angular/core';
import { Recipe } from './header/recipe.model';
import { RecipeService } from './shared/recipe.service';
import { ShoppingListService } from './shared/shoppinglist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})

export class AppComponent implements OnInit {
  title = 'RecipeProject';
  showRecipe: boolean = true;
  showShoppingList: boolean = false;

  constructor(private recipeService: RecipeService, private shopListService: ShoppingListService) { }

  ngOnInit() {
  }

  onNavigate(sectionToShow: string) {
    if (sectionToShow === 'recipe') {
      this.showRecipe = true;
      this.showShoppingList = false;
    }
    else if (sectionToShow === 'shoppingList') {
      this.showRecipe = false;
      this.showShoppingList = true;
    }
  }

}
