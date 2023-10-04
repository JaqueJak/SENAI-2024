//  var nome = document.getElementById('nome')
//  var text = document.getElementById('resultado')

// function buscarElemento(){
// //    let nome = document.getElementById('nome').value

//    resultado.innerHTML = nome.value
// }


function soma(){
    let a = Number(document.getElementById('a').value)
    let b = Number(document.getElementById('b').value)
    let c = Number(document.getElementById('c').value)

   document.querySelector('#result').innerHTML = `a + b / c = ${( a + b) / c}`
}

function resultado(){
    let Velocidade = Number(document.getElementById('vel').value)
    let Distancia = Number(document.getElementById('dist').value)

    document.querySelector('#botao').innerHTML = `tempo é = ${Distancia / Velocidade}`
}