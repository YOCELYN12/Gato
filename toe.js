
let cas_0 = document.getElementById("cas_0")
let cas_1 = document.getElementById("cas_1")
let cas_2 = document.getElementById("cas_2")
let cas_3 = document.getElementById("cas_3")
let cas_4 = document.getElementById("cas_4")
let cas_5 = document.getElementById("cas_5")
let cas_6 = document.getElementById("cas_6")
let cas_7 = document.getElementById("cas_7")
let cas_8 = document.getElementById("cas_8")

let arregloCeldas = [cas_0, cas_1, cas_2, cas_3, cas_4, cas_5, cas_6, cas_7, cas_8]


let juga=document.getElementById("turnoJugador")

function jugador1() {
    arregloCeldas.forEach(casilla => casilla.addEventListener("click", function () {
        casilla.innerHTML = "✖️", "⭕"
        juga.innerHTML="✖️"
        maquina()
        if (ganador()) {
            alert("El ganador es: " + ganadorF);
        }
        
    }))
}
jugador1()


function maquina() {
    setTimeout(() => {
        juga.innerHTML="⭕"
        let espaciosVacios = arregloCeldas.filter(celda => celda.innerHTML == "")
        let numeroAleaotorio = Math.floor(Math.random() * espaciosVacios.length)
        if (espaciosVacios.length > 0) {
            espaciosVacios[numeroAleaotorio].innerHTML = "⭕", "✖️"
        }
    }, 1000);
}


let ganadorF;
function ganador() {
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for (let combis of combinacionesGanadoras) {
        let [espacio1, espacio2, espacio3] = combis
        if (arregloCeldas[espacio1].innerHTML && arregloCeldas[espacio1].innerHTML === arregloCeldas[espacio2].innerHTML && arregloCeldas[espacio3].innerHTML === arregloCeldas[espacio1].innerHTML) {
            ganadorF = arregloCeldas[espacio1].innerHTML;
            return true;
        }
    }
    return false;
}



const btn = document.getElementById("reglas")
const p = document.getElementById("p")

btn.addEventListener("click", () => {
    p.classList.add("texto")
})

const btn2 = document.getElementById("boton")

function borrarGato() {
    btn2.addEventListener("click", () => {
        arregloCeldas.forEach(celda=>celda.innerHTML="")
    })
}
borrarGato()






