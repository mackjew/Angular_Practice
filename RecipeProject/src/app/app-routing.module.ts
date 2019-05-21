import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path: 'recipes', component: AppComponent },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
