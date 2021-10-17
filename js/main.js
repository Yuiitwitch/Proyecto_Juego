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

let player1 = "";
let player2 = "";
let ganador = "";
let metros = 1000;
let partida = "";

//traducdor
let traductor = {
  "rayo": hourse1,
  "veloz": hourse2,
  "pecoso": hourse3,
  "happy": hourse4
}


//Crear una funcionalidad al boton cuando pinchamos en el caballo lo meta en la variable uno.

const chooseHorse = (caballo) => {


  if (player1 != "") {
    player2 = traductor[caballo];
    console.log(player2);
    document.querySelector('#' + caballo).classList.add("trans");
  }
  else {
    player1 = traductor[caballo];
    console.log(player1);
    document.querySelector('#' + caballo).classList.add("trans");
  }
  if (player1 != "" && player2 != "") {

    document.getElementById("spartida").style.display = "block";
  }
}


// funcion mostrar jugadores
const hplayers = () => {
  organizer("3");
  document.getElementById("race").innerHTML =
    `
<div class="p3h">
  <div><img class="player1" src="../img/${player1.nombre}.jpg" id="ph1"/></div> 
  <div><img class="player2" src="../img/${player2.nombre}.jpg" id="ph2"/></div>
</div>
<div class="nombresp3h">
<div class="p1t">${player1.nombre}</div>
<div class="p2t">${player2.nombre}</div>
</div>
<div class="metrosrecorridos">
  <div  class="metro1" id="distanceh1">${player1.distance}</div>
  <div  class="metro2" id="distanceh2">${player2.distance}</div>
</div>
<div class="boton1" id="carrera" onclick="acelerar()"><button>GO!</button></div> 
  `;
}
// juego

const acelerar1 = () => {
  let random = Math.floor(Math.random() * (100 - 10) + 10);
  player1.distance = parseInt((random + player1.distance))

  console.log(player1.distance);
  document.getElementById("carrera").style.botton = `${player1.distance}`
  document.getElementById("distanceh1").innerHTML = `P1:${player1.distance}`;
}
const acelerar2 = () => {

  let random = Math.floor(Math.random() * (100 - 10) + 10);
  player2.distance = parseInt((random + player2.distance))

  console.log(player2.distance);
  document.getElementById("carrera").style.botton = `${player2.distance}`
  document.getElementById("distanceh2").innerHTML = `P2:${player2.distance}`;
}
const acelerar = () => {
  acelerar1();
  acelerar2();
  comparar();
}
//funcion que compara la distance que lleva cada caballo para determinar el ganador
const comparar = () => {

  if (player1.distance < metros && player2.distance < metros) {

    console.log("continua la carrera");
  } else {
    document.getElementById("carrera").style.display = "none";
    if (player1.distance > player2.distance && player2.distance < player1.distance) {
      console.log(`THE WINNER IS ${player1.nombre}`);

      ganador.innerHTML = `El ganador es ${player1.nombre} !!!!`;

    } else {
      console.log(`THE WINNER IS ${player2.nombre}`)

      setTimeout(() => {

        organizer("4");
        final();

      }, 1000);

      ganador.innerHTML = `El ganador es ${player2.nombre} !!!!`;

    }
  }
}


//funcion final donde determinamos el ganador.

const final = () => {
  document.getElementById("campeon").innerHTML =
    `
    <div class="winner">
       <h1>THE WINNER IS:</h1>
    <div></div>    
    </div>
    <div class="hwinner">
    </div>
    <div>
        <button id="restart" type="button" onclick=organizer("1")'>RESTART</button>
    </div>
    `;
}







organizer = (num) => {
  let fasewant = "fase" + num;

  let arrFases = ["fase1", "fase2", "fase3", "fase4"];
  arrFases = arrFases.filter(val => !fasewant.includes(val));

  document.getElementById(fasewant).style.display = "block";

  for (let _f of arrFases) {
    document.getElementById(_f).style.display = "none";
    console.log();
  }
}
