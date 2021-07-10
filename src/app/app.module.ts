import { NewOperationComponent } from './new-operation/new-operation.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExtractComponent } from './extract/extract.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'

/*Esse methodo do angular serve para fazer a localização da data.
necessário importar tanto o metodo quando a variavel localePt*/
registerLocaleData(localePt, 'pt')

@NgModule({
  /*Aqui deve ser declarado todos os componentes que serão usados*/
  declarations: [
    AppComponent,
    NewOperationComponent,
    ExtractComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    /*Aqui em providers será declarada as localizações tanto de data
    quanto de valor monetario para nosso aplicativo*/
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
