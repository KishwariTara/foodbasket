import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { FoodComponent } from './food/food.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {path:'create', component:CreateComponent},
  {path:'create/:id', component:CreateComponent},
  {path:'read',component:ReadComponent},
  {path:'food',component:FoodComponent},
  {path:'details',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
