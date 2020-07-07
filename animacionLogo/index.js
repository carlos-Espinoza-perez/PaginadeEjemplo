var pares = document.querySelectorAll(".par");
var tiempo = 9000

window.addEventListener("load", INIT())

function INIT() {
    setTimeout(() => {
        for (var i = 0; i < pares.length; i++) {
            if (i != 4 & i != 6) {
                pares[i].classList.add(`animacion_${i}`)
            } else {
                pares[i].classList.add(`animacion-4-6`)
            }
        }
        INITINTERMEDIO()
    }, tiempo)
}

function INITINTERMEDIO() {
    setTimeout(() => {
        for (var n = 0; n < pares.length; n++) {
            pares[n].classList.add(`regreso${n}`)
        }
        INITFINAL()
    }, tiempo);
}

function INITFINAL() {
    setTimeout(() => {
        for (var n = 0; n < pares.length; n++) {
            if (n != 4 & n != 6) {
                pares[n].setAttribute("id", `REGRESO${n}`)
            } else {
                pares[n].setAttribute("id", "REGRESO-4-6")
            }
        }
        REPARTIDO()
    }, tiempo)
}

function REPARTIDO() {
    setTimeout(() => {
        for (var i = 0; i < pares.length; i++) {
            pares[i].classList.remove(`regreso${i}`)
            pares[i].classList.remove(`animacion_${i}`)

            pares[i].setAttribute("id", "none")
        }
    }, tiempo)
    INIT()
}