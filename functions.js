//  Function Declaration or Function Definition or Function Statement
function showMessage(){ // Defining function
    console.log("in a function");
}

//Calling function 
showMessage();

//Example: Function Declaration
alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
function foo() { return 5; }

// Function Expression -> means function expression can be stored in a variable

let x = function(a,b){return a*b};

x();

let myFunction = function loggingFunction(){ //Function names are optional
    console.log('Here is a message');
}

//calling function in function expressions
myFunction(); 
loggingFunction(); // Gives uncaught referenceError, here name of the function we are using only for debugging purposes

//Example: Function Expression
alert(foo()); // ERROR! foo wasn't loaded yet
let foo = function() { return 5; }

// Function defined with parameters and in calling function don't pass values

let oneFunction = function(message, firstName){
    console.log(message);
    console.log(firstName);
}

oneFunction() // one error will be thrown, but message and firstName will be assigned with undefined value


// Nested Functions

let key = 42;

function getSecretCode(value){
    let keyGenerator = function(){
        let key = 12;
        console.log('in keyGenerator: ', key);
        return key;
    }

    let code = value* keyGenerator();
    console.log(' in getSecretCode: ', key);
    return code;

}

getSecretCode(2);
// O/p is in keyGenerator 12 
// O/p is in getSecretCode 42 // key variable in keygenerator no longer exists outside the keyGenerator 

