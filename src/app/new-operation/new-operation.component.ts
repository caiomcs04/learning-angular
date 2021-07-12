import { Transfer } from './../service/models/transfer.model';
import { TransferService } from './../service/transfer.service';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  /*O selector definirá o nome da tag do component criado*/
  selector: 'new-operation',

  /*templateUrl importa o template que será usado por este componente*/
  templateUrl: './new-operation.component.html',

  /*styleUrls é responsável por importar o estilo do componente. Deve ser passado por
  um array de string. Uma vez em que podemos ter mais de uma folha de estilo
  atribuída para cada componente.*/
  styleUrls: ['./new-operation.component.scss'],
})
export class NewOperationComponent {
  /*EventEmitter serve para propagar o dado*/
  @Output() handleTransfer = new EventEmitter<any>();

  value!: number;
  destiny!: number;

  constructor(private service: TransferService) {}

  transfer() {
    const handleValue: Transfer = { value: this.value, destiny: this.destiny };

    this.service.addTransfer(handleValue).subscribe(
      (result) => {
        console.log(result);
        this.cleanTransfer();
      },
      (error) => console.log(error)
    );

    this.cleanTransfer();
  }

  cleanTransfer() {
    this.value = 0;
    this.destiny = 0;
  }
}
