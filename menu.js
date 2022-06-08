const menusection = document.querySelector(".conteiner-menu-lateral")
const menuToggle = menusection.querySelector('.menu-toggle-open')


function openmenu(){
  menusection.classList.toggle("on")
  var navMenu = document.querySelector("conteiner-menu-lateral")
  navMenu.style.display = 'block'
}

function closemenu(){
  menusection.classList.remove('on')

}

function openmodaldp(){
  var modal = document.getElementById('conteiner-modal-depoimentos') 
  modal.style.opacity = "1"
  modal.style.display = "flex"
  modal.style.zIndex = "8000"
}

function closemodal(){
  var modal = document.getElementById('conteiner-modal-depoimentos') 
  modal.style.opacity = "0"
  modal.style.zIndex = "-1"
}

document.getElementById("Nome").onkeypress = function(e) {
  var chr = String.fromCharCode(e.which);
  if ("1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
    return false;
};

document.getElementById("cidade").onkeypress = function(e) {
  var chr = String.fromCharCode(e.which);
  if ("1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
    return false;
};

document.getElementById("idade").onkeypress = function(e) {
  var chr = String.fromCharCode(e.which);
  if ("1234567890".indexOf(chr) < 0)
    return false;
};