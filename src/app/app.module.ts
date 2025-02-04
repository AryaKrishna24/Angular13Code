import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from 'src/components/reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackenddbComponent } from 'src/components/backenddb/backenddb.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    BackenddbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
