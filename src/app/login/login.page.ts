import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /* Atributo */
  formularioLogin: FormGroup; 

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl:NavController,
    public menuCtrl:MenuController) { 

    /* Iniciamos formulario */
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;
    
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('Ingresado','true');
      this.navCtrl.navigateRoot('inicio');
    }else{
      const alert = await this.alertController.create({
        header:'Datos incorrectos',
         message: 'Los datos no son correctos',
         buttons: ['Aceptar']
       });
   
       await alert.present();

    }
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
