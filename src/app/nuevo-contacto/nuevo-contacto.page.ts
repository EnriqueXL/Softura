import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';

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
  constructor(private http: HttpClient,
    public alertController: AlertController,
    public navCtrl:NavController) { }

  ngOnInit() {
  }

  async nuevoContacto(){
    this.http.get("http://localhost/apiSoftura/insert1.php?nombre="+this.datos.nombre+"&correo="+this.datos.correo+"&telefono="+this.datos.telefono+"&fecha="+this.datos.fecha).subscribe(
      snap=>{

      }
    )

    const alert = await this.alertController.create({
      header:'Datos almacenados!',
       message: 'Se agregó un nuevo usuario',
       buttons: ['Aceptar']
       
     });
 
     await alert.present();
     this.navCtrl.navigateRoot('inicio');
    
  }
  

}
