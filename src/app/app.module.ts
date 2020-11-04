import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EssaiComponent } from './essai/essai.component';
import { FormsModule } from '@angular/forms';
import { TrialComponent } from './trial/trial.component';

@NgModule({
  declarations: [
    AppComponent,
    EssaiComponent,
    TrialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
