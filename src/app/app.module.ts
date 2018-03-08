import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TypeComponent } from './type/type.component';
import { AppRoutingModule } from './/app-routing.module';

import { TypeService } from './services/type.service';
import { TypeEditComponent } from './type-edit/type-edit.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TypeComponent,
    TypeEditComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TypeService, 
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
