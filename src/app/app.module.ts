import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrugsComponent } from './drugs/drugs.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllDrugsComponent } from './view-all-drugs/view-all-drugs.component';
import { UpdateDrugsComponent } from './update-drugs/update-drugs.component';

@NgModule({
  declarations: [
    AppComponent,
    DrugsComponent,
    ViewAllDrugsComponent,
    UpdateDrugsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
