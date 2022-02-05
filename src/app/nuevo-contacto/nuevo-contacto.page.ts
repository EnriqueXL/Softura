import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.page.html',
  styleUrls: ['./nuevo-contacto.page.scss'],
})
export class NuevoContactoPage implements OnInit {

  listado: Object;

  datos: any = {
    nombre: '',
    correo: '',
    telefono:'',
    fecha: '',
    
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  save(){
    this.http.get("http://localhost/apiSoftura/insert1.php?nombre="+this.datos.nombre+"&correo="+this.datos.correo+"&telefono="+this.datos.telefono+"&fecha="+this.datos.fecha).subscribe(
      snap=>{

      }
    )
  }

}
