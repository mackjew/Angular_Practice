import { ShoppingListService } from './../../shared/shoppinglist.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [];

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopListService.getIngredients();
    this.shopListService.ingredientsChanged.subscribe((ingred: Ingredient[]) => this.ingredients = ingred);
  }
}
