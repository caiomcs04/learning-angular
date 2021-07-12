import { Transfer } from './../service/models/transfer.model';
import { TransferService } from './../service/transfer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  transferProps!: any[];

  constructor(private service: TransferService) {

   }

  ngOnInit(): void {
    this.service.getAll().subscribe((transfer: Transfer[]) =>{
      console.table(transfer)
      this.transferProps = transfer
    })
  }

}
