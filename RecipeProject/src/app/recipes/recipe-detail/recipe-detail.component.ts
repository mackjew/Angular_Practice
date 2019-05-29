import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  focusedRecipe: Recipe = null;
  id: number;

  constructor(private recipeService: RecipeService, private curRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.curRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.focusedRecipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.moveIngredientsToShoppingList(this.focusedRecipe);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.curRoute});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.curRoute});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/']);
  }
}
