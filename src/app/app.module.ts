import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './components/dashboard/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { ListUsuariosComponent } from './components/dashboard/list-usuarios/list-usuarios.component';
import { CardUsuarioComponent } from './components/dashboard/list-usuarios/card-usuario/card-usuario.component';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';
import { LoadingComponent } from './components/dashboard/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ListUsuariosComponent,
    FooterComponent,
    LayoutComponent,
    CardUsuarioComponent,
    UsuarioComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
