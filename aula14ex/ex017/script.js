function calcular(){
    var num = document.getElementById('num')
    var sel = document.getElementById('sel')
    if (num.length != 0){
        let n = Number(num.value)
        sel.innerHTML = ''
        for (var i = 1; i <= 10 ; i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            item.value = `tab${i}`
            sel.appendChild(item)
        }
    } else{
        window.alert('Por favor, digite um número!')
    }
}