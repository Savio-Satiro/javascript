function verificar() {
    var ano = new Date().getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Erro! Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','images/bebê-menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src','images/jovem-homem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','images/adulto-homem.jpg')
            } else{
                img.setAttribute('src','images/idoso-homem.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','images/bebê-menina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src','images/jovem-mulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','images/adulta-mulher.jpg')
            } else{
                img.setAttribute('src','images/idosa-mulher.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}