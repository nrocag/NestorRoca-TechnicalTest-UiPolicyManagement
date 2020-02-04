import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PolicyNewComponent } from './policy-new/policy-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PolicyEditComponent } from './policy-edit/policy-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent,
    PolicyNewComponent,
    LoginComponent,
    PolicyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
