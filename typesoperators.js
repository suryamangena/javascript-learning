//Converting Strings and Numbers

//a. Converting number to string 
let amount = 123;
amount = amount.toString();
console.log(amount); // Converted number to string 

//b. Converting string to number
let price= Number.parseFloat("123.12");
console.log(price);
//b. Converting string starts with character to number
let secondValue = Number.parseFloat("A123.45");
console.log(secondValue); // Throughs NaN not a number 

let thirdValue = Number.parseFloat("123.12A");
console.log(thirdValue); // O/p is 123.12, so string should not begin with character for conversion 


let person = {
    firstName: 'John',
    lastName: 'Adams'
}
console.log(typeof person);
console.log(person.firstName);



