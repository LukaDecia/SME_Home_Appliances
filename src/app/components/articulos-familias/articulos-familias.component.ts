import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from '../../models/articulo-familia';
import { ArticulosFamiliasService } from '../../services/articulos-familias.service';
import { MockArticulosFamiliasService } from '../../services/mock-articulos-familias.service';

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css'],
})
export class ArticulosFamiliasComponent implements OnInit {
  //se definen los atributos de la clase ArticulosFamilias
  Titulo = 'Articulos Familias';
  //Items = ArticulosFamilias;
  Items: ArticuloFamilia[] = [];
  constructor(
    private articulosFamiliasService: ArticulosFamiliasService //private articulosFamiliasService: MockArticulosFamiliasService
  ) {}

  ngOnInit() {
    //funcion load, es decir, cuando comience a mostrarse este componente
    this.GetFamiliasArticulos();
  }

  GetFamiliasArticulos() {
    //le pido al servicio el array y luego lo guardo en el atributo items
    this.articulosFamiliasService.get().subscribe((res: ArticuloFamilia[]) => {
      this.Items = res;
    });
  }
}
