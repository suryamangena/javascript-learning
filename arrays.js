// Create and Initialize an Array
let values = [1,2,3];

console.log(values[0]); //1
console.log(values[1]);//2
console.log(values[2]);//3
console.log(values[3]);//undefined

//creating an array with code
let valuesCode = Array.of(1,2,3);

//In javascript we can mix and match any datatype in array
//It is best practice to have same data type in an array
const mixArray = [1,"AA", 'C'];

console.log(Array.isArray(values));

//Array methods
//push -> add element on the end
//pop -> removes last element of the array 
const arrayMethods = ['a','b','c'];
const last = values.pop();//-> removes last element of the array 
console.log(last); // o/p -> c
console.log(values);// ['a','b'] -> as pop removed last element

const first = values.shift();
console.log(first); //o/p-> a -> removes first element of array 
console.log(values); // ['b']-> as pop, shift removed the last and first elements

//push 
arrayMethods.push('d','e','f'); // push can add multiple elements at a time 

//slice and splice
//end of the index is not included in slice 
const values1 = ['a', 'b', 'c'];
const newValues = values1.slice(1,2); //slice array without altering the original array 
console.log(newValues); // O/p is b

// splice -> Deleting elements or inserting elements

const values2 = ['e','f','g'];
values2.splice(1,1); // first parameter is starting index (here start index 1), second parameter number of elements to be deleted (here 1)
//inserting elements
values2.splice(1,0,'foo'); // first parameter starting index , second parameter number of elements to be deleted (here 0), element to add 
console.log(values2); // a foo b c 

//Replace an element in array 
const values3 = ['p','q','r'];
values3.splice(2,1,'hello');
console.log(values3);//o/p -> p,q,hello

//Arrays searching 









