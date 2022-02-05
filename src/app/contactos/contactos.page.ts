import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  listado: Object;

  constructor(private http: HttpClient) {
    this.http.get("http://localhost/apiSoftura/consult.php").subscribe(snap=>{
      console.log(snap);
      this.listado=snap;
     
    });

   }

  ngOnInit() {
  }

}
