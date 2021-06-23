import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from 'src/app/modelo/configuracion.model';
import { ConfigurationService } from 'src/app/services/configuracion.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  permitirRegistro? = false;

  constructor(
    private router: Router,
    private configurationService: ConfigurationService
  ) { }

  ngOnInit(): void {
    this.configurationService.getConfiguracion().subscribe(
      (configuracion: Configuracion) => {
        this.permitirRegistro = configuracion.permitirRegistro;
      }
    )
  }

  guardar(){
    let configuracion = {permitirRegistro: this.permitirRegistro};
    this.configurationService.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);
  }

  }


