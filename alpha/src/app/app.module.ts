import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, SETTINGS} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { ListclientsComponent } from './core/listclients/listclients.component';
import { EditComponent } from './core/edit/edit.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { ConfigurationComponent } from './core/configuration/configuration.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ListclientsComponent,
    EditComponent,
    LoginComponent,
    RegisterComponent,
    ConfigurationComponent,
    NotfoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, "control-clientes"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
