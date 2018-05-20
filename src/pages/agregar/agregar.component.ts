import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';


@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarComponent {
    nombreLista: string = '';
    nombreItem: string = '';

    listas: Lista[] = [];
    items: ListaItem[] = [];

    constructor(
        public alertCtrl: AlertController,
        public navCtrl: NavController,
        public listaDeseosService: ListaDeseosService
    ) { }

    agregar() {
        if (this.nombreItem.length == 0) {
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = '';
    }

    borrar(i: number) {
        this.items.splice(i, 1);
    }

    guardarLista() {
        if (this.nombreLista.length == 0) {
            this.showAlert(
                'Nombre de la lista',
                'El nombre de la lista es necesario!'
            );
            return;
        }

        let lista = new Lista(this.nombreLista);
        lista.items = this.items;

        // this.listaDeseosService.listas.push(lista);
        this.listaDeseosService.agregarLista(lista);
        this.navCtrl.pop();
    }

    showAlert(titulo: string, subtitulo: string) {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subtitulo,
            buttons: ['OK']
        });
        alert.present();
    }


}
