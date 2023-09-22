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
  students : Array<User[]>;
  totalList: number;


  constructor(private routeActivated: ActivatedRoute, private userService: UsuarioService) { 
    
  }

  ngOnInit() {
    let id = this.routeActivated.snapshot.paramMap.get('id');
    
    this.userService.getProfissaoList().subscribe( data => {
      this.profissoes = data;
      //console.log(this.profissoes);      
    });

    this.userService.getStudentList().subscribe(data => {
      this.students = data;    
      //this.students = data.content;
      this.totalList = this.students.length;
      
  }); 


    

    
    
    if (id != null) {
      //console.log('Valor sendo editado: ' +id);
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
   
    if (this.usuario.id == 1) {
      window.alert('Standard Admin can´t be updated.');
      return;
    }
        
    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) { /*Update*/
          
      this.userService.tualizarUsuario(this.usuario).subscribe( data => {
        //console.info("User atualizado :" +data);
        window.alert('User sucessfully updated.');
        this.novo();
      });     
    } 
    else {

      if (this.totalList < 21 ) {
        
        this.userService.salvarUsuario(this.usuario).subscribe (data => {  /* Persist*/
          //console.info("Salvou novo usuario: " +data);
          window.alert('New User sucessfully saved.');
          this.novo();
        }); 
      
      }

      else {
        window.alert('For technical reasons, this "Test-System" \nwas designed to only support 21 records.' 
          + '\nIf you want to add new Registers please \ndelete some of them.');
        return;
      }
    
    
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

    if (id !== null && confirm("Do you really want do remove the Phone?")) {
      this.userService.removerTelefone(id).subscribe(data => {
        this.usuario.telefones.splice(i, 1);        
      });
    }
  }

  addFone() {
    if (!this.usuario.telefones) {
      this.usuario.telefones = [];
    }

    if (this.usuario.telefones.length >= 2) {
      window.alert('Maximum number of phones: 2');
      return; 
    }
  
    if (this.telefone.numero) {
      this.usuario.telefones.push(this.telefone);
      this.telefone = new Telefone();
    } else {
      // Exiba um alerta JavaScript
      window.alert('Invalid nunber.');
    }
  }

  validarFormatoData(data: string): boolean {
    // Expressão regular para verificar o formato 'dd/mm/yyyy'
    const formatoValido = /^\d{2}\/\d{2}\/\d{4}$/;
  
    return formatoValido.test(data);
  }
}


