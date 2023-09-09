import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { UserReport } from '../model/userReport';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getStudentList (): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl); /*metodo get ; uri: contexto/usuario/  */
  }

getProfissaoList() : Observable<any> {
  return this.http.get<any>(AppConstants.baseUrlPath + 'profissao/');
}


  getStudentListPage (pagina): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + 'page/' + pagina); 
  }
  
  getStudent(id) : Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id);
  }

  deletarUsuario(id: Number) : Observable<any>{
      return this.http.delete(AppConstants.baseUrl + id, {responseType: 'text'}); 
  }

  consultarUser(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);      
  }

  consultarUserPoPage(nome: String, page : Number): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome + "/page/" + page);

  }

  salvarUsuario(user) : Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, user)
  }

  tualizarUsuario(user) : Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, user)
  }

  removerTelefone(id): Observable<any>{
    return this.http.delete(AppConstants.baseUrl + "removerTelefone/" + id, {responseType: 'text'});    
  }
  
  userAutenticado() {
    if ( localStorage.getItem('token') !== null && 
    localStorage.getItem('token').toString().trim() !== null) {
      return true;
    }
    else {       
      return false;
    }
  }

  downloadPdfRelatorio() {
    return this.http.get(AppConstants.baseUrl + 'relatorio', {responseType : 'text'}).subscribe ( data => {
      // querySelector pega um componente da tela e joga a strnig base64 dentro
      document.querySelector('iframe').src = data;
    });
  }

  downloadPdfRelatorioParam(userReport : UserReport) {
    return this.http.post(AppConstants.baseUrl + 'relatorio/', userReport, {responseType : 'text'}).subscribe ( data => {
      // querySelector pega um componente da tela e joga a strnig base64 dentro
      document.querySelector('iframe').src = data;
    });
  }


  carregarGrafico() : Observable<any> {
    return this.http.get(AppConstants.baseUrl + 'grafico' );
}
  



}
