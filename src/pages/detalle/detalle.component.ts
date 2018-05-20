import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';



@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

    idx: number;
    lista: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public listaDeseosService: ListaDeseosService,
        public alertCtrl: AlertController
    ) {
        this.idx = navParams.get('idx');
        this.lista = navParams.get('lista');
    }

    actualizar(item: ListaItem) {
        item.completado = !item.completado;
        let todosMarcados = true;
        for (let item of this.lista.items) {
            if (!item.completado) {
                todosMarcados = false;
                break;
            }
        }

        this.lista.terminada = todosMarcados;
        this.listaDeseosService.actualizarData();
    }

    borrar() {
        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: '¿Estás seguro de borrar esta lista?',
            buttons: ['Cancelar',
                {
                    text: 'Eliminar',
                    handler: () => {
                        // console.log('Agree clicked');
                        this.listaDeseosService.borrarLista(this.idx);
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    }

    /*borrar() {
        this.listaDeseosService.borrarLista(this.idx);
        this.showConfirm();
    }*/

    ngOnInit(): void { }
}
