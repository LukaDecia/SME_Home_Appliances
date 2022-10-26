import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';

@Injectable({ providedIn: 'root' })
export class ArticulosService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = "https://pav2.azurewebsites.net/api/articulos/";
  }

  get(Nombre: string, Activo: boolean, Pagina: number) {
    let params = new HttpParams();
    //comprueba que no haya null y los agrega a una variable de parametros para la busqueda
    if (Nombre != null) {
      params = params.append('Nombre', Nombre);
    }
    if (Activo != null) {
      params = params.append('Activo', Activo.toString());
    }
    params = params.append('Pagina', Pagina.toString());

    return this.httpClient.get(this.resourceUrl, { params: params });
  }

  getById(Id: number) {
    return this.httpClient.get(this.resourceUrl + Id);
  }

  post(obj: Articulo) {
    return this.httpClient.post(this.resourceUrl, obj);
  }

  put(Id: number, obj: Articulo) {
    return this.httpClient.put(this.resourceUrl + Id, obj);
  }

  delete(Id) {
    return this.httpClient.delete(this.resourceUrl + Id);
  }
}
