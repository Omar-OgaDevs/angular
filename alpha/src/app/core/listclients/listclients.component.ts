import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from '../../modelo/cliente.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listclients',
  templateUrl: './listclients.component.html',
  styleUrls: ['./listclients.component.css']
})
export class ListclientsComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  @ViewChild("clienteForm") clienteForm: NgForm | undefined;
  @ViewChild("botonCerrar") botonCerrar: ElementRef | undefined;

  constructor(private clientesServicio: ClienteService,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }
  /*
  getSaldoTotal(){
    let saldoTotal: number = 0;

    if(this.clientes){
      this.clientes.forEach(cliente =>{
        saldoTotal+= cliente.saldo
      })
    }
    return saldoTotal;
  }
  */
  agregar({ value, valid }: NgForm) {
    if (!valid) {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 3000
      });
    }
    else {
      //Agregar el nuevo cliente
      this.clientesServicio.agregarCliente(value);
      this.clienteForm?.resetForm();
      this.cerrarModal();
    }
  }
  private cerrarModal() {
    this.botonCerrar?.nativeElement.click();
  }

}
