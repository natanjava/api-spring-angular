export class AppConstants {

    /* -- local --
    public static get baseServidor(): string { return "http://localhost:8080/"}
    
    public static get baseLogin(): string  { return this.baseServidor + "demospringrestapi/login"}
    
    public static get baseUrl() : string { return this.baseServidor + "demospringrestapi/usuario/" }
    
    // acess any controller
    public static get baseUrlPath() : string {return this.baseServidor + "demospringrestapi/"}
    */
     

    /*  --aws--
    */
    public static get baseServidor(): string { return "http://16.170.235.54:8080/"}
    
    public static get baseLogin(): string  { return this.baseServidor + "cursospringrestapi-0.0.1-SNAPSHOT/login"}
    
    public static get baseUrl() : string { return this.baseServidor + "cursospringrestapi-0.0.1-SNAPSHOT/usuario/" }
    // acess any controller
    public static get baseUrlPath() : string {return this.baseServidor + "cursospringrestapi-0.0.1-SNAPSHOT/"}
    
}

