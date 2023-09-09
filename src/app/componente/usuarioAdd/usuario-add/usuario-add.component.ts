import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Profissao } from 'src/app/model/profissao';
import { Telefone } from 'src/app/model/telefone';
import { User } from 'src/app/model/user';
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
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;

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
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css'] ,
  providers : [{provide: NgbDateParserFormatter, useClass: FormataData},
                {provide: NgbDateAdapter, useClass: FormatDateAdapter }]

})
export class UsuarioAddComponent implements OnInit {

  usuario = new User();
  telefone = new Telefone();
  profissoes = Array<Profissao>();


  constructor(private routeActivated: ActivatedRoute, private userService: UsuarioService) { 
    
  }

  ngOnInit() {
    let id = this.routeActivated.snapshot.paramMap.get('id');
    
    this.userService.getProfissaoList().subscribe( data => {
      this.profissoes = data;
      //console.log(this.profissoes);
    });
    
    
    if (id != null) {
      console.log('Valor sendo editado: ' +id);
      this.userService.getStudent(id).subscribe( data => {
        /*o metodo no Back-End recuperava dados do DTO, agora não mais */
        this.usuario = data;
        
        /* implementacao de recuperacao de dados de Objeto DTO
        this.usuario.id = data.userId;
				this.usuario.login = data.userLogin;
				this.usuario.nome = data.userNome;
				this.usuario.senha = data.userSenha;*/
      }); 
    }
  }

  salvarUser(){
    //console.info(this.usuario);
    /*
    if (!this.validarFormatoData(this.usuario.dataNascimento.toString())) {
      alert('Você deve fornecer a data em um formato válido: dd/mm/yyyy');
      return; // Impede o envio dos dados ao backend se o formato for inválido
    }    
    */
   
    
    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) { /*Atualiza*/
      this.userService.tualizarUsuario(this.usuario).subscribe( data => {
        console.info("User atualizado :" +data);
        this.novo();
      });
    } else {
      this.userService.salvarUsuario(this.usuario).subscribe (data => {  /* Salva novo usuario*/
        console.info("Salvou novo usuario: " +data);
        this.novo();
      }); 
    }
  }

  /* Limpar a tela*/
  novo(){
    this.usuario = new User();
    this.telefone = new Telefone();
  }

  deletarTelefone(id, i){
    if (id==null){
      this.usuario.telefones.splice(i,1);
      return;
    }

    if (id !== null && confirm("Deseja remover?")) {
      this.userService.removerTelefone(id).subscribe(data => {
        this.usuario.telefones.splice(i, 1);
      });
    }
  }

  addFone(){
    if (this.usuario.telefones === undefined ) {
      this.usuario.telefones = new Array<Telefone>();
    }

    this.usuario.telefones.push(this.telefone);
    this.telefone = new  Telefone();

  }

  validarFormatoData(data: string): boolean {
    // Expressão regular para verificar o formato 'dd/mm/yyyy'
    const formatoValido = /^\d{2}\/\d{2}\/\d{4}$/;
  
    return formatoValido.test(data);
  }
}


