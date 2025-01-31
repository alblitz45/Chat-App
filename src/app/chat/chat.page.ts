import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: false
})
export class ChatPage implements OnInit {

  chats:any[] = [
    {
      username:"Jaime HR",
      message:"Bienvenido al curso de DM",
      date:"13:44",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
