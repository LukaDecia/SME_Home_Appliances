import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';
import {
  NgbDatepickerModule,
  NgbModalModule,
  NgbModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepickerI18n,
} from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbModalModule,
    NgbTypeaheadModule,
    NgbDatepickerModule,

    //define a que url corresponde cada componente a mostrar
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent },
    ]),
  ],
  entryComponents: [ModalDialogComponent],

  declarations: [
    AppComponent,
    ArticulosFamiliasComponent,
    MenuComponent,
    InicioComponent,
    ModalDialogComponent,
    ArticulosComponent,
  ],

  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
