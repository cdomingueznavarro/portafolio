// tslint:disable-next-line:quotemark
import { NgModule } from "@angular/core";
// tslint:disable-next-line:quotemark
import { Routes, RouterModule } from "@angular/router";
// tslint:disable-next-line: quotemark
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
// tslint:disable-next-line:quotemark
import { AboutComponent } from "./pages/about/about.component";
// tslint:disable-next-line: quotemark
import { ItemComponent } from "./pages/item/item.component";
import { SearchComponent } from "./pages/search/search.component";

const app_routes: Routes = [
  // tslint:disable-next-line:quotemark
  { path: "home", component: PortafolioComponent },
  { path: "about", component: AboutComponent },
  // tslint:disable-next-line:quotemark
  { path: "item/:id", component: ItemComponent },
  { path: "search/:termino", component: SearchComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
