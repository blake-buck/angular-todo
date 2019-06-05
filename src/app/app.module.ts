import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

//Material Design Imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { DisplayList } from './display-list/display-list.component';
import { Inputter } from './inputter/inputter.component';

import { reducer } from './todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DisplayList,
    Inputter
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({tasks:reducer}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
