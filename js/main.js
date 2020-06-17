if (document.querySelector(".carusel")) {
    var todos = document.querySelectorAll(".carusel-inner");
    for (var i = 0; i < todos.length; i++) {
        todos[i].click()
    }
}

function init($padre) {
    var contenedor = document.querySelector(`.${$padre}`);
    var caja = contenedor.querySelector(".carusel-inner")
    var tiempo = caja.getAttribute("time");
    var cantidad = caja.getAttribute("cantidadImg");
    var item = caja.querySelectorAll(".carusel-item")
    cantidad = parseInt(cantidad)
    tiempo = parseInt(tiempo);
    var anadido;

    (function addElement() {
        // var newDiv = document.createElement("div");
        var newDiv = document.createElement("section")
        var newContent = document.createElement("img")
        var contendido = newDiv.appendChild(newContent); //añade texto al div creado. 
        var date = item[0].children[0].src
        newContent.setAttribute("src", `${date}`)
        newContent.setAttribute("alt", `Esta imagen viene de js si no sale es por q no tienes todos los elementos`)
        newContent.classList.add("transparent")
        // añade el elemento creado y su contenido al DOM 
        var currentDiv = document.querySelector(".carusel-inner");
        currentDiv.appendChild(contendido)
    })()


    // (function tam (url) {
    //     // console.log(item[0].lastChild)
    //     // var datoHaAnader = 
    //     anadido = item[0].lastChild
    //     anadido.classList.add("transparent")
    //     anadido.classList.add("left")
    // })()




    var contador = 1; //Contador es el q entra
    var salida; //Este es el q sale

    setInterval(() => {
        cambio(contador)
    }, tiempo)

    function cambio($contador) {
        if ($contador < cantidad) {

            contador = contador + 1;
            salida = contador - 1

            // valorCambio(contador, salida)
            caja.querySelector(`.item-${contador}`).classList.add("get-in")
            caja.querySelector(`.item-${salida}`).classList.add("go-out")

            setTimeout(() => {
                caja.querySelector(`.item-${contador}`).classList.remove("get-in")
                caja.querySelector(`.item-${salida}`).classList.remove("go-out")

                caja.querySelector(`.item-${salida}`).classList.remove("vista")
                caja.querySelector(`.item-${contador}`).classList.add("vista")
            }, 3000)
            console.log(salida, contador)
        } else {
            // valorCambio()

            contador = 1;
            salida = cantidad


            caja.querySelector(`.item-${contador}`).classList.add("get-in")
            caja.querySelector(`.item-${salida}`).classList.add("go-out")
            console.log(salida, contador)


            setTimeout(() => {
                caja.querySelector(`.item-${contador}`).classList.remove("get-in")
                caja.querySelector(`.item-${salida}`).classList.remove("go-out")

                caja.querySelector(`.item-${salida}`).classList.remove("vista")
                caja.querySelector(`.item-${contador}`).classList.add("vista")
            }, 3000)
        }
    }
}


var beneficiosContenedor = document.querySelectorAll(".ultimo")

beneficiosContenedor[2].style.marginBottom = "0"

// Texto de beneficio responsive
var body = $("body")
var tituloControl = document.querySelectorAll(".tituloBeneficio")
var bodyWidthinit = body.innerWidth()

if (bodyWidthinit > 992) {
    tituloControl[1].innerHTML = "Control de <br> Acceseo"
} else {
    tituloControl[1].innerHTML = "Control de Acceseo"
}

if (window.innerWidth < 500) {
    tituloControl[0].innerHTML = "Planificación de <br> proyectos"
} else {
    tituloControl[0].innerHTML = "Planificación de proyectos"
}

$(window).resize(function () {
    var bodyWidth = body.innerWidth()
    if (bodyWidth > 992) {
        tituloControl[1].innerHTML = "Control de <br> Acceseo"
    } else {
        tituloControl[1].innerHTML = "Control de Acceseo"
    }

    if (bodyWidth <= 1190) {
        var txt = document.querySelectorAll(".txt p")

        txt[0].style.fontSize = "13px"
        txt[0].style.marginTop = "15px"
    }
})


// Midiendo el scroll para degradado de los beneficios
$(document).ready(function () {

    $(window).scroll(function () {
        var barra = $(window).scrollTop();
        var posicion = (barra * 0.3);

        document.querySelector(".beneficios--Contenedor--info").style.background = `-webkit-linear-gradient(-${posicion}deg, rgba(51,122,183,1) 45%, transparent 100%)70%`

    });

});


// Midiendo el scroll para el movimiento de fondo de lo ultimo
$(window).ready(() => {
    var donde;

    $(window).scroll(() => {
        if ($(window).scrollTop() > 880) {
            var barra = $(window).scrollTop()
            if (window.innerWidth < 992) {
                var barra = barra * 0.04
                donde = "bottom"
            } else {
                var barra = barra * 0.06
                donde = ""
            }
            var fondos = document.querySelectorAll(".fondoParallax")

            for (var i = 0; i < fondos.length; i++) {
                $(fondos[i]).css({
                    "background-position": `center ${donde} ${barra}px`
                })
            }
        }
        // var barra = barra * 0.01
        console.log(barra)
    })
})

// Aqui inicia lo del modal

var contador = 0;

$(".Comunicacion").click(() => {
    $(document.body).addClass("overflow-hidden")
    $(".cajas").addClass("modalIn")
    $(".cajas").addClass("d-flex")
    $(".cajas-opacity").addClass("opacity")
})

$(".cajas").click(() => {
    $(document.body).removeClass("overflow-hidden")
    $(".cajas").removeClass("modalIn")
    $(".cajas").addClass("modalOut")
    
    setTimeout(() => {
        $(".cajas").removeClass("modalOut")
        $(".cajas").removeClass("d-flex")
        $(".cajas-opacity").removeClass("opacity")
    }, 900)
})