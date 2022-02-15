import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NatureComponent } from './nature/nature.component';
import { PeopleComponent } from './people/people.component';


@NgModule({
  declarations: [
    NatureComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  
  ]
})
export class AdminModule { }
