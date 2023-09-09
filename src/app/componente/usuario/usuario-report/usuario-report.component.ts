import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserReport } from 'src/app/model/userReport';
import { UsuarioService } from 'src/app/service/usuario.service';


/*Pega dados do data Picker e transforma no formato aceito pelo BD */
@Injectable()
export class FormataData extends NgbDateParserFormatter {

  readonly DELIMITER = '/'; // 18/10/2003
  
  // pega os dados do componente e transforma em Array
  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month :  parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      }; 
    }
    return null;
  }

  // pega o array e transforma num um formato legivel pra ser mostrado na tela
  format(date: NgbDateStruct): string | null {
    return date ? ValidateDayMonth(date.day) + this.DELIMITER + ValidateDayMonth(date.month) + this.DELIMITER + date.year : '';
    
  }

  // converte o dado pro modelo de dados aceitavel no banco
  toModel(date : NgbDateStruct | null): string | null {
    return date ? ValidateDayMonth(date.day) + this.DELIMITER + ValidateDayMonth(date.month) + this.DELIMITER + date.year : null;

  }
}

// acrscenta o 0 se for dia ou mes menor que 10: 1/1/2000 se transforma 01/01/2000
function ValidateDayMonth(valor) {
  if (valor.toString !== '' && parseInt(valor) <=9) {
    return '0' + valor;
  } 
  return valor;
}

@Injectable()
export class FormatDateAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '/';
    
  fromModel(value: string): NgbDateStruct | null  {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month :  parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      }; 
    }
    return null;
  }
  toModel(date: NgbDateStruct | null): string {
    return date ? ValidateDayMonth(date.day) + this.DELIMITER + ValidateDayMonth(date.month) + this.DELIMITER + date.year : null;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './usuario-report.component.html',
  styleUrls: ['./usuario-report.component.css'],
  providers : [{provide: NgbDateParserFormatter, useClass: FormataData},
    {provide: NgbDateAdapter, useClass: FormatDateAdapter }]
})
export class UsuarioReportComponent  {

  userReport = new UserReport();

  constructor(private routeActivated: ActivatedRoute, private userService: UsuarioService) { 
    
  }


  /* imprime Relatório */
  imprimeRelatorio() {
    this.userService.downloadPdfRelatorioParam(this.userReport);

  } 

  








}
