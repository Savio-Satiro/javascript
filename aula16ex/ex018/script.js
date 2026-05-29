let n = []
let res = document.getElementById('res')

function adicionar(){
    res.innerHTML = ''
    let num = document.getElementById('num')
    let add = document.getElementById('add')
    if (num.length == 0 || num.value < 1 || num.value > 100 || n.indexOf(Number(num.value)) != -1){
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        n.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        item.value = `n${num.value}`
        add.appendChild(item)
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (n.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = ''
        n.sort()
        let tot = 0
        for (let c = 0; c < n.length; c++){
            tot += n[c]
        }
        res.innerHTML += `<p>Ao todo, temos ${n.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${n[n.length - 1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${n[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${tot}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${tot /  n.length}.</p>`
    }
}