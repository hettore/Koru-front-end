// comentario em linha
/*
comnetario em bloco
*/

var idade = 31; // tipo numero
var altura = 1.60; // numero futuante

var nome = "Hettore Eduardo"; // string (texto)
var sobrenome = "Silva";

//operadores aritméticos
// + - * / 

console.log(idade * altura);

// concatenar (reunir os conteudos)
var nomeCompleto = nome + " " + sobrenome;
nome += " " + sobrenome;
console.log(nome);
console.log(nomeCompleto);

//tipo de dado booleano
var x = true;
var y = false;

//objeto
var aluno = {nome: "hettore", sobrenome: "Silva", status: true, curso: {nome: "Front-end", turma: 123, inicio: "20"}};
console.log(aluno);
console.log(aluno.nome);
console.log(aluno.curso.nome);
aluno.nome = "Marina";
console.log(aluno.nome);

//array (lista de itens, para armazenar varios valores)
var disciplinas = ["Front-End","UX/UI","Back-End", 789, ["A","B","C"]];
console.log(disciplinas);
console.log(disciplinas[2]);
console.log(disciplinas[4][2]);

disciplinas[0] = "Protótipo";
console.log(disciplinas);


//const são variaveis que não mudam de valor
const nome3 = "Hettore";

//var e let são variaveis que podem mudar e valor
var nome1 = "Lucas";
var nome1 = "hettore";
console.log(nome1);

//variavel let não pode ser redeclarada
//let nome2 = "";
let nome2 = "Caetano";
console.log(nome2);
//não pode ser utilizada fora do seu contexto de declaração
// {
//     let nome3 = "Katia";
// }

// console.log(nome3);

//BLOCOS DE CONTROLE OU DE CONSTRUÇÃO
//operdadores de condição
//< > <= >=
// != diferente
// ! condição não verdadeira

var a = 5;
if(a > 5){
   // alert("é sim!");
} else if(a < 5){
    //se for verdadeiro
} else {
    //não é verdadeiro
}

//operador de condição ternário

var hora = 20;
var status = hora > 18 ? "noite" : "dia" ;

//exemplo da sintaxe= var status = (condicao) ? true : false;
/*
var status = hora > 18 ? "noite" : hora > 24 ? "dia" : "noite";

if(hora > 18){
    status = "noite";
}else{
    status = "dia";
}
*/

//LOOP
//repetir uma tarefa igual várias vzs dependendo de um critério

for(var i = 0; i < disciplinas.length; i++){
    console.log(disciplinas[i]);
}






