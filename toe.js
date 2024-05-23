//Variables que contienen cada uno de los cuadros
let cell = document.querySelector(".gato")

//Array de todos los cuadros
let arregloCeldas = [cas_0, cas_1, cas_2, cas_3, cas_4, cas_5, cas_6, cas_7, cas_8]

let jugadorActual = "✖️"

//Variable para terminar el turno del jugador
let juga = document.getElementById("turnoJugador")

//Funcion para que el jugador(humano), pueda jugar
function jugador1() {
    arregloCeldas.forEach(casilla => casilla.addEventListener("click", function () {
        casilla.innerHTML = "✖️", "⭕"
        juga.innerHTML = "✖️"
        if (!ganador() && !empate()) {
            maquina()
        }
        if (variable) {
            jugadorActual = jugadorActual === "✖️" ? "⭕" : "✖️"
            casilla.innerHTML = jugadorActual
        }

        if (ganador()) {
            alert("El ganador es: " + ganadorF);
        }else if (empate()) {}


    }))
}
jugador1()

function mensaje() {
    document.getElementById("mensaje1").innerHTML = "empate"
}

function empate() {
    let empateVacios = arregloCeldas.filter(vacias=>vacias.innerHTML=="")
    if(empateVacios.length==0){
        alert("Empate")
        return true
    }
    return false
}

//Funcion para que la maquina genere una accion aleatoria dentro de los cuadros vacios 
function maquina() {
    setTimeout(() => {
        juga.innerHTML = "⭕"
        let espaciosVacios = arregloCeldas.filter(celda => celda.innerHTML == "")
        let numeroAleaotorio = Math.floor(Math.random() * espaciosVacios.length)
        if (espaciosVacios.length > 0) {
            espaciosVacios[numeroAleaotorio].innerHTML = "⭕", "✖️"
        }

    }, 1000);

}

//Variable para guardar el ganador
let ganadorF;

//Funcion para determinar y mostrar quien es el ganador
function ganador() {
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    //Bucle que recorre todas las combinaciones ganadoras posibles
    for (let combis of combinacionesGanadoras) {
        let [espacio1, espacio2, espacio3] = combis
        if (arregloCeldas[espacio1].innerHTML && arregloCeldas[espacio1].innerHTML === arregloCeldas[espacio2].innerHTML && arregloCeldas[espacio3].innerHTML === arregloCeldas[espacio1].innerHTML) {
            ganadorF = arregloCeldas[espacio1].innerHTML;
            return true;
        }
    }

    return false;
}


//Boton de las reglas
const btn = document.getElementById("reglas")

//Variable para mostrar el texto de html
const p = document.getElementById("p")

//funcion para que las reglas se muestren al dar click en el boton
btn.addEventListener("click", () => {
    p.classList.add("texto")
})

//Variable para llamar el boton del html
const btn2 = document.getElementById("boton")

//Funcion para que el juegp se reinicie al tocar el boton "otra vez"
function borrarGato() {
    btn2.addEventListener("click", () => {
        arregloCeldas.forEach(celda => celda.innerHTML = "")
    })
}
borrarGato()


const jugadores = document.getElementById("2jugadores")
let variable = false;
jugadores.addEventListener("click", () => {
    variable = true

})
function player2() {
    jugadorActual = jugadorActual === "✖️" ? "⭕" : "✖️"

}