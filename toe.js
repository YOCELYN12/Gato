let cell = document.querySelector(".gato") //Variables que contienen cada uno de los cuadros

let arregloCeldas = [cas_0, cas_1, cas_2, cas_3, cas_4, cas_5, cas_6, cas_7, cas_8]//Array de todos los cuadros

let jugadorActual = "✖️"//Variable para determinar el turno

let juga = document.getElementById("turnoJugador")//Variable para terminar el turno del jugador

let ganadorF;//Variable para guardar el ganador

let variable = false;//Variable de falso, para poder jugar, humano1 vs humano2

const btn = document.getElementById("reglas")//Boton de las reglas

const p = document.getElementById("p")//Variable para mostrar el texto de html

const btn2 = document.getElementById("boton")//Variable para llamar el boton del html

const jugadores = document.getElementById("2jugadores") //Variable para los 2 jugadores. 

//Funcion para el jugador1 vs la maquina
function jugador1() {

    arregloCeldas.forEach(casilla => casilla.addEventListener("click", function () {
        casilla.innerHTML = "✖️", "⭕"

        if (!variable) {
            casilla.innerHTML = "✖️"
            juga.innerHTML = "✖️"
            maquina()
        } else if (!ganador() && !empate() && !variable) {
            maquina()
        }
        if (variable) {
            jugadorActual = jugadorActual === "✖️" ? "⭕" : "✖️"
            casilla.innerHTML = jugadorActual
        }
        if (ganador()) {
            alert("El ganador es: " + ganadorF);
        } else if (empate()) { }

    }))
}
jugador1()

//Funcion para definir un empate
function empate() {
    let empateVacios = arregloCeldas.filter(vacias => vacias.innerHTML == "")
    if (empateVacios.length == 0) {
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

//funcion para que las reglas se muestren al dar click en el boton
btn.addEventListener("click", () => {
    p.classList.add("texto")
})

//Funcion para que el juegp se reinicie al tocar el boton "otra vez"
function borrarGato() {
    btn2.addEventListener("click", () => {
        arregloCeldas.forEach(celda => celda.innerHTML = "")
    })
}
borrarGato()

variable = false

//boton para jugar entre 2 humanos
jugadores.addEventListener("click", () => {
    variable = true

})

//Funcion para el jugador 1, cuando esten jugando 2 humanos. 
function player2() {
    jugadorActual = jugadorActual === "✖️" ? "⭕" : "✖️"

}