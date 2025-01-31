import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: 'ajustes.page.html',
  styleUrls: ['ajustes.page.scss'],
  standalone: false
})
export class AjustesPage {
  notificationsEnabled: boolean = true;
  darkModeEnabled: boolean = false;

  constructor(private router: Router) {}

  changeUsername() {
    alert('Aquí podrás cambiar tu nombre de usuario.');
  }

  logout() {
    alert('Has cerrado sesión.');
    this.router.navigate(['/login']);
  }

  configurarPerfil() {
    this.router.navigate(['/perfil'])
  }
}
