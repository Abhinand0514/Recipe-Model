import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
{path:'',redirectTo:'/recipes',pathMatch:'full'},
{path:'recipe',component:RecipeComponent,children:[
  {path:'',component:RecipeStartComponent},
  {path:'new',component:RecipeEditComponent},
  {path:':id',component:RecipeDetailsComponent},
  {path:':id/edit',component:RecipeEditComponent}
]},
{path:'shopping-list',component:ShoppingListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
