function Person(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}



function testPerson(){
    Person.prototype.age=29;


    let jim = new Person('jim','cooper');
    let sofia = new Person('surya','m');

    console.log('Jims Object doesnt have age but still we are getting age has javascript it looks in its prototype, if property not found in current object');
    console.log(jim.age);
    //
}

testPerson();

