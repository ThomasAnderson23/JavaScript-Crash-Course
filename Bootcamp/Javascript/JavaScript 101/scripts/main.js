

class Automovil {
    constructor (nombre, modelo){ 
    this.nombre = nombre;
    this.modelo = modelo;
}

Encendido () {
    return `${this.nombre} ${this.modelo} está encendido`;

}

Arranque () {
   return `${this.nombre} ${this.modelo} ha arrancado`;
}

Acelera () {
    return `${this.nombre} ${this.modelo} está acelerando`;
}

Desacelera () {
    return `${this.nombre} ${this.modelo} está desacelerando`;
}

Estaciona () {
    return `${this.nombre} ${this.modelo} se estacionó`;
}

Apagó () {
    return `${this.nombre} apagó el motor`;
    }
}

const toyotaHilux = new Automovil("Toyota", "Hilux");



const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits)


const rodrigo = {
    firstName: 'Rodrigo',
    lastName: 'Navarrete',
    age: 33,
    hobbies: ['football', 'movies', 'dancing'],
    address: {
        street: 'Monte Carmelo 3460',
        city: 'Santiago',
        state: "Lo Barnechea"
    }

} 

// Acá estoy destructuring

/*const {address: {state}} = rodrigo
console.log(state)*/





const todos = [
    {
        id:1,
        text: 'take out trash',
        isCompleted: true
    }, 
    {
        id:2,
        text: 'wash dishes',
        isCompleted: false
    }, 
    {
        id:1,
        text: 'make bed',
        isCompleted: true
    },
];

//Here I'm transcribing things into JSON (We use this for APIs, common data format in fullstack development. Maybe to send data to a server)

/*const todosJSON = JSON.stringify(todos)
console.log(todosJSON);
*/

//LOOPS: ways to loop something, it has to meet some parameters.

// For (we need 3 parameters: iterator,  condition, increment)
/*
for(let i = 0; i <= 10; i++){
console.log(`For Loop Number: ${i}`);
}

//While (We set the variable(let) outside of the loop)
let i = 0;
while(i<10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}


*/

// Now I will loop an Array, the todos and fruits.∫

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
    }


for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
    }
