import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  recipeForm: FormGroup;
  /*used to recognize edit mode or add mode*/
  editMode = false;

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initFormRecipe();
    });
  }

  private initFormRecipe(): void {
    let recipeName = '';
    let recipeDescription = '';
    let imageUrl = '';
    /*retrive data from Recipe for edit mode*/
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      imageUrl = recipe.imageURL;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imageURL: new FormControl(imageUrl, Validators.required),
      description: new FormControl(recipeDescription, Validators.required)
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
