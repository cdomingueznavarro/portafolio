import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { InfoPagina } from "../interfaces/info-pagina.interfaces";

@Injectable({
  providedIn: "root"
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    // console.log("Servicio de infoPagina listo");

    this.cargarInfo();
    this.cargarEquipo();
  }

  //Leer el archivo JSON
  private cargarInfo() {
    this.http
      .get("assets/data/data-pagina.json")
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http
      .get("https://angular-html-6206a.firebaseio.com/equipo.json")
      .subscribe((resp: any[]) => {
        this.equipo = resp;
        //console.log(resp);
        //console.log(resp);
      });
  }
}
