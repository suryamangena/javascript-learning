// Passing by Value - Primitive Data Types
let message = 'Hello';

function changeMessage(message){
    message='Hi!';
}

changeMessage(message);

console.log(message); // O/p is Hello 


//Lets see with objects
//Passing by reference or by pointer

let person = {
    name: 'john',
    age: 32,
    partTime: false
}

function incrementAge(person){
    person.age++;
}

incrementAge(person);

console.log(person.age);