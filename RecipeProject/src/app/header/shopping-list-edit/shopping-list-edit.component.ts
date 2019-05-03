import { Ingredient } from './../ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  shoppingItemName: string;
  shoppingItemAmount: number;
  @Output() addItemEmitter = new EventEmitter<Ingredient>();
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const emit = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.addItemEmitter.emit(emit);
  }

}
