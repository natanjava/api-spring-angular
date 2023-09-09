import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeService } from 'ng2-charts';

import { FormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'; /*Requisições ajax: post, get, etc*/
import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { UsuarioAddComponent } from './componente/usuarioAdd/usuario-add/usuario-add.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'; //mask
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // nao funcionou
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { UsuarioReportComponent } from './componente/usuario/usuario-report/usuario-report.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './componente/bar-chart/bar-chart.component';







// inicializa variavel de maskara
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent,
    NumbersOnlyDirective,    
    UsuarioReportComponent, 
    BarChartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpInterceptorModule,
    NgxMaskModule.forRoot(options),
    NgxPaginationModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule, BrowserAnimationsModule,
    ChartsModule          
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
