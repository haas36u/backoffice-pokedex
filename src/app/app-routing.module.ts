import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeComponent } from './type/type.component';
import { TypeEditComponent } from './type-edit/type-edit.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/types', pathMatch: 'full'},
  {path: 'types', component: TypeComponent},
  {path: 'types/new', component: TypeEditComponent},
  {path: 'types/:slug', component: TypeEditComponent},
  {path: 'pokemons', component: PokemonComponent},
  {path: 'pokemons/new', component: PokemonEditComponent},
  {path: 'pokemons/:slug', component: PokemonEditComponent}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
