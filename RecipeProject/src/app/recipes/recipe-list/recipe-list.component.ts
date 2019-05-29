import { Subscription } from 'rxjs';
import { RecipeService } from '../../shared/recipe.service';
import { Recipe } from '../../shared/recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  public recipes: Recipe[];
  serviceSub: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private curRoute: ActivatedRoute) { }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.curRoute});
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.serviceSub = this.recipeService.recipesChanged.subscribe(
      (recipeList: Recipe[]) => {
        this.recipes = recipeList;
      }
    );
  }

  ngOnDestroy() {
    this.serviceSub.unsubscribe();
  }
}
