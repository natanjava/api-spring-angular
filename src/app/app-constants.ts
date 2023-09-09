export class AppConstants {

    public static get baseServidor(): string { return "http://localhost:8080/"}

    public static get baseLogin(): string  { return this.baseServidor + "demospringrestapi/login"}
    
    public static get baseUrl() : string { return this.baseServidor + "demospringrestapi/usuario/" }

    /*acessa qualquer controller*/
    public static get baseUrlPath() : string {return this.baseServidor + "demospringrestapi/"}
    
 


    /*
    No início do arquivo package.json, após a declaração da propriedade "version", adicione a seguinte linha:
    "proxy": "http://localhost:8080",
    No método baseServidor do arquivo app-constants.js, altere a porta do localhost para 4200, conforme segue:
    public static get baseServidor(): string { return "http://localhost:4200/" }
    */

     
}