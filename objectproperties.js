function testObjectProperties(){

    let person = {
        firstName: 'Jim',
        lastName: 'Cooper'
    }

    console.log("getOwnPropertyDescriptor provides prototype information of object")
    console.log(Object.getOwnPropertyDescriptor(person, "firstName"));

    //Lets make object property not writable 
    Object.defineProperty(person,'firstName',{writable:false});
    console.log("Making object property not writable");
    console.log(Object.getOwnPropertyDescriptor(person, "firstName"));

    let person1 = {
        name: {
            firstName: 'Jim',
            lastName: 'Cooper'
        },
        age: 29
    };
    Object.defineProperty(person1,'name',{writable:false});
    
    person1.name.firstName='Kris';
    console.log("Here we can change properties with in name object, as restriction applied on name");
    console.log(person1.name);
    //If we use object.freeze on name, then we can't change the value of properties of name object
    Object.defineProperty(person1,'name',{writable:false});
    Object.freeze(person1.name);
     person1.name.firstName='too';
     console.log(person1.name);



}


function testInnumerable(){

    let person = {
        firstName: 'Jim',
        lastName: 'Cooper'
    }
    Object.defineProperty(person,'firstName',{enumerable:false});

    for(let propertyName in person){
        console.log(propertyName+": "+person[propertyName]);
    }
    console.log(Object.keys(person));
    console.log(JSON.stringify(person));
}

function testConfigurable(){
    let person = {
        firstName: 'Jim',
        lastName: 'Cooper'
    }

    Object.defineProperty(person,'firstName', {configurable:false});
    Object.defineProperty(person,'firstName', {configurable:true});
    console.log("Making properties non configurable using this property");

    let person1 = {
        firstName: 'Jim',
        lastName: 'Cooper'
    }
    //We can delete property 
    delete person1.firstName;

}



testObjectProperties();
testInnumerable();