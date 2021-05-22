'use strict';
function testPerson(){
    // Object literal creation, here hard coding values
    let person = {
        firstName: 'Jim',
        lastName: 'Cooper'
    };

    //Objects can be changed dynamically 
    person.age = 17;
    person.isAdult = function() {return this.age>18;}

    console.log(person.isAdult());
    console.log(Object.keys(person));

}

testPerson();


function registerUser(firstName, lastName){
    let person = { // Object properties shorthand
        firstName,
        lastName,
        //Method shorthand, this is only applicable for object literal and it won't applicable for normal functions outside
        age: 18,
        isAdult() {return this.age>=18;}
    }

    console.log(person);
    console.log(person.isAdult());
}

registerUser("surya", "mangena");


function testObjectEquality(){

    let person1 = { // Object properties shorthand
        firstName: "Surya",
        lastName: "M",
        //Method shorthand, this is only applicable for object literal and it won't applicable for normal functions outside
        age: 18,
        isAdult() {return this.age>=18;}
    }

    let person2 = {};
    Object.assign(person2, person1);

    console.log("Object comparison happens only on address and not on objects content");
    console.log(person1 === person2);
    
    //Object.assign can be used for merge the objects

    let healStats = {
        height: 68,
        weight: 150
    }

    Object.assign(person1, healStats);
    console.log("Merging objects using Object.assign, Sideeffect of Object.assign is it mutated the original object ")
    console.log(person1);

    console.log('To avoid mutated the original object using object.assign ');
    let mergedObject = Object.assign({},person1,{waist:30, bodyMass:40})
    console.log(mergedObject);
    console.log(person1);

}

testObjectEquality();