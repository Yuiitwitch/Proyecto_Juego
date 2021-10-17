//AUTHOR : Alfonso Lara
//version 1.0

class gameHourse {
  constructor(nombre, aceleracion) {
    this.nombre = nombre;
    this.aceleracion = aceleracion;
    this.distance = 0;
  }
  //metodos    
  setDistance(metros) {
    this.distance += metros;

  }
  getDistance() {
  }
}

let hourse1 = new gameHourse("Rayo", 100, 30);
let hourse2 = new gameHourse("Veloz", 100, 30);
let hourse3 = new gameHourse("Pecoso", 100, 30);
let hourse4 = new gameHourse("Happy", 100, 30);

let players = [];

//traducdor
let traductor = {
  "rayo": hourse1,
  "veloz": hourse2,
  "pecoso": hourse3,
  "happy": hourse4
}


//Crear una funcionalidad al boton cuando pinchamos en el caballo lo meta en la variable uno.

const chooseHorse = (caballo) => {


  for (let index = 0; index < 2; index++) {
    players.push(traductor[caballo]);
    console.log(caballo);
    document.querySelector('#' + caballo).classList.add("trans")
  }
  // if (players == null{
  //   players = traductor[caballo]
  // }


  if (players.length > 3) {
    document.getElementById("spartida").style.display = "block";
  }
  if(player1 != ""){
    players = traductor[caballo];
    chooseHorse()

    setTimeout(() =>{
        organizer("3")
        jugadores();

    }, 1000);
  }
}

//funcion mostrar jugadores
const hplayers = () => {
  document.getElementById("race").innerHTML =
    `
  <div><img class="player1" src="img/${players.nombre}.jpg" id="ph1"/>
  <div class="p1t">Player1</div>
</div>
<div><img class="player2" src="img/${players.nombre}.jpg" id="ph2"/>
  <div class="p2t">Player2</div>
</div>
<div class="distance">
  <div id="distanceh1">Mts:${players.distance}</div>
  <div id="distanceh2">Mts:${players.distance}</div>
</div>
</div>
</div>
<div class="boton1" id="carrera" onclick="acelerar()"><button>GO!</button></div> 
  `;
}
//juego//


let carrera = 1000;
let partida = "";
let player1 = "";
let player2 = "";

const acelerar1 = () => {

  let random = Math.floor(Math.random() * (25 - 10) + 10);
  player1.distancia += parseInt((random * player1.distancia))

  console.log(player1.distancia);
  document.getElementById("distanceh1").style.botton = player1.distancia / 20 + "em";
}
const acelerar2 = () => {

  let random = Math.floor(Math.random() * (25 - 10) + 10);
  player2.distancia += parseInt((random * player2.distancia))

  console.log(player2.distancia);
  document.getElementById("distanceh2").style.botton = player2.distancia / 20 + "em";
}








organizer = (caballo) => {
  let fasewant = "fase" + caballo;

  let arrFases = ["fase1", "fase2", "fase3", "fase4"];
  arrFases = arrFases.filter(val => !caballo.includes(val));

  document.getElementById(caballo).style.display = "block";

  for (let _f of arrFases) {
    document.getElementById(_f).style.display = "none";
    console.log();
  }
}