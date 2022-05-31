// function teste(){
//     var btn = document.getElementById('hamburguer')
//     var modal =  document.getElementById('conteiner-modal')
//     var cabecario = document.querySelector('.conteiner-cabecario')

//     modal.style.opacity = "1"
//     cabecario.style.display= "none"
// }


// function closeModal(){
//     var modal =  document.getElementById('conteiner-modal')
//     var cabecario = document.querySelector('.conteiner-cabecario')

//     modal.style.opacity='0'

//     cabecario.style.display = "flex"
// }

$('.carrosel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    variableWidth: true,
    infinite: true,
  });      