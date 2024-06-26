import { Usuario } from "./usuário";
enum Papel {
    SECRETARIA = 'SECRETARIA',
    ADMINISTRADOR = 'ADMINISTRADOR'
}
export class Secretaria extends Usuario {
    constructor(nome: string,email: string,senha: string){
        super(nome,email,senha)
    }
}