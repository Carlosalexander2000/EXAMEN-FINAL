//Creamos la clase simbolo dentro de ella un array donde se almacenaran los palos 
class Simbolo {
    constructor(figura = []) {
        this.figura = figura
        console.log(this.figura);
    }
}
//Creamos la clase naipe dentro de ella un array donde se estan los valores de las cartas  
class Naipe {
    constructor(valor = [2, 3, 4, 5, 6, 7, 8, 9, 10,], valorEspecial = [11], valorRepetido = [10]) {
        this.valor = valor;
        this.valorEs = valorEspecial
        this.repetido = valorRepetido
    }
}
//Creamos la clase carta dentro de ella un array donde se almacenara todo lo que contiene una carta
class Carta {
    constructor(carta=[]) {
        this.carta=carta
    }
}
//Creamos la clase letra dentro de ella un array donde se encuentran los valores de las letras  
class Letra {
    constructor(letras = ['2', '3', '4', '5', '6', '7', '8', '9', '10'], letraA = ['A'], letrasES = ['J', 'Q', 'K']) {
        this.letras = letras
        this.A = letraA
        this.especial = letrasES
    }
}
//Nuestra clase fabrica es la que montara nuestro mazo de cartas y nos mostrara las cartas para hacer nuestro 
//juego de 21
class Fabrica {
    palos = [Palo.figura.push('♠'), Palo.figura.push('♦'), Palo.figura.push('♥'), Palo.figura.push('♣')];
    mazo = [];
    primerCarta;
    segundaCarta;
    pedir;
//Crea y concatena los elementos de creados previamente para hacer un mazo de 52 cartas
    crear() {
        
        for (let m = 0; m < 4; m++) {
            let especial = Letras.A[0].concat(Palo.figura[m].concat(Valor.valorEs))
            let carta=new Carta(especial)
            this.mazo.push(carta)
      }
    
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 4; j++) {
                let agregar = Letras.letras[i].concat(Palo.figura[j]).concat(Valor.valor[i])
                let carta=new Carta(agregar)
                this.mazo.push(carta)
            }
        }
        for (let a = 0; a < 3; a++) {
            for (let b = 0; b < 4; b++) {
                let letraEs = Letras.especial[a].concat(Palo.figura[b]).concat(Valor.repetido[0])
                let carta=new Carta(letraEs)
                this.mazo.push(carta)
            }
        }
        console.log(this.mazo)
        
    }
    
//Este metodo una vez ya creado nuestro mazo procede a mezclarlo y mostrar las cartas
    mezclar() {
        const aleatiro1 = Math.floor(Math.random() * this.mazo.length)
        const aleatorio2 = Math.floor(Math.random() * this.mazo.length)
        this.primerCarta = this.mazo[aleatiro1]['carta']
        this.segundaCarta = this.mazo[aleatorio2]['carta']
        let CartaI = document.getElementById('cartaI')
        let CartaD = document.getElementById('cartaD')
        CartaI.innerHTML = this.primerCarta
        CartaD.innerHTML = this.segundaCarta
        console.log(this.primerCarta)
        console.log(this.segundaCarta)


    }
//Este metodo trae una carta aleatoria del mazo
    pedido() {
        let CartaC = document.getElementById('pedido')
        const aleatorio = Math.floor(Math.random() * this.mazo.length)
        this.pedir = this.mazo[aleatorio]['carta']
        CartaC.innerHTML = this.pedir
        console.log(this.pedir)
    }


//Con este metodo se calcula la suma de las cartas y se trasnsforma a numeros enteros 
    valor() {
        let a
        for (let g=0;g<4;g++) {
                a= fabrica.mazo[g]['carta']=Valor.valorEs
                console.log(parseInt(a))
        }
        for (let q = 4; q < 40; q++) {
             a = parseInt(fabrica.mazo[q]['carta']);
            console.log(a)
        }
        for(let r=40;r<52;r++){
             a=fabrica.mazo[r]['carta']=Valor.repetido
            console.log(parseInt(a))
        }
        let g=document.getElementById("mensaje")
        let d = parseInt(this.primerCarta)
        let b = parseInt(this.segundaCarta)
        let f= parseInt(this.pedir)
        console.log(a)
        console.log(b)
        let c=d+b
        let e=d+b+f
        console.log(c)
// se pone las condiciones para decidir si gana o pierde el jugador 
            if (c < 21) {
                g.innerHTML="NO GANA"
            }
            if (c === 21) {
                g.innerHTML="GANO"
            }
            if (c > 21) {
                g.innerHTML="NO GANA"
            }
            
            if (f < 21) {
                g.innerHTML="NO GANA"
            }
            if (f === 21) {
                g.innerHTML="GANO"
            }
            if (f > 21) {
                g.innerHTML="NO GANA"
            }
    }
}

//creamos por defecto nuestros objetos
// llamamos a nuestra classe fabrica 

let Palo = new Simbolo()
let Letras = new Letra()
let Valor = new Naipe()
let fabrica = new Fabrica()
fabrica.crear()