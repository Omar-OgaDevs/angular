import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceroComponent } from './core/cabecero/cabecero.component';
import { TableroComponent } from './core/tablero/tablero.component';
import { ClientesComponent } from './core/clientes/clientes.component';
import { EditarClienteComponent } from './core/editar-cliente/editar-cliente.component';
import { LoginComponent } from './core/login/login.component';
import { RegistroComponent } from './core/registro/registro.component';
import { ConfiguracionComponent } from './core/configuracion/configuracion.component';
import { NoEncontradoComponent } from './core/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './core/pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
