import { Component, OnInit } from '@angular/core';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import { Cliente } from 'src/app/modelo/cliente.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] | undefined;
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  constructor(private clientesServicio: ClienteServicio,
              private _flashMessagesService: FlashMessagesService ) { }

  ngOnInit() {
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }
  getSaldoTotal() {
    let saldoTotal: number = 0;
    if (this.clientes) {
      this.clientes.forEach(cliente => {
        saldoTotal += cliente.saldo;
      })
    }
    return saldoTotal;
  }
  agregar({value, valid}: {value: Cliente, valid: boolean}){
    if(!valid){
      this._flashMessagesService.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 3000
      });
    }
    else {
      //Agregar el nuevo cliente
    }
  }

}
