export interface IUsuario {
    nome: string;
    email:string;
    senha:string

    login(): any
    logout(): any
}