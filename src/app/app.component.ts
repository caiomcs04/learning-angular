import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-angular';

  transferProps: any[] = [];

  transfer(event : any){

    const transfer = {...event, date: new Date}
    this.transferProps.push(transfer);
    console.log(transfer)
  }
}
