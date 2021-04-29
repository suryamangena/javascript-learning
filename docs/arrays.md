## [Arrays](./../arrays.js)
1) In javascript we can mix and match any datatype in array
2) It is best practice to have same data type in an array
3) If we try to access index that is not existed, we get undefined value


## Creating and Initializing Arrays
Arrays are objects that can be hold multiple values or objects

## Array Methods
1) push -> add element end of array
2) pop -> removes element end of array 
3) shift -> moves to first and removes first element of array 
4) unshift -> add element to begining of array 
5) slice -> creates brand new array i.e. copy without altering original array
6) splice -> to remove or insert elements

## [Arrays Searching and Looping & Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
1) indexOf()
```
const values = ['a','b','c'];
console.log(values.indexOf('c')); //o/p -> 2
console.log(values.indexOf('d')); //o/p -> -1 index of non exisiting element in array returns -1 
```
2) filter <br/>
    a) create new array based on criteria <br/>
    b) we have to pass function to filter method-> and this function has parameter to take each element in array <br/>

3) find -> we will pass function as parameter to this method
The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

4) forEach -> we will pass function as parameter to this method 

5) map -> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array

6) [reduce](./../img/array-reduce-method.png) <br/>
    1) The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value <br/>
    2) *** - A function to execute on each element in the array (except for the first, if no initialValue is supplied). <br/>
```
For example: 
const values = [0,1,2,3,4];
values.reduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator+currentValue;
})
```
    3) currentIndex, array is optional <br/>
7) forEach vs Map

## References
1) [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
2) [Difference between forEach vs map](https://www.freecodecamp.org/news/4-main-differences-between-foreach-and-map/)
