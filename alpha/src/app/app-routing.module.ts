import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './core/configuration/configuration.component';
import { EditComponent } from './core/edit/edit.component';
import { LoginComponent } from './core/login/login.component';
import { MainComponent } from './core/main/main.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { RegisterComponent } from './core/register/register.component';
import { AuthGuard } from './guardianes/auth.guard';

const routes: Routes = [
  {path: '', component: MainComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'configuration', component: ConfigurationComponent, canActivate:[AuthGuard]},
  {path: 'listclients/edit/:id', component: EditComponent, canActivate:[AuthGuard]},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
