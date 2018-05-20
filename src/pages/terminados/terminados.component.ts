import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from "ionic-angular";
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-terminados',
    templateUrl: './terminados.component.html'
})
export class TerminadosComponent implements OnInit {
    constructor(public listaDeseosService: ListaDeseosService,
        private navCtrl: NavController) { }

    ngOnInit(): void { }

    /* irAgregar() {
        this.navCtrl.push(AgregarComponent);
    } */

    verDetalle(lista, idx) {
        this.navCtrl.push(DetalleComponent, {
            lista, // Es igual a lista:lista,
            idx // Es igual a idx:idx
        });
    }
}
