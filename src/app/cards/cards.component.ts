import { Component } from '@angular/core';

interface Card {
  title: string;
  subtitle: string;
  content: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards: Card[] = [
    {
      title: 'Servicio de SPA',
      subtitle: 'Relaja a tu mascota',
      content: 'Ofrecemos un servicio completo de spa para tu mascota, asegurando su bienestar y relajación con productos de alta calidad.'
    },
    {
      title: 'Vacunación',
      subtitle: 'Protege a tu mascota',
      content: 'Contamos con un servicio de vacunación profesional para garantizar la salud y seguridad de tu mascota.'
    },
    {
      title: 'Consulta Médica Básica',
      subtitle: 'Cuida su salud',
      content: 'Ofrecemos consultas médicas básicas para atender cualquier inquietud de salud que tengas sobre tu mascota.'
    },
    {
      title: 'Paseo para Mascotas',
      subtitle: 'Diversión y ejercicio',
      content: 'Nuestros paseadores se encargan de llevar a tu mascota a pasear, asegurando que se mantenga activa y feliz.'
    },
    {
      title: 'Adopción',
      subtitle: 'Dale un hogar',
      content: 'Visita nuestro centro de adopción y descubre cómo puedes darle una nueva vida a un animalito.'
    }
  ];
}
