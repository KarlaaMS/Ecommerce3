import { Component, inject } from '@angular/core';
import {RouterLink, RouterOutlet,RouterLinkActive, RouterModule} from '@angular/router';
import { RegisterComponent } from '../register/register.component';


@Component({
  // standalone: true,
  // imports: [RouterLink, RouterLinkActive, RouterOutlet, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PETSPA';
  slogan = '"Un día de spa para tu mejor amigo peludo"';
}
