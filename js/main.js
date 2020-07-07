// Codigo del logo
var Menupar = document.querySelectorAll(".logo .par");
var tiempo = 9000

window.addEventListener("load", INIT())

function INIT() {
    setTimeout(() => {
        for (var i = 0; i < Menupar.length; i++) {
            if (i != 4 & i != 6) {
                Menupar[i].classList.add(`animacion_${i}`)
            } else {
                Menupar[i].classList.add(`animacion-4-6`)
            }
        }
        INITINTERMEDIO()
    }, tiempo)
}

function INITINTERMEDIO() {
    setTimeout(() => {
        for (var n = 0; n < Menupar.length; n++) {
            Menupar[n].classList.add(`regreso${n}`)
        }
        INITFINAL()
    }, tiempo);
}

function INITFINAL() {
    setTimeout(() => {
        for (var n = 0; n < Menupar.length; n++) {
            if (n != 4 & n != 6) {
                Menupar[n].setAttribute("id", `REGRESO${n}`)
            } else {
                Menupar[n].setAttribute("id", "REGRESO-4-6")
            }
        }
        REPARTIDO()
    }, tiempo)
}

function REPARTIDO() {
    setTimeout(() => {
        for (var i = 0; i < Menupar.length; i++) {
            Menupar[i].classList.remove(`regreso${i}`)
            Menupar[i].classList.remove(`animacion_${i}`)

            Menupar[i].setAttribute("id", "none")
        }
    }, tiempo)
    INIT()
}








$(".lento").carousel({
    interval: 15000
})

var beneficiosContenedor = document.querySelectorAll(".ultimo")

beneficiosContenedor[2].style.marginBottom = "0"

// Texto de beneficio responsive
var body = $("body")
var tituloControl = document.querySelectorAll(".tituloBeneficio")
var bodyWidthinit = body.innerWidth()

if (bodyWidthinit > 768) {
    tituloControl[1].innerHTML = "Control de <br> Acceseo"
} else {
    tituloControl[1].innerHTML = "Control de Acceseo"
}

if (window.innerWidth > 768) {
    tituloControl[0].innerHTML = "Planificación de <br> proyectos"
} else {
    tituloControl[0].innerHTML = "Planificación de proyectos"
}

$(window).resize(function() {
    var bodyWidth = body.innerWidth()
    if (bodyWidth > 768) {
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
$(document).ready(function() {

    $(window).scroll(function() {
        var barra = $(window).scrollTop();
        var posicion = (barra * 0.3);

        document.querySelector(".beneficios--Contenedor--info").style.background = `linear-gradient(-${posicion}deg, rgba(51,122,183,1) 45%, transparent 100%)70%`

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
        // console.log(barra)
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

var modalContador = 0;

$(" a[href='#modal'] ").click(() => {
    modalAdd()
})

$(".modalin").click(() => {
    modalOut()
})

function modalAdd() {
    $(" .modalin ").addClass("d-flex")
    $(".modalTxt").addClass("modalIn")
    $(document.body).addClass("modal-open")
}

function modalOut() {
    $(".modalTxt").removeClass("modalIn")
    $(".modalTxt").addClass("modalOut")

    setTimeout(() => {
        $(document.body).removeClass("modal-open")
        $(" .modalin ").removeClass("d-flex")
        $(".modalTxt").removeClass("modalOut")
    }, 600)
}


// Poniendole animacion Al carusel de beneficios

if (document.body.clientWidth <= 768) {
    backgroudnBeneficios()
}

$(window).resize(() => {
    if (document.body.clientWidth <= 768) {
        backgroudnBeneficios()
    }
})
var CaruselBeneficios = document.querySelectorAll(".carousel-inner .beneficios");

function backgroudnBeneficios() {
    var datos = document.querySelectorAll(".carousel-inner .beneficios")
    for (var i = 0; i < datos.length; i++) {
        datos[i].classList.add(`fondoBeneficios_${i}`)
    }
}

// Header opacity

$(window).scroll(() => {
    var barra = $(window).scrollTop();
    console.log(barra)

    if (barra >= 50) {
        $("header").css({
            "background": "linear-gradient(to right, #22222270, rgba(51, 122, 183, .7)"
        })
    } else {
        $("header").css({
            "background": "linear-gradient(to right, #222, #337ab7"
        })
    }
})

function Description() {
    var description = $(".imgDescription")
    if ($("body").width() < 410) {
        console.log(description)
    }
}

Description()