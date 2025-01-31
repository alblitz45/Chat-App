import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false
})
export class Tab3Page {
  llamadas = [
    {
      username: "Juan Alberto",
      time: "Hoy, 5:32 PM",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      icon: "call-outline",
    },
    {
      username: "Maria Isabel",
      time: "Ayer, 8:30 PM",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      icon: "call-outline",
    },
    {
      username: "Gabriela Soto",
      time: "Hace 2 días",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      icon: "videocam-outline",
    }
  ];

  constructor() {}
}
