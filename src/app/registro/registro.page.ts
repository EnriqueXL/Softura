import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
   
  /* Atributo */
   formularioRegistro: FormGroup; 

  constructor(public fb: FormBuilder,
    public alertController:AlertController,
    public navCtrl:NavController,
    public menuCtrl: MenuController) {
    /* Iniciamos formulario */
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionPassword': new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }

  /* Evento */
  async guardar(){
    var f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
       header:'Datos incompletos',
        message: 'Todos los campos deben estar llenos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      /* Evito que la función continue */
      return;
    }

    var usuario ={
      nombre: f.nombre,
      password: f.password
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));
    localStorage.setItem('Ingresado','true');
      this.navCtrl.navigateRoot('inicio');
    
  }

  ionViewDidEnter() {
    // el menú de la raíz izquierda debe estar deshabilitado en esta página
    this.menuCtrl.enable(false);
    }
    ionViewWillLeave () {
    // habilita el menú raíz izquierdo al salir de esta página
      this.menuCtrl.enable (true);
    }
}
