import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TypeComponent } from './type/type.component';
import { AppRoutingModule } from './/app-routing.module';

import { TypeService } from './services/type.service'; 

@NgModule({
  declarations: [
    AppComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
    AppRoutingModule
  ],
  providers: [TypeService, 
		HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
