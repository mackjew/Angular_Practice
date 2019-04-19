import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [ new Recipe('Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'), new Recipe('Fish Recipe', 'Cook the fish', 'https://thumbs-prod.si-cdn.com/qXrJJ-l_jMrQbARjnToD0fi-Tsg=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg'), new Recipe('Chicken Recipe', 'Cook the chicken', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFl00_xsx9ItRPlD7Ii6fG_f0cQMDOdHsosRvZs7wIrjuKLY8'), new Recipe('Vegetable Recipe', 'Cook the vegetable', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdwBDQZeSsqNGmobwpuZL7bAFKbaRX88NjBurbbY8EL4pbpJV') ];

  constructor() { }

  ngOnInit() {
  }

}
