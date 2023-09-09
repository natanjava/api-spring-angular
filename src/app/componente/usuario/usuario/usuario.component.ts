import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students : Array<User[]>;
  nome: String;
  total: Number;
  p: number = 1;

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getStudentList().subscribe(data => {
        this.students = data;    //alterado devido implementação
      //this.students = data.content;
      //this.total = data.totalElements;
    });    
  }

  deletarUsuario(id:Number, i){
    if(confirm('Do you really want to remove?')){
      this.usuarioService.deletarUsuario(id).subscribe(data => {
        console.log("Retorno do metodo delete: " +data); // vai retornar Ok, o retorno do metodo na API
        
        // recarrega a lista depois que deleta; codigo inutil apos Paginacao
        /* 
        this.usuarioService.getStudentList().subscribe(data => {
          this.students = data;  
        }); */ 
        
        this.students.splice(i, 1); // remove da tela



      });
    }
  }

  consultarUser() {
    if (this.nome == '' || this.nome.trim()===''){
      this.usuarioService.getStudentList().subscribe(data => {
        this.students = data; 
              
      });
    }
    else {
      this.usuarioService.consultarUser(this.nome).subscribe( data => {
        this.students = data;
      });
    }
    this.p = 1; 
    /* 
    if (this.nome === ' ') {
      this.usuarioService.getStudentList().subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    } else {

      this.usuarioService.consultarUser(this.nome).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
    */
  }

    
  /*Paginação por demanda*/
  /*
  carregarPagina(pagina) {
    
    
    if (this.nome !== '' || this.nome.trim()!== '') {
      this.usuarioService.consultarUserPoPage(this.nome, (pagina - 1)).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
    else {
      //console.info("Pagina: " +pagina);
      this.usuarioService.getStudentListPage(pagina - 1).subscribe(data => {
        //  this.students = data;    alterado devido implementação
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
  }  
  */

 imprimeRelatorio() {
   return this.usuarioService.downloadPdfRelatorio();
 }


}



