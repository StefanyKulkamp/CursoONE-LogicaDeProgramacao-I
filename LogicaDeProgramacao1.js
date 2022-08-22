//#region Funções;

function PularLinha() {
  document.write("<br><hr><br>");
}
function Escrever(frase) {
  document.write("<big>" + frase + "</big>");
  PularLinha();
}
// function CalculaImc(altura, peso) {
//   var imcCalculada = peso / (altura * altura);
//   return imcCalculada;
// }

//#endregion

//#region Exercícios While

// Escrever("For");
// for( var i = 0; i < 10; i++ ) {
//   alert("O resultado é " + (2 * i));
// }
// Escrever("While");
// var i = 0;
// while(i < 10){
//   alert("O resultado é " + (2 * i));
//   i++;
// }

// var loginCadastrado = "alura";
// var senhaCadastrada = "alura321";
// var tentativas = 1;
// var maximoDeTentativas = 3;

// while(tentativa <= maximoDeTentativas){

//   var loginInformado = prompt("Informe seu login");
//   var senhaInformada = prompt("Informe sua senha");

//   if (loginCadastrado == loginInformado && senhaCadastrada == senhaInformada) {
//     alert("Bem-vindo ao sistema " + loginInformado);
//   }
//   else {
//     if(totalDeTentativas == 3){
//       Escrever("Total de tentativas atingidas, conta bloqueada");
//     }
//     alert("Login inválido. Tente novamente");
//   }
//   tentativas++;
// }

// var decrescente = 20;
// while(decrescente >= 0){
//   Escrever(decrescente);
//   decrescente = decrescente - 1;
// }
// Escrever("FIM");

// var contagem = 30
// while(contagem <= 40){
//   if(contagem == 33 ){
//     contagem = contagem + 1;
//   }
//   else if( contagem == 37){
//     contagem = contagem + 1;
//   }
//   else{
//     Escrever(contagem);
//     contagem = contagem + 1;
//   }
// }
// Escrever("FIM");

//#endregion

//#region Exercício Pares

// var numeros = 0
// while(numeros <= 100){
//   Escrever(numeros);
//   numeros = numeros + 2;
// }

//#endregion

//#region Exercícios Copa do Mundo

// var anoCopa = 1930;
// var limite = parseInt(prompt("Qual é o ano limite?"));

// while(anoCopa <= limite) {

//     Escrever(anoCopa + " tem copa!");
//     anoCopa = anoCopa + 4;
// }
// Escrever("Ufa! Esses foram os anos de copa até " + limite);

// var anoCopa = 1930;
// var limite = parseInt(prompt("Insira o ano desejado"));

// while (anoCopa <= limite) {
//   Escrever("Teve copa em: " + anoCopa);
//   anoCopa + 4;
// }
//Escrever("FIM");

//#endregion

//#region Exercício Habilitação

// var idade = parseInt(prompt("Qual é sua idade?"));
// var temCarteira = prompt("Tem carteira? Responda S ou N");

// if(idade >= 18){
//     if(temCarteira == "S"){
//         Escrever("Pode dirigir");
//     }
//     else if (temCarteira == "N"){
//         Escrever("Não pode dirigir");
//     }
//     else{
//         Escrever("Entrada invalida");
//     }
// }
// else{
//     Escrever("Não pode dirigir");
//}

//#endregion

//#region Exercício Jogo Adivinhação

// var numero = prompt("Insira um numero para iniciar o jogo")
// Sorteia(numero)
// var tentativa = parseInt(prompt("Insira um numero igual ou menor que o inserido anteriormente"));
// var chances = 1

// while(chances <= 3){
// if(tentativa == numero){
//     Escrever("Parabéns, você acertou!.O número era " + numero);
//     break;
// }
// else{
//     Escrever("Você errou!.Tente novamente");
//     if(tentativa < numero){
//         Escrever("Seu numero era maior que o resultado");
//     }
//     else{
//         Escrever("Seu numero era menor que o resultado");
//     }
// }
// }

// var numeros = [5 ,7, 10, 2];
// var input = document.querySelector("input");
// input.focus();
// var button = document.querySelector("button");
// button.onclick = Verificacao;

//#endregion

//#region  Exercício IMC

// var nome = prompt("Informe seu nome");
// var alturaInformada = prompt(nome + " insira sua altura");
// var pesoInformado = prompt(nome + " insira o seu peso");
// var imc = CalculaImc(alturaInformada, pesoInformado);

// Escrever(nome + ", este é o seu IMC: " + Math.round(imc));

// if (imc < 18.5) {
//   Escrever("Você esta abaixo do recomendado");
// }
// if (imc > 35) {
//   Escrever("Você esta acima do recomendado");
// }
// if (imc >= 18.5 && imc <= 35) {
//   Escrever("Seu IMC esta excelente");
// }
//#endregion

//#region Execício Álcool ou Gasolina

// var tanque = 40;
// var caminhoComGasolina = 480;
// var caminhoComAlcool = 300;
// var consumoDeAlcool = caminhoComAlcool / tanque;
// var consumoDeGasolina = caminhoComGasolina / tanque;

// Escrever("Quantidade de litros percorridos com gasolina: " + consumoDeGasolina);
// Escrever("Quantidade de litros percorridos com gasolina: " + consumoDeAlcool);
//#endregion

//#region Execício Irmãs

// var minhaIdade = 19;
// var irmaIdade = 14;
// var idades = minhaIdade - irmaIdade;

// Escrever("Está é a diferença das idades: " + idades);
//#endregion

//#region Exercício Gerações

// var anoChegada = 1500;
// var anoAtual = 2022;
// var geracao = 28;
// var anos = (anoAtual - anoChegada) / geracao;

// Escrever("Está é a quantidade de gerações passadas: " + Math.round(anos));
//#endregion

//#region Exercício Futebol

// var vitorias = parseInt(prompt("Insira o número de vitórias"));
// var empates = parseInt(prompt("Insira o número de empates"));
// var pontos = vitorias * 3 + empates;

// Escrever("Este é o número de pontos do time: " + pontos);
// if (pontos > 28) {
//   Escrever("O time esta melhor que no ano anterior");
// }
// else if (pontos < 28) {
//   Escrever("O time esta pior que no ano anterior");
// }
// else if (pontos == 28) {
//   Escrever("O time esta igual ao ano anterior");
// }
//#endregion

//#region  Exercício não funcionando, resolver mais tarde - aula 9.8
// function Sorteia() {
//   Math.round(Math.random() * 10);
// }

// function SorteiaNumeros(quantidade) {
//     var segredos = [];
//     var numero1 = 1;
//     while (numero1 <= quantidade) {
//       var numeroAleatorio = Sorteia();
//       var achou = false;
//       if (numeroAleatorio !== 0) {
//         for (var i = 0; i < segredos.length; i++) {
//           if (segredos[i] == numeroAleatorio) {
//             achou = true;
//             break;
//           }
//         }
//         if (achou == false) {
//           segredos.push(numeroAleatorio);
//           numero1++;
//         }
//       }
//     }
//     return segredos;
//   }

// function Verificacao() {
//   var acerto = false;
//   for (var i = 0; i < numeros.length; i++) {
//     if (input.value == numeros[i]) {
//       alert("Você acertou");
//       acerto = true;
//       break;
//     }
//   }
//   if (acerto == false) {
//     alert("Você errou!!");
//   }
//   input.value = "";
//   input.focus();
// }

// var numeros = SorteiaNumeros(4);
// console.log(numeros);
// var input = document.querySelector("input");
// input.focus();
// var button = document.querySelector("button");
// button.onclick = Verificacao;
//#endregion


