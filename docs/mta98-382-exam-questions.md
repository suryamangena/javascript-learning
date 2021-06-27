## JavaScript Certification Questions

1. data = parseInt('12infolearn3');
Ans: 12

2. What will be the value of data after the execution of the following code block?
```
data = 'info' + 'learn';
```
- Ans: infolearn

3. What will be displayed after the execution of the next code block?
```
a = 20;
b = 10;
function myAdd(num1, num2) {
b = a + num1 + num2;
return ++b;
}

alert(myAdd(10, 20));
```
- Ans: 51

4. What will be the result of the execution of the next code block?
```
data = new Array(0, 1, 2, 3, 4, 5);
alert(data.length);
```
- Ans: 6

5. What will be the result of the execution of the next code block?
```
function myAdd(a, b, c, d) {
/* some code here */
}
 
a = myAdd(1, 2, 3);
```
- Ans: normal execution of the code

6. With what way would you insert the value 7 at the end of the data array?
- Ans: data.push(7);

7. What will the following code block return?
```
var result = Boolean('false');
```
- Ans: true

8. What will the following code block display?
```
var a = 17.8;
alert(parseInt(a));
```
- Ans: 17

9. What will the following code block display?
```
var a = 17.8;
alert(parseFloat(a));
```
- Ans: 17.8 

10. The Split function converts a string value to an array. It always uses the space character as delimiter.
- Ans: incorrect

11. The Join function joins to arrays.
- Ans: Incorrect

12. With the push function we can insert a new element at the beginning of an array.
- Ans: Incorrect

13. What will the next code block return?

var num = -100;
alert(num.abs());
- Ans: execution error as abs is not a function

14. What will be the value of result after the execution of the next code block?
```
var num = 18.5;
result = Math.floor(num);
```
- Ans: 18 
- Notes: The Math.floor() function returns the largest integer less than or equal to a given number.

15. What will be the value of result after the execution of the next code block?
```
var num1 = 20;
var num2 = 25;
var num3 = 30;
result = Math.max(num1, num2, num3);
```
- Ans: 30 

16. What will be the value of result after the execution of the next code block?
```
var num1 = 20;
var num2 = 45;
var num3 = 30;
result = Math.max(Math.min(num2, num3), num1)
```
- Ans: 30 

17. What will be the value of result after the execution of the next code block?
```
var num = 18.51;
result = Math.round(num);
```
- Ans: 19 
- Notes: The Math.round() function returns the value of a number rounded to the nearest integer.

18. What is the function of Math.random()?
- Ans: Returns a random number between 0 and 1
- Notes: The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)

19. What will be the value of result after the execution of the next code block?
```
var num = 5;
result = Math.power(num, 2);
```
- Ans: execution error
- Notes: Math.power is not a function 

20. The setTimeout function works the same as the setInterval function.
- Ans: Incorrect

21. The setInterval function is different from the setTimeout function because the setTimeout function is executed only once.
- Ans: correct

22. You want to convert the variable totalCost to have with 2 numbers after the decimal point. Choose the correct syntax.
- Ans: totalCost = totalCost.toFixed(2);

23. You want to store the date September 23, 2005 to the variable birthday. Choose the correct ways to do so.
- Ans: birthday = new Date(2005,8,23);

24. Which line of code will show the number PI?
- Ans: alert(Math.PI)

25. How can you add a new item in the beginning of the array myArray?
- Ans: myArray.unshift(newItem)

26. Sort the array myArray in ascending order.
- Ans: myArray.sort()

27. Sort the array myArray in descending order.
- Ans: myArray.sort().reverse()

30. Create an alphanumeric variable exams and set its value to javascript
- Ans: let exams = 'javascript';

31. Create a numeric variable pi_const and set it's value to 3.14159
- Ans: let pi_const = 3.14159

32. Create a Boolean variable correct and set it's value to true
- Ans: let correct = true;

33. Using the appropriate function, add at the end of the data array the number 7.
- Ans: 
```
var data = new Array(1,2,3); 
data.push(7);
```

34. Store in the variable char1 the fifth character of the variable info with the use of the appropriate function.
- Ans: 
```
var info = 'Hello World!';
char1=info.charAt(4);
```

35. Using the appropriate function, set the value of a new variable named value, to the last element's value in the data array and at the same time decrease the number of it's elements by 1.
- Ans:
```
var data = new Array(1,2,3,4,5,6);
value = data.pop();
```

36. Using the appropriate function, display the size of the data array in a dialog box.
- Ans: 
```
var data = new Array(1,2,3,4,5);
alert(data.length);
```

37. Using the appropriate function, join the arrays data1 and data2 to a new array named info.
- Ans: 
```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);
```

38. Create a function named is_even which will take as a parameter a number and it will return true if the number is even and false if the number is odd.
- Ans:
```
function is_even(num){
    if(num%2==0){
        return true;
    }
    return false;
}
```

39. Make sure the phrase Hello World is in double quotes.
- Ans: alert("This is my 'first' \"Hello World\" example!");

37. Convert the variable number1 to integer.
- Ans:
```
var number1 = "3.14";
number1 = parseInt(number1);
```

38. The variable data contains numbers separated with commas. Use the appropriate function to convert the variable data into an array, in which every position will have a single number.
- Ans: 
```
var data = '1,2,3,4,5,6';
data = data.split(',');
```

39. Convert the data array to string, making sure all of the array's elements are separated with exclamation marks.
- Ans:
```
var data = new Array(1,2,3,4,5,6);
data = data.join('!');
```

40. Convert the variable number1 to number, without losing it's decimal digits.
- Ans:
```
var number1 = "123.45";
number1 = parseFloat(number1);
```

41. Set the value of the variable now to the current date and time
- Ans:
```
var now;
now = new Date();
```

42. Using the appropriate function, set the value of name to the text from the 5th to the 12th character of info the variable.
- Ans:
```
var info = 'Welcome to JavaScript';
name = info.substr(4,8);
```

43. Using the appropriate function, store into pos the position of the word dis within the info variable.
- Ans:
```
var info = 'Welcome to dis disney';
pos = info.indexOf('dis');
or 
pos =info.search('dis');
```

44. Join the values of first_name and last_name, to the variable full_name using the space character as a separator.
- Ans:
```
var full_name = '';
var first_name='john';
var last_name='adam';
full_name = first_name +' '+last_name;
```

45. Create a function named greeting which will prompt the user with the message What is your name?. After the user inputs his name, it will be stored in the variable username. Afterwards, display a dialog box with the text "Hello " followed by the user's name.
- Ans:
```
function greeting(){
    username = prompt('What is your name?');
    alert('Hello '+username);
}
```

46. Modify the function myRedirect. The function will ask the users for confirmation, using the text "Are you sure?", before redirecting them to another page. The users must be redirected to another page only if they click on OK.
- Ans:
```
function myRedirect(){
    if(confirm('Are you sure?')){
        window.location = "https://www.w3schools.com/";
    }
}
```

47. Create a function named FullDay which will take a date as a parameter. The function will return the day written in full. Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. The first day corresponds to number 0 and the last one to number 6.
- Ans:
```
function fullDay(passDate){
    day = passDate.getDay();
    switch(day){
        case 0: 
            return 'Sunday';
            break;
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;  
        case 5:
            return 'Friday';
            break;
    }
}
or
function fullDay(passDate){
    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return weekdays[passDate.getDay()];
}
```

48. Store into the mynum variable the absolute value of myres.
- Ans:
```
var myres = -1234;
var mynum = Math.abs(myres);
```

49. Round up the variable numeric.
- Ans:
```
numeric = 1.1828;
numeric = Math.ceil(numeric); -> rounds a number up to the next largest integer.
Note: Math.ceil(null) returns integer 0 and does not give a NaN error.

The Math.round() function returns the value of a number rounded to the nearest integer.
```

50. Round down the variable numeric.
- Ans:
```
var numeric = 1.912;
numeric = Math.floor(numeric);
The Math.floor() function returns the largest integer less than or equal to a given number.
```

51. Round the variable numeric to its closest integer value.
- Ans:
```
var numeric = 1.432;
numeric = Math.round(numeric);
```

52. Using the appropriate mathematical function, set the value of big to the greatest value between num1 and num2.
- Ans:
```
var num1 = 5;
var num2 = 10;
var big =0;
big = Math.max(num1,num2);

The Math.max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
```

53. Using the appropriate mathematical function, set the value of small to the smallest value between num1 and num2.
- Ans:
```
var num1 = 5;
var num2 = 10;
var small =0;
small = Math.min(num1,num2);

The static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
```

54. Use the appropriate mathematical function calculate the value of 2^20 (the 20th power of 2) and store in within the myresult variable.
- Ans:
```
var myresult=0;
myresult=Math.pow(2,20);
The Math.pow() function returns the base to the exponent power, as in base^exponent.
```

55. Create a function named myRandom which will return a random integer between 1 and 11.
- Ans:
```
function myRandom(){
    return Math.floor(Math.random()*10+1);
}

or
function myRandom() {
        return (Math.floor(Math.random() * 100) % 10 + 1);
    }
```

56. Using the appropriate mathematical function to store within the myresult variable the square root of the numeric variable.
- Ans:
```
var myresult =0;
var numeric =10;
myresult = Math.sqrt(numeric);
```

57. Create a function named futureDate which will take a date as a parameter and will add 91 days to it. The result date will be the returning value of the function.
- Ans:
```
function futureDate(inDate){
    return inDate.setDate(inDate.getDate()+91);
}

```

58. Modify the function outerSum to return the sum of the variables num1 and num2. The function must take no arguments.
- Ans:
```
var num1=10;
var num2=20;
function outerSum(){
    return (num1+num2);
}
```
## Decision and Loops Questions 

59. Insert a condition so that when the value of number1 is greater than the value of number2, the value of result is set to true. In any other case the value is set to false.
- Ans:
```
var number1 = 10; 
var number2 = 5;
var result = null;
result = number1>number2?true:false;
or 
if(number1>number2){
    result=true;
}else{
    result = false;
}
```

60. Insert a condition so that when the value of number1 is greater than the value of number2, and the value of number2 is less or equal than number3, the variable result must be set to false, otherwise it must be set to true.
- Ans:
```
var number1 = 10;
var number2=5;
var number3= 5;
if((number1>number2) && (number2<=number3)){
    result = false;
}else{
    result = true;
}
```

61. If the value of age is greater or equal to 18, or the value of access is true, then the variable allow must be set to yes, otherwise it must be set no.
- Ans:
```
var age = 18;
var access = true;
var allow = null;
if(age>=18 || access){
    allow='yes';
}else{
    allow='no';
}
or
var age = 18;
var access = true;
var allow = null;
if(age>=18 || access==true){
    allow='yes';
}else{
    allow='no';
}
```

62. Using the switch statement, if the value of action is add, the variable result must be set to the sum of the variables n1 and n2, if the value is sub, it must be set to the difference between n1 and n2, and in any other case it must be set to 0.
- Ans:
```
var n1 = 10;
var n2 = 5;
var operationType = 'add';
var result = null;
switch(operationType){
    case 'add': 
        result= n1+n2;
        break;
    case 'sub':
        result= n1-n2;
        break;
    default:
        result= 0;
        break;    
}
console.log(result);
```

63. Using the for statement calculate the sum of 1 to 200. Save the result in a variable named sum.
- Ans: 
```
var sum = 0;
for(var i=1; i<=200; i++){
    sum = sum +i;
}
console.log(sum);
```

64. Using the for statement, display the values of the students array, each one in a separate dialog box.
- Ans: 
```
var students = ['surya','rekha','kritika'];
students.forEach(element=> alert(element));
or
var students = new Array('john', 'adam');
```

65. Without modifying the condition of the loop, stop it's execution (the loop's, not the script's) when the value of value is greater than 5.
- Ans:
```
var numbers = [1,2,4,7,8,9];
for(const element of numbers){
    if(element>5){
        console.log('breaking loop');
        break;
    }
}
or
var sum =0;
do{
    value = Math.floor(Math.random()*11);
    sum+=value;
    if(value>5){
        console.log('breaking the loop');
        break;
    }
}while(sum<=1000);
```

66. In the condition if (value < 5) insert the appropriate command to bypass the command sum += value without stopping the execution of the loop.
- Ans:
```
var sum =0;
do{
    value = Math.floor(Math.random()*11);
    if(value<5){
        console.log('continue');
        continue;
    }
     sum+=value;
}while(sum<=1000);
```

## Document Object Model Questions

67. The onClick event is fired with the click of any mouse button.
- Ans: Incorrect

68. The onMouseOut event is fired when the mouse cursor leaves the element while the onMouseOver event is fired when the mouse cursor is over the element.
- Ans: Correct 
- https://www.w3schools.com/jsref/event_onmousedown.asp

69. The available keyboard events are: onKeyDown, onKeyPress, onKeyUp, onKeyPush.
- Ans: Incorrect 
- https://www.w3schools.com/jsref/event_onkeypress.asp

70. The onChange event is fired...
- Ans: after the content of an element changes
```
Execute a JavaScript when a user changes the selected option of a <select> element:
<select onchange="myFunction()">
```
- https://www.w3schools.com/jsref/event_onchange.asp

71. The onBlur event is fired when...
- Ans: an element loses its focus
```
<input type="text" onfocusout="myFunction()">
```
- https://www.w3schools.com/jsref/event_onfocusout.asp

72. 

