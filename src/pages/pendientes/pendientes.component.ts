import { Component } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController } from "ionic-angular";
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'
})
export class PendientesComponent {
    constructor(public listaDeseosService: ListaDeseosService,
        private navCtrl: NavController
    ) { }

    irAgregar() {
        this.navCtrl.push(AgregarComponent);
    }
}
