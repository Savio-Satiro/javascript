function carregar(){
    var hour = new Date().getHours()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    msg.innerHTML = `Agora são ${hour} horas.`
    if (hour < 12){
        img.src = 'images/foto-manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hour < 18 ) {
        img.src = 'images/foto-tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'images/foto-noite.jpg'
        document.body.style.background = '#515154'
    }
}
