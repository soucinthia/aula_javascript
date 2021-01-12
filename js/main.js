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

/*Array
var lista = ["maca", "pera", "laranja"];
//lista.push("uva"); //acrescentar item na lista
//lista.pop(); //retira item da lista
console.log(lista);
//console.log(lista,length); //tamanho da lista
console.log(lista.reverse()); //Troca a ordem da lista
console.log(lista.toString());
console.log(lista.join(" - "));
*/

/*Dicionario
var fruta = {nome:"maca", cor:"vermelha"};
console.log(fruta);
alert(fruta.cor);

//Lista de dicionario
var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
//Condicionais If Else - Caixa de perguntas
var idade = prompt("Qual sua idade");
if (idade >=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

//laços de reptição While e for
var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
    //alert(count);
    //count++;
};

var count;
for(count=0; count<= 5; count++){
    alert(count);
};

//Date
var d = new Date();
alert(d);

//exemplos
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
function soma(n1, n2){
    return n1 + n2;
}

function setreplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setreplace("Vai Japão", "Japão","Brasil"));

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
