import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { RadioComponent } from './radio/radio.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'radio',
    component:RadioComponent
  },
  {
    path:'calculator',
    component:CalculatorComponent
  },
  {
    path:'todo',
    component:TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
