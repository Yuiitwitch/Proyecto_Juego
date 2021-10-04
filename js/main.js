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
    getDistance(metros) {
        this.distance += metros;

    }
}

let hourse1 = new gameHourse ("Rayo",100,30);
let hourse2 = new gameHourse ("Veloz",100,30);
let hourse3 = new gameHourse ("Pecoso",100,30);
let hourse4 = new gameHourse ("Happy",100,30);

let players = [];

//traducdor
let traductor = {
"1": hourse1,
"2": hourse2,
"3": hourse3,
"4": hourse4
}


//Crear una funcionalidad al boton cuando pinchamos en el caballo lo meta en la variable uno.

const chooseHourse = (caballo) => {
    
  
  if(players.length <2){
    players.push(traductor[caballo]);
  }
 console.log(players[0].nombre);
 
  if(players.length ==2){
    document.getElementById("spartida").style.display = "block";
}
  }

//juego//




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