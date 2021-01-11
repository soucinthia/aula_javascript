/*
alert("meu primeiro js");

var nome = "Cinthia Souza";
alert("Bem vindo" + nome);
*/

/*var nome = "Cinthia Souza";
var idade = 30;
//alert(nome + "tem" + idade + "anos");
var idade2 = 10;
var frase = "Japao e o melhor time do mundo";

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japao", "Brasil"));
//alert(frase.replace("Japao", "Brasil"));
console.log(frase.toUpperCase());
*/

//Array
var lista = ["maca", "pera", "laranja"];
//lista.push("uva"); //acrescentar item na lista
//lista.pop(); //retira item da lista
console.log(lista);
//console.log(lista,length); //tamanho da lista
console.log(lista.reverse()); //Troca a ordem da lista
console.log(lista.toString());
console.log(lista.join(" - "));

//Dicionario
var fruta = {nome:"maca", cor:"vermelha"};
console.log(fruta);
alert(fruta.cor);

//Lista de dicionario
var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
