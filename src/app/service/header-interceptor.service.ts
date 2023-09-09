import { Injectable, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpInterceptor, HttpErrorResponse, HttpEvent, HttpResponse  } from '@angular/common/http';
import { throwError}  from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>>{
    //throw new Error("Not implemented yet");

    if (localStorage.getItem("token") !== null){
      const token = 'Bearer ' + localStorage.getItem('token');
      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      // return next.handle(tokenRequest);   // antes da implementação de tratamento de errors
      /*
      return next.handle(tokenRequest).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.status === 200 || event.status === 201) {
              console.info('Sucesso na operação');
            }
          }
        }),
        catchError(this.processaError)
      ); */
      return next.handle(tokenRequest).pipe(catchError(this.processaError));
    }

    else {
      return next.handle(req).pipe(catchError(this.processaError));
    }
  }


  constructor() { }

  processaError(error : HttpErrorResponse){   // error.error.error: variavel.objeto.atributo;
    let errorMessage = 'Erro desconhecido';

    console.log(error);
    if (error.error instanceof ErrorEvent) {
      console.error(error.error);
      errorMessage = 'Error: ' + error.error.error;
    }
    else {
      if (error.status == 403) {
        errorMessage = "Access denied. Logout and login again."
      }
      else {
        errorMessage = 'Codigo' + error.error.code + '\nMessage: ' + error.error.error;
      }     
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}

@NgModule({

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true,
  },
],
}) 

export class HttpInterceptorModule {}
