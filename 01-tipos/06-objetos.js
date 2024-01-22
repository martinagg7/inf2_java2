//Personaje tele

let nombre="Mario Vaquerizo";
let anime="Cantante";
let edad=50;

let personaje={
    nombre:"Mago",
    anime:"Serpiente",
    edad:16,
};

console.log(personaje)
console.log(personaje.edad)
console.log(personaje["anime"])

//asignar un nuevo valor
personaje.edad=13;
// para borrar
delete personaje.anime