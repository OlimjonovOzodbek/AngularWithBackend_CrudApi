import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BodyComponent } from './component/body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './component/create/create.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from './component/update/update/update.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, BodyComponent, CreateComponent, UpdateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
