/*let result:number[] = []
function obama(array:number[][],num:number,result:number[][]){
    for(let i =0; i < array.length; i++){
        for(let j =0; j < array[i].length; j++){
            result.push (array[i][j] + num)
        }
    }
    return result
}

let array =[
    [1,2,3],
    [4,5,6]
]
let num = 2
console.log(obama(array,num,result))
*/


// let vetor1 = [1,2,3,4]
// let vetorR:number[] = []

// function shogunato(vetorR:number[]){
//      for(let i =0; i < vetor1.length; i++){
//         vetorR.push(vetor1[i])
//      }
//      return vetorR
// }
// console.log(shogunato(vetorR))

// function calcularHipotenusa(catetoA: number, catetoB: number){
//     let h = (catetoA**2) + (catetoB**2)

//     console.log(Math.sqrt(h))
// }

// calcularHipotenusa(3,6)

// enum Genero{
//     masculino,
//     feminino
// }


// class Pessoa{
//     nome: string;
//     idade: number;
//     genero: Genero;
//     altura: number;
//     peso: number
//     constructor(nome: string, idade:number, genero: Genero, altura: number, peso: number){
//     this.nome = nome 
//     this.idade = idade
//     this.genero = genero
//     this.altura = altura
//     this.peso = peso
// }
// andar(){
//     console.log(this.nome,   'esta andando')
// }
// }
// let pessoa = new Pessoa('Rhaudney', 21, Genero.masculino, 1.65, 120)
// let pessoaB = new Pessoa('Fagner',20,Genero.masculino,1.65,52)
// console.log(pessoa.andar)



// class Partido {
//     contribuinte: string;
//     contribuicao: number;
//     tempoDeAdesao: string
//     constructor(contribuinte: string, contribuicao: number, tempoDeAdesao:string){
//         this.contribuinte = contribuinte
//         this.contribuicao = contribuicao
//         this.tempoDeAdesao = tempoDeAdesao
//     }
//     perestroika(){
//         console.log(this.contribuinte, 'foi um bom proletario para o partido')
//     }
// }
// let partido = new Partido('Fabio', 750, '1Meses')

// console.log(partido.perestroika())

/*

enum Genero{
    Comedia = 'Comedia',
    Ficcao = 'Ficcao',
    Documentario = 'Documentario'
}

class filme{
    readonly nome: string
    private genero: Genero
    lancamento: number
    static quantidadeDeFilmes:number = 0

    constructor(nome:string, genero:Genero,lancamento:number){
        this.nome = nome;
        this.genero = genero;
        this.lancamento = lancamento;
        filme.quantidadeDeFilmes++
    }
}
const filme1 = new filme('Mordida Do Banguelo',Genero.Documentario,2159)
const filme2 = new filme('O andar do aleijado',Genero.Comedia,1008)

console.log(filme1)
*/

     









