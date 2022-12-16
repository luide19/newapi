import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { LogComponent } from './components/pages/log/log.component';
import { FuncaoComponent } from './components/pages/funcao/funcao.component';
import { NovofuncaoComponent } from './components/pages/funcao/novofuncao/novofuncao.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PapeisComponent } from './components/pages/papeis/papeis.component';
import { NovopapeisComponent } from './components/pages/papeis/novopapeis/novopapeis.component';
import { PerfilusuarioComponent } from './components/pages/perfilusuario/perfilusuario.component';
import { NovoperfilusuarioComponent } from './components/pages/perfilusuario/novoperfilusuario/novoperfilusuario.component';
import { SetorComponent } from './components/pages/setor/setor.component';
import { NovosetorComponent } from './components/pages/setor/novosetor/novosetor.component';
import { SistemasComponent } from './components/pages/sistemas/sistemas.component';
import { NovosistemasComponent } from './components/pages/sistemas/novosistemas/novosistemas.component';
import { TipousuarioComponent } from './components/pages/tipousuario/tipousuario.component';
import { NovotipousuarioComponent } from './components/pages/tipousuario/novotipousuario/novotipousuario.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { NovousuarioComponent } from './components/pages/usuarios/novousuario/novousuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LeftSidebarComponent,
    MobileMenuComponent,
    LogComponent,
    FuncaoComponent,
    NovofuncaoComponent,
    HomeComponent,
    PapeisComponent,
    NovopapeisComponent,
    PerfilusuarioComponent,
    NovoperfilusuarioComponent,
    SetorComponent,
    NovosetorComponent,
    SistemasComponent,
    NovosistemasComponent,
    TipousuarioComponent,
    NovotipousuarioComponent,
    UsuariosComponent,
    NovousuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
