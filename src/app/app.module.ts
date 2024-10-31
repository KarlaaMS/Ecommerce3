import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterLink, RouterOutlet,RouterLinkActive, RouterModule} from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterComponent } from '../register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AccederComponent } from './acceder/acceder.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
     AppComponent, 
     RegisterComponent, AccederComponent, CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule, 
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
