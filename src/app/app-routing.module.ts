import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreditosComponent} from './creditos/creditos.component';
import { TablasComponent } from './tablas/tablas.component'; 
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MasonryComponent } from './masonry/masonry.component';
import { RegistrocComponent } from './registroc/registroc.component';
import { CitasregistradasComponent } from './citasregistradas/citasregistradas.component';


const routes: Routes = [ 
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'creditos', component:CreditosComponent},
  {path: 'tablas', component:TablasComponent},
  {path: 'mansonry', component:MasonryComponent},
  {path: 'registroc', component:RegistrocComponent},
  {path: 'citasregistradas', component:CitasregistradasComponent},
  {path: 'busqueda/:valor', component:BusquedaComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
