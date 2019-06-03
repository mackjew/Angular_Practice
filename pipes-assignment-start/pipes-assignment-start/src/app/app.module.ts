import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StringReversePipe } from './shared/string-reverse.pipe';
import { SortListPipe } from './shared/sort-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StringReversePipe,
    SortListPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
