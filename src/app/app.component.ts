import { Component } from "@angular/core";
import { InfoPaginaService } from "./services/info-pagina.service";
import { ProductosService } from "./services/productos.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.styl"]
})
export class AppComponent {
  constructor(
    public _infoPaginaService: InfoPaginaService,
    public productosService: ProductosService
  ) {}
}
