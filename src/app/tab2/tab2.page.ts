import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false
})
export class Tab2Page {
  estados = [
    {
      username: "Laura Medrano",
      time: "Hace 50 minutos",
      avatarUrl: "https://th.bing.com/th/id/R.b5fa24bcc0cc7bcab59048ea4d69c33c?rik=MlsUVn3KoWK78Q&pid=ImgRaw&r=0",
    },
    {
      username: "Fernando Garcia",
      time: "Hace 5 horas",
      avatarUrl: "https://th.bing.com/th/id/R.a5818f72c381dd4acd98dc5e37393485?rik=JHzCNLy9Da2vYg&pid=ImgRaw&r=0",
    },
    {
      username: "Daniel Flores",
      time: "Hace 12 horas",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
    }
  ];

  constructor() {}
}
