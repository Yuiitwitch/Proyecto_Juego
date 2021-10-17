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
    player2= traductor[caballo];
    console.log(player2);
    document.querySelector('#' + caballo).classList.add("trans");
  }
  else{
    player1 = traductor[caballo];
    console.log(player1);
    document.querySelector('#' + caballo).classList.add("trans");
  }
  if (player1 != "" && player2 != "") {

    document.getElementById("spartida").style.display = "block";
  }
}
  // if (players == null{
  //   players = traductor[caballo]
  // }

//   if(player1 != ""){
//     players = traductor[caballo];
//     chooseHorse()

//     setTimeout(() =>{
//         organizer("3")
//         jugadores();

//     }, 1000);
//   }
// }

funcion mostrar jugadores
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
juego//


// let carrera = 1000;
// let partida = "";
// let player1 = "";
// let player2 = "";

// const acelerar1 = () => {

//   let random = Math.floor(Math.random() * (25 - 10) + 10);
//   player1.distance += parseInt((random * player1.distance))

//   console.log(player1.distance);
//   document.getElementById("distanceh1").style.botton = player1.distance / 20 + "em";
// }
// const acelerar2 = () => {

//   let random = Math.floor(Math.random() * (25 - 10) + 10);
//   player2.distance += parseInt((random * player2.distance))

//   console.log(player2.distance);
//   document.getElementById("distanceh2").style.botton = player2.distance / 20 + "em";
// }








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