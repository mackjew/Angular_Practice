import { FormGroup, FormControl, FormArray,  Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeEditForm: FormGroup;

  constructor(private curRoute: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.curRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '', recipeImagePath = '', recipeDescription = '';
    const recipeIngred = new FormArray([]);

    if (this.editMode) {
      const curRecipe = this.recipeService.getRecipe(this.id);
      recipeName = curRecipe.name;
      recipeImagePath = curRecipe.imagePath;
      recipeDescription = curRecipe.description;
      if(curRecipe['ingredients']) {
        for(let ingred of curRecipe.ingredients.slice()) {
          recipeIngred.push(
            new FormGroup(
              {
                'name': new FormControl(ingred.name, [Validators.required]),
                'amount': new FormControl(ingred.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
              }
            )
          );
        }
      }
    }

    this.recipeEditForm = new FormGroup(
      {
        'name': new FormControl(recipeName, [Validators.required]),
        'imagePath': new FormControl(recipeImagePath, [Validators.required]),
        'description': new FormControl(recipeDescription, [Validators.required]),
        'ingredients': recipeIngred
      }
    );
  }

  getControls() {
    const rtn = this.recipeEditForm.get('ingredients') as FormArray;
    return rtn.controls;
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeEditForm.get('name').value,
    //   this.recipeEditForm.get('description').value,
    //   this.recipeEditForm.get('imgPath').value,
    //   this.recipeEditForm.get('ingredients').value
    // ); this is the same as this.recipeEditForm.value
    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeEditForm.value);
    }
    else {
      this.recipeService.addRecipe(this.recipeEditForm.value);
    }

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.curRoute});
  }

  onAddIngredient() {
    (this.recipeEditForm.get('ingredients') as FormArray).push(new FormGroup(
      {
        'name': new FormControl(null, [Validators.required]),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      }
    ));
  }

  onDeleteIngredient(index: number) {
    (this.recipeEditForm.get('ingredients') as FormArray).removeAt(index);
  }

}
