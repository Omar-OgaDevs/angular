import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../modelo/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listclients',
  templateUrl: './listclients.component.html',
  styleUrls: ['./listclients.component.css']
})
export class ListclientsComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clientesServicio: ClienteService) { }

  ngOnInit(): void {
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

//  getSaldoTotal(){
//    let saldoTotal: number = 0;
//
//    if(this.clientes){
//      this.clientes.forEach(cliente =>{
//        saldoTotal += cliente.saldo;
//      })
//    }
//    return saldoTotal;
//  }
}
