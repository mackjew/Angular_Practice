import { ShoppingListService } from './../../shared/shoppinglist.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const emit = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.shopListService.addIngredient(emit);
  }

}
