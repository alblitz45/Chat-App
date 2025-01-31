import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  chats: any[] = [
    {
      "username": "Diego Vargas",
      "message": "¡Hola a todos! Listos para la sesión.",
      "date": "13:44",
      "avatarUrl": "https://th.bing.com/th/id/OIP.9b3pS30llDmG8ABubFlH6AHaHb?rs=1&pid=ImgDetMain"
    },
    {
      "username": "Lucía Mendoza",
      "message": "¿Cuándo envían las instrucciones?",
      "date": "09:30",
      "avatarUrl": "https://frasesparafotos.top/wp-content/uploads/2023/01/fotos-perfil-facebook-gratis-300x300.jpg"
    },
    {
      "username": "Fernando Ríos",
      "message": "Acabo de terminar el reporte.",
      "date": "08:15",
      "avatarUrl": "https://b2472105.smushcdn.com/2472105/wp-content/uploads/2022/08/Fotografia-de-Retrato-20-1024x1024.jpg?lossy=1&strip=1&webp=1"
    },
    {
      "username": "Camila Estrada",
      "message": "¿Alguien tiene el material de estudio?",
      "date": "11:45",
      "avatarUrl": "https://th.bing.com/th/id/R.09bbfa6336baee5c11ec87a9e4707a6e?rik=pDZd18uIbCPM0g&pid=ImgRaw&r=0"
    },
    {
      "username": "Martín Silva",
      "message": "Nos vemos en el punto de reunión.",
      "date": "10:05",
      "avatarUrl": "https://www.dzoom.org.es/wp-content/uploads/2011/08/insp-cuadradas-1.jpg"
    },
    {
      "username": "Paula Núñez",
      "message": "Voy saliendo de casa.",
      "date": "12:20",
      "avatarUrl": "https://th.bing.com/th/id/R.b89893ea67142f221d23ee9650568f6d?rik=Ki30BSG7Q7R2LA&pid=ImgRaw&r=0"
    },
    {
      "username": "Hugo Fernández",
      "message": "Revisé la información, todo está correcto.",
      "date": "07:50",
      "avatarUrl": "https://th.bing.com/th/id/R.b03601e3a82769d0d67dc433418c3153?rik=pjJwQNS5764Q1A&pid=ImgRaw&r=0"
    },
    {
      "username": "Elena Ramírez",
      "message": "¡Buenos días, equipo!",
      "date": "06:30",
      "avatarUrl": "https://wallpapercave.com/wp/wp7111364.jpg"
    },
    {
      "username": "Santiago Morales",
      "message": "Podemos repasar juntos si quieres.",
      "date": "13:00",
      "avatarUrl": "https://th.bing.com/th/id/R.c9e0a7f1ed42d9edcf5ad7ba12d3fa8d?rik=K1G7Cw0a9RfPlA&pid=ImgRaw&r=0"
    },
    {
      "username": "Valentina Castro",
      "message": "Te envié los detalles al correo.",
      "date": "15:15",
      "avatarUrl": "https://th.bing.com/th/id/OIP.gO8NqWlTo9LZPWc2VV5lqgAAAA?rs=1&pid=ImgDetMain"
    },
    {
      "username": "Javier Ortega",
      "message": "Finalicé la presentación.",
      "date": "16:40",
      "avatarUrl": "https://th.bing.com/th/id/OIP.tBN5saEat43Y26dhKDk9egHaHa?rs=1&pid=ImgDetMain"
    },
    {
      "username": "Andrea Torres",
      "message": "¿Podemos coordinar una videollamada?",
      "date": "17:50",
      "avatarUrl": "https://i.pinimg.com/originals/9b/d1/45/9bd1452b9b0f977d8bae8d31d736adbd.jpg"
    },
    {
      "username": "Roberto Sánchez",
      "message": "El informe se entrega mañana.",
      "date": "18:30",
      "avatarUrl": "https://i.pinimg.com/736x/67/e9/21/67e921aa71120261a720a864091f87f3.jpg"
    },
    {
      "username": "Sofía Herrera",
      "message": "Intenté llamarte, pero no hubo respuesta.",
      "date": "19:20",
      "avatarUrl": "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      "username": "Daniel Vega",
      "message": "¿Puedes checar el código cuando tengas tiempo?",
      "date": "20:10",
      "avatarUrl": "https://wallpapers.com/images/hd/xbox-360-profile-pictures-glvjkc137tsrudsw.jpg"
    }
];


  constructor(private menuController: MenuController, private router: Router) {}

  abrirMenu() {
    this.menuController.open('first'); 
  }

  cerrarMenu() {
    this.menuController.close(); 
  }

  doSomething() {
    console.log('Opción seleccionada');
    this.cerrarMenu();
  }

  abrirAjustes() {
    this.router.navigate(['/ajustes']);
  }
}
