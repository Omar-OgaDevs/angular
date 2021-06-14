import { ClienteServicio } from './../../servicios/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] | undefined;

  constructor(private clienteServicio: ClienteServicio) { }

  ngOnInit(): void {
    this.clienteServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }
}
