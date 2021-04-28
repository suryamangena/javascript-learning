let mySymbol = Symbol();

//Creation of object using curly braces
let person = {
    name: "surya",
    age: 34,
    partTime: false,
    [mySymbol]: 'secretInformation',
    showInfo: function(){
        //showMessage(name); // this gives some bootstrap code
        showMessage(this.name); 
    }
}

person.showInfo(); 

//Accessing object properties using dot 
console.log(person.name);
//Access that property that doesn't exist, value will be assigned to undefined so we must be careful in accessing object properties
console.log("Gender "+person.gender);

//Changing property value 

person.age=35;
console.log(person.age);

//Access property can also be done by using square brackets
person['age']=45;
console.log(person.age)

//Symbol won't show up in a given object 
console.log("symbol won't show up in a given object")
console.log(Object.getOwnPropertyNames(person));

console.log("symbol can be shown up")
console.log(Object.getOwnPropertySymbols(person));


const sym1 = Symbol('cat');
const sym2 = Symbol('cat');

console.log(sym1===sym2);

// Symbols gives unique values 
const sym3 = Symbol.for('cat');
const sym4 = Symbol.for('cat');
console.log('Symbols with same values');
console.log(sym3==sym4);


