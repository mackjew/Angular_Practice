import { ShoppingListService } from '../../shared/shoppinglist.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  mySub: Subscription;
  editMode = false; //This tells us that the shoppingListEdit component is editing a preexisting item.
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') shopListForm: NgForm;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.mySub = this.slService.startEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.shopListForm.setValue(
          {
            'name': this.editedItem.name,
            'amount': this.editedItem.amount
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.mySub.unsubscribe();
  }

  onSubmitItem(form: NgForm) {
    console.log("onAddItem() clicked");
    const value = form.value;
    const emit = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      console.log("editmode clicked");
      this.slService.updateIngredient(this.editedItemIndex, emit);
    }
    else {
      console.log("regular action clicked");
      this.slService.addIngredient(emit);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.shopListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
