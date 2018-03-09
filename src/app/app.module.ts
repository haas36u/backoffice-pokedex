import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TypeComponent } from './type/type.component';
import { AppRoutingModule } from './/app-routing.module';

import { TypeService } from './services/type.service';
import { TypeEditComponent } from './type-edit/type-edit.component';
import { PokemonComponent } from './pokemon/pokemon.component'; 
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { PokemonService } from './services/pokemon.service';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    TypeComponent,
    TypeEditComponent,
    PokemonComponent,
    PokemonEditComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TypeService, 
    PokemonService,
    HttpClientModule,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
