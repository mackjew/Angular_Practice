import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './header/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shared/shoppinglist.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
