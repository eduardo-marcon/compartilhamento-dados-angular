import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PaiComponenteComponent } from './pai-componente/pai-componente.component';
import { FilhoComponenteComponent } from './filho-componente/filho-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponenteComponent,
    FilhoComponenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
