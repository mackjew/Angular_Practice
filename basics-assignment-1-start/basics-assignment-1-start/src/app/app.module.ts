import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoodAlertComponent } from './GoodAlert/goodalert.component';
import { BadAlertComponent } from './badalert/badalert.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodAlertComponent,
    BadAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
