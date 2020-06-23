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

$(window).resize(function () {
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
        datos[i].classList.add(`animacion_${i}`)
    }
    // return CaruselBeneficios = datos
}

// Asiendo El btn Leer Mas
window.addEventListener("load", () => {
    var btn = document.querySelectorAll(`a[href="#Carusel"]`);
    var hijobtn = document.querySelectorAll(".beneficios")
    // var idBeneficios = ["Planificacion"]

    if (document.body.clientWidth > 578) {
        for (var i = 0; i < btn.length; i++) {
            if (i < 3) {
                btn[i].setAttribute("href", `#Planificacion`)
            }
        }
    }

    // Texto a poner
    // var tittle;
    // var p_1;
    // var p_2;
    if (document.body.clientWidth <= 578) {
        var contenedor;
        var contenido = ["", "", ""]
        var etiquetas = ["", "", ""]

        function ClickBtn(num) {
            btn[num].addEventListener("click", () => {
                // alert(num)
                quitarBeneficios()
                AtribuirElement(num)
                window.scrollTo(0, 0)
                $("body").addClass("modal-open")
            })
        }

        function AtribuirElement(num) {
            var title = document.createElement("h3")
            var p_1 = document.createElement("p")
            var p_2 = document.createElement("p")
            var img = document.createElement("img")
            var Container = document.createElement("div")
            var ciclo = [title, p_1, p_2, img]

            // console.log(hijobtn[num])
            extraerDatos(num)
            
            $("#CaruselPadre").append(Container)
            $(Container).addClass("vistaTxt")
            contenedor = Container
            
            for (var i = 0; i < ciclo.length; i++) {
                $(contenedor).append(ciclo[i])
            }
            
            for (var i = 0; i < contenido.length; i++) {
                $(ciclo[i]).append(contenido[i])
            }

            img.setAttribute("src", "../images/Close.svg")
        
            $(img).click(() => {
                // alert("")
                $(contenedor).remove()
                aparecer()
            })
        }
        
        function extraerDatos(num) {
            // debugger
            var numero;

            if (num === 4) {
                numero = 0;
            } else {
                numero = 1;
            }

            var h3 = hijobtn[num].children[numero].children[0]
            var p1 = hijobtn[num].children[numero].children[1]
            var p2 = hijobtn[num].children[numero].children[2]
            contenido[0] = h3.innerText
            contenido[1] = p1.innerText
            contenido[2] = p2.innerText
        }

        function quitarBeneficios() {
            $(".carousel .beneficios").addClass("d-none")
        }

        for (var i = 0; i < btn.length; i++) {
            ClickBtn(i)
        }

        function aparecer() {
            for (var i = 0; i < 3; i++) {
                $(hijobtn[i]).removeClass("d-none")
                $(document.body).removeClass("modal-open")
            }
        }
    }
})
