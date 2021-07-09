import { NewOperationComponent } from './new-operation/new-operation.component';
import { NgModule } from '@angular/core';
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
