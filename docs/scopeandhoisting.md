## Scope and Hoisting 

## Global Scope
1) Example 1:
```
let productId = 12345;
function showProductId(){
    console.log(productId);
}
showProductId(); // O/p is 12345, as it is global scope it is giving output as 12345
```
2) Example 2:
```
function showProductId(){
    console.log(productId);
}
showProductId(); // We will get error as productid not defined
```
3) Create global scope variables in all the files is not good idea, instead of that have object and define all variables as properties of the object 
```
const app = {
    productId: 12345,
    userName: 'Joe',
    orderNumber: 789
};
```

## Function Scope
1) Variable defined in function cannot access outside the function 

## var and Hoisting 
1) Using the variables before they declared is called Hoisting 
```
console.log(productId); //o/p-> undefined
var productId=123;
```
2) using let gives reference error 
```
console.log(productId); //o/p-> reference error
let productId=123;
```
3) Hoisting is not good in case of variables

## Hoisting functions
1) Hosting function is fine 
```
showProductId(); // Calling function before declaration, hosting is fine in functions

function showProductId(){
    console.log(123);
}
```

## Undeclared Variables and Strict mode
1) Early version of javascript, we can use variables without declaring them. Javascript created fix for this
```
productId = 1234;
console.log(window.productId);
```
2) use strict -> forces developer to declare variables, before using them 
```
'use strict';
let productId = 1234;
console.log(productId);
```
