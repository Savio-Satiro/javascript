//console.log('Tudo bem?')
/*
Estrutura de repetição com teste lógico no início
var c = 1

while (c <= 6){
    console.log(`Passo ${c}`)
    c++
}
*/

//Estrutura de repetição com teste lógico no final

/*var c = 1

do{
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)*/

/*
while (c <= 10 ) {
    console.log(`4 vezes ${c} é igual a ${4*c}`)
    c++
}
*/


var c = 300


do{
    console.log(`Você está a ${c}metros do seu destino!`)
    c -= 20
    if (c == 0) {
        console.log('Você chegou ao seu destino!')
    }
}while (c > 0)

