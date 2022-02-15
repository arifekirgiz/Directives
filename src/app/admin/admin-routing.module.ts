import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NatureComponent } from './nature/nature.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {path  :"people" , component:PeopleComponent},
  {path : "nature" , component : NatureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
