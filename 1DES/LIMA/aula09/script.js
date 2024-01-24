// let - variael local
// var - variavel global
// const - variavel constante

// const obj = [
//     {
//     name: 'Jak',
//     age: 21,
//     country: 'Brazil'
// },
// {
//     name: 'Cleitin',
//     age: 20,
//     country: 'Canadá'
// },
// {
//     name: 'Jurema',
//     age: 22,
//     country: 'EUA',
// },
// {
//     name: 'Tião',
//     age: 55,
//     country: 'Japan'
// }
// ]

// console.log("Hello bitch",obj)
// console.warn('AVISO')
// console.error('ERROR')
// console.table(obj)

// oparadores aritimetricos

// + soma 
// - subtração
// * multiplicação
// / divisão
// ** potenciação
// % resto da divisão

//operadores de comparação

// > maior que
// < menor que
// >= maior ou igual que
// <= menor ou igual que
// = atribuição
// == igualdade (valor)
// != diferente (valor)
// === igualdade (valor e tipo)
// !== diferente (valor e tipo)

// var a = 10
// var b = '10'
// console.log(a === b)

//Desenvolva um programa que leia três variáveis (a, b, c) e resolva a expressão: ( a + b ) / c.

var a = 5
var b = 5
var c = 5
console.log((a + b) / c)

//Desenvolva um programa que leia a velocidade de um carro (km/h) e a distância a ser percorrida (km) por ele. Calcule e apresente na tela, quanto tempo (horas) será necessário para o carro percorrer a distância informada.

var car = 100
var tempo = 6
var distan = 500
console.log(tempo = distan / tempo)

// Desenvolva um programa que leia o nome e o salário de uma pessoa, depois leia o valor do índice percentual (%) de reajuste do salário. Calcule e apresente na tela, o valor do novo salário e o nome da pessoa.

var salario = 1200
var porcent = 100;
console.log((salario * porcent / 100) + salario)

// revisão 
var nome = 'jak '
var salario = 2500
var reajuste = 50
var novoSalar = salario + ((salario * reajuste / 100) + salario)
console.log(nome + 'novo salario: ' + novoSalar)

var data = new Date()

var dia = data.getDate()
var mes = data.getMonth() +1
var ano = data.getFullYear()

//variavel anocompleto = dia + '/' + mes '/' + ano
var anoCompleto = `${dia}/${mes}/${ano}`

var hora = data.getHours()
var min = data.getMinutes()
var seg = data.getSeconds()

var horaCompleta = `${hora}:${min}:${seg}`

console.log(anoCompleto, horaCompleta)

// Math.ceil() - arredonda para cima
// Math.floor() - arredonda para baixo
// Math.round() - arredonda para o mais proximo

console.log(Math.ceil(10.1))

console.log(Math.floor(10.9))

console.log(Math.round(10.5))

var n = '10.8'

// number.parseInt() - converter para inteiro

console.log(n, Number.parseInt(n))

// number.parseFloat() - converter para float

console.log(n, Number.parseFloat(n))

// if(){

// }else if(){

// }else{

// }

// codição ? true : false - if ternario

// switch (){
//     case 1:
//         break
//     default:
//         break
// }

for(let i = 0; i < 10; i++){
    console.log(i)
}

// while(){

// }

// do{

// }while()

// var lista = 'a b c d e f' .split(' ')

// for(let i = 0; i < lista.length; i++){
//     console.log(lista[i])
// }

// // forma mais compacta da lista 

// lista.forEach(item =>{
//     console.log(item)
// })

// for(let item of lista){
//     console.log(item)
// }

// nome()

// function nome(){

//}



// Desenvolva um programa que leia o preço de um produto e se o preço for maior do que 1000 reais aplique um desconto de 8%. Mostre o preço final.

function preço(){
    var preco = 1544

    if(preco > 1000){
        preco = preco * 0.92
    }
    console.log(preco)
}

preço()

// Desenvolva um programa que leia o salário de um funcionário e o número de filhos. Se o salário for menor do que 2000 o funcionário receberá um salário família equivalente a 45 reais por filho. Apresente o salário final.

function salarios(){
    var sala1= 1500, sala2 = 1200 , sala3 = 2800, filhos = 8

    if(sala1 < 2000){
		
		sala2 = filhos * 45;
		sala1 = sala1 + sala2;
    }
    console.log('seu salario foi alterado')
}

salarios()