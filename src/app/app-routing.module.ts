import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
  {path: '', redirectTo: '/types', pathMatch: 'full'},
  {path: 'types', component: TypeComponent}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
