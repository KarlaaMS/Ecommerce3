import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from '../register/register.component';
import { AccederComponent } from './acceder/acceder.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [{
  path: 'register',
  component: RegisterComponent
}, 
{ path: 'acceder', 
  component: AccederComponent 
},
{ path: '', 
  component: CardsComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
