import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Contactos', url: '/contactos', icon: 'people'},
    { title: 'Nuevo contacto', url: '/nuevo-contacto', icon: 'person-add' },
    
  ];
 
  constructor() {}
}
