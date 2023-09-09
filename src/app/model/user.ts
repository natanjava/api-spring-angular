import { Profissao } from "./profissao";
import { Telefone } from "./telefone";

export class User {

    id: Number;
    nome: String;
    login: String;
    senha: String; 
    telefones: Array<Telefone>;
    dataNascimento: String;
    salario : DoubleRange;
    profissao : Profissao = new Profissao();





}
