import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/listas';

// Por defecto los pipes tienen un estado puro, es decir que solo cuando la data cambia
// en ese caso se aplica, el estado impuro permite hacerle saber a angular que el filtro se 
// a aplicar cada vez que esa data va a cambiar, tiene que volver a evaluar todo.

@Pipe({
    name: 'pendientes',
    pure: false
})
export class PendientesPipe implements PipeTransform {
    transform(listas: Lista[], estado: boolean = false): Lista[] {
        let nuevaLista: Lista[] = [];
        for (let lista of listas) {
            if (lista.terminada == estado) {
                nuevaLista.push(lista);
            }
        }
        console.log('Nueva lista PIPE', nuevaLista);
        return nuevaLista;


    }
}