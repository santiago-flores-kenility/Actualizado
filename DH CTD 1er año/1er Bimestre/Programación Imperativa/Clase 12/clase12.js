let Concurso = {
    etapas: [],
    ganador: "",
    encontrarGanador: function (P1, P2) {
        let puntosPrimerParticipante = 0
        let puntosSegundoParticipante = 0
        for (i = 0; i < P1.length; i++) {
            if (P1[i] > P2[i]) {
                puntosPrimerParticipante += 1
                this.etapas.push([1, 0])
            }
            else if (P1[i] < P2[i]) {
                puntosSegundoParticipante += 1
                this.etapas.push([0, 1])
            } else { this.etapas.push([0, 0]) }
        }
        this.ganador = (puntosPrimerParticipante > puntosSegundoParticipante) ? "primer participante" : (puntosSegundoParticipante > puntosPrimerParticipante) ? "segundo participante" : "Empate - sin ganador"
        return this.ganador
    }
}

let Alicia = [90, 10, 75]
let Bob = [90, 40, 25]


//console.log(Concurso.encontrarGanador(Alicia,Bob))
//console.log(Concurso);

let misMascotas = [
    {
        nombre: "Milú",
        raza: "dogo",
        edad: 5,
        sonido: "grr",
        ladrar: function () {
            return this.sonido + " " + this.sonido
        }
    },
    {
        nombre: "Sandokán",
        raza: "salchicha",
        edad: 11,
        sonido: "güigüi",
        ladrar: function () {
            return this.sonido + " " + this.sonido
        }
    }, {
        nombre: "Karina",
        raza: "Siamés",
        edad: 8,
        sonido: "miauuu",
        aullar: function () {
            return this.sonido + " " + this.sonido
        }
    },
]

//    console.log(misMascotas[1].ladrar());

function sumarEdad(array) {
    for (i = 0; i < array.length; i++) {
        array[i].edad++
    }
    return array
}