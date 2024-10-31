import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { AppComponent } from '../app/app.component';
import { RegisterComponent } from './register.component';
import {RouterLink, RouterOutlet,RouterLinkActive, RouterModule} from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RegisterRoutingModule,
    FormsModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [RegisterComponent]
})
export class RegisterModule { }