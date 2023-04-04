/*console.log("Aqui está um texto");

let nome = "João", idade = 19;

console.log(`Seu nome é ${nome} e sua idade é ${idade} anos`);

let suaIdade = prompt("Sua idade: ");

if (suaIdade>= 18){
    console.log("Você pode entrar!");
} else {
    console.log("Acesso negado!");
}


function pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
    return console.log(`Olá ${nome}, sua idade é ${idade}. \n Seja bem-vindo!`);
}

    let nome = prompt("Digite seu nome: ");
    let idade = prompt("Digite sua idade: ");

console.log(pessoa(nome, idade));



let numero = 20;

function parImpar (numero){

    if(numero % 2 == 0){
        let numero = 10;
        console.log("É par;!");
        console.log(numero);
    } else{
        console.log("É ímpar!");
    }
}

parImpar(numero);
console.log(numero);
*/

//Function Arrow

const potencia = (numero) => {
    return numero * numero;
}

/*function potencia (numero){
    return numero * numero;
}*/
    
console.log(potencia(6));

