import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//la libreria de abajo permite las llamadas asincronicas
import { of, Observable } from 'rxjs';
import { ArticuloFamilia } from '../models/articulo-familia';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticulosFamiliasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl =
      environment.ConexionWebApiProxy + 'articulosfamilias' + '/';
  }
  get() {
    return this.httpClient.get(this.resourceUrl);
  }
}
