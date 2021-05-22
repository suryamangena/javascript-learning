function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// this keyword always refer to object
// new creates new object

function test(){
    let person = new Person('Jim','Cooper');
    console.log(person);
}

test();
