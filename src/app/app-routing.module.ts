import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {AboutComponent} from './about/about.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeNoneComponent} from './recipes/recipe-none/recipe-none.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeNoneComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
