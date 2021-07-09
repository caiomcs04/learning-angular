import { NewOperationComponent } from './new-operation/new-operation.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  /*Aqui deve ser declarado todos os componentes que serão usados*/
  declarations: [
    AppComponent,
    NewOperationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
