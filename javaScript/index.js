window.onscroll = () => { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-60px";
    }
}
let config = {
    strings: ['Js Developer', 'Jose Luis'],
    typeSpeed: 40,
    startDelay: 1500,
    backSpeed: 75,
    // smartBackSpeed: true,
    shuffle: false,
    backDelay: 1500,
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    loop: true,
    loopCount: false,
    showCursor: false,
    cursorChar: '|',
    contenType: 'html',
    autoInsertCss: true,
}

let typed = new Typed('.txtAnimate',config);

function myIconBotonNavigation(x) {
    x.classList.toggle("change");
}

//animations in progresBar skills______________
function animacion(idElement,keyframes) {
    let objet = document.getElementById(idElement)
    let posicionObjet = objet.getBoundingClientRect().top

    let tamañoPantalla = window.innerHeight/1;
    // console.log('tamaño',tamañoPantalla);
    // console.log(posicionObjet);
    if (posicionObjet < tamañoPantalla)  objet.style.animation = `${keyframes} 4s`
}

window.addEventListener('scroll',()=> animacion('skillHtml','propgresMoverHtml'))
window.addEventListener('scroll',()=> animacion('skillJavaScript','propgresMoverJavaScript'))
window.addEventListener('scroll',()=> animacion('skillReact','propgresMoverReact'))
window.addEventListener('scroll',()=> animacion('skillCss','propgresMoverCss'))
window.addEventListener('scroll',()=> animacion('skillReact-Native','propgresMoverReact-Native'))

//boton scrollTop____________
let mybutton = document.getElementById("myBtn");

window.addEventListener('scroll',()=>{scrollFunctionBoton()})

function scrollFunctionBoton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}