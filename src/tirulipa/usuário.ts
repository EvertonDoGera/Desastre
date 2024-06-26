import { IUsuario } from "./iterfaceUsario";

export class Usuario implements IUsuario {
    nome: string;
    email: string;
    senha: string;

    constructor(nome: string,email: string,senha: string) {
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    login(): any {
        console.log(`O usuário ${this.nome} fez login`)
    }
    logout(): any {
        console.log(`O usuário ${this.nome} fez logout`)
    }
}