import { Component } from "@angular/core";

@Component({
    /*O selector definirá o nome da tag do component criado*/
    selector:"new-operation",

    /*templateUrl importa o template que será usado por este componente*/
    templateUrl: "./new-operation.component.html",

    /*styleUrls é responsável por importar o estilo do componente. Deve ser passado por
    um array de string. Uma vez em que podemos ter mais de uma folha de estilo
    atribuída para cada componente.*/
    styleUrls: ["./new-operation.component.scss"]
})
export class NewOperationComponent {
    title = 'learning-angular';
  }