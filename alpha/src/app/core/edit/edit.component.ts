import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/modelo/cliente.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    cliente: Cliente = {
    nombre:'',
    apellido:'',
    email:'',
    saldo: 0
  }

  id!:string;

  constructor(private clientesServicio: ClienteService,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio.getCliente(this.id).subscribe(cliente =>{
      this.cliente = cliente;
    });
  }

  guardar({value, valid}:NgForm){
    if(!valid){
      this.flashMessages.show('Por favor llena el formulario correctamente',{
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      value.id = this.id;
      //Modificar Cliente
      this.clientesServicio.modificarCliente(value);
      this.router.navigate(['/']);
    }
  }

  eliminar(){
    if(confirm('¿Seguro que desea eliminar este cliente?')){
      this.clientesServicio.eliminarCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }

}
