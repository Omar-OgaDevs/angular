import { ConfigurationService } from 'src/app/services/configuracion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn!: boolean;
  loggedInUser!: string;
  permitirRegistro!: boolean;
  configuracion: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private configuracionService: ConfigurationService
  ) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe( auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }
      else{
        this.isLoggedIn = false;
      }
    });

    this.configuracionService.getConfiguracion().subscribe( configuracion => {
      this.permitirRegistro = this.configuracion.permitirRegistro;
    })
  }
  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
