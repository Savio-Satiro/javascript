let num = [5, 8, 2, 9, 3]
num[5] = 1
num.push(6)
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições.`)
num.sort()
console.log(num)

num.push(4)
console.log(num)
num[2] = 7
console.log(num)
console.log(`Agora tem ${num.length} posições.`)

for (let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

for (let i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

let pos = num.indexOf(7)

if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else{
    console.log(`O valor está na posição ${pos}`)
}