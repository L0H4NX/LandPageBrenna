function teste(){
    var btn = document.getElementById('hamburguer')
    var modal =  document.getElementById('conteiner-modal')
    var cabecario = document.querySelector('.conteiner-cabecario')

    modal.style.display = "block"
    cabecario.style.position = "static"
}

function closeModal(){
    var modal =  document.getElementById('conteiner-modal')
    modal.style.display = "none"
}