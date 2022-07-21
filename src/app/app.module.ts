import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
