import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";

const routes: Routes = [
  {
    path: 'one',
    component: OneComponent
  },
  {
    path: 'two',
    component: TwoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'one'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
