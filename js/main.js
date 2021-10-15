//AUTHOR : Alfonso Lara
//version 1.0

class gameHourse{
    constructor(nombre,life,speed){
    this.nombre = nombre;
    this.life = life;
    this.speed = speed;
    this.distance= 0;
    }
//metodos    
    setDistance(metros) {
        this.distance += metros;

    }
    getDistance(){
    }
}

let horse1 = new gameHourse ("Rayo",100,30);
let horse2 = new gameHourse ("Veloz",100,30);
let horse3 = new gameHourse ("Pecoso",100,30);
let horse4 = new gameHourse ("Happy",100,30);

let players = [];

//traducdor
let traductor = {
"1": horse1,
"2": horse2,
"3": horse3,
"4": horse4
}


//Crear una funcionalidad al boton cuando pinchamos en el caballo lo meta en la variable uno.

let arrayHourse = [];
const chooseHourse = (caballo) => {
    
  arrayHourse[i] = caballo;
  document.getElementById("spartida" + i).style.display = "block";
  indice++;
  go();
  }

//juego//


let carrera = 1000;
let player1 = 0;
let player2 = 0;



const go = () =>{
  if (i==2) {

    organizer("fase4");

    player1 += Math.random() * (100 - 50) + 50;
    player2 += Math.random() * (100 - 50) + 50;
    
    if (player1 >= carrera || player2 >= carrera) {
      document.getElementById("carrera").style.display ="block";
      clearInterval(carrera);
    }
    if (player1>player2) {
      document.getElementById("")
    }
  }
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