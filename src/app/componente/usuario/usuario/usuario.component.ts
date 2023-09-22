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
    
    if(id != 1 && confirm('Do you really want to remove?')){
      this.usuarioService.deletarUsuario(id).subscribe(data => {
        // console.log("Return of Delete Method: " +data);  // return ok
        
        
        /* reload list after deleting; useless code for Pagination
        this.usuarioService.getStudentList().subscribe(data => {
          this.students = data;  
        }); */ 
        
        this.students.splice(i, 1); // remove from list
        location.reload(); // fixes false positioning of records in the list

      });
    }
    else {
      window.alert('Standard Admin can´t be removed.');
      return;
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

    
  /*Lazy Pagination; implementations coming soon*/
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



