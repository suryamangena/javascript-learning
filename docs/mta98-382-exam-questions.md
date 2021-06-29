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
- Ans: 2
```
numeric = 1.1828;
numeric = Math.ceil(numeric); -> rounds a number up to the next largest integer.
Note: Math.ceil(null) returns integer 0 and does not give a NaN error.

The Math.round() function returns the value of a number rounded to the nearest integer.
```

50. Round down the variable numeric.
- Ans: 1Math.round
```
var numeric = 1.912;
numeric = Math.floor(numeric);
The Math.floor() function returns the largest integer less than or equal to a given number.
```

51. Round the variable numeric to its closest integer value.
- Ans: 1
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

72. If in a page there are two elements with the same id myduplicate, what will be the result of the next code block?

var myElement = document.getElementById("myduplicate");

- Ans: The first element with this id

73. What will be the result of the execution of the next code block?

var o = document.getElementsByTagName('a');
- Ans: All the elements with tag a

74. With the innerHTML property we can have access to the HTML code of an element.
- Ans: Correct 

75. With JavaScript we can access an element's CSS properties.
- Ans: Correct

76. If we use the document.write function after the page has been loaded, then the whole document is replaced with the new text
- Ans: Correct 

77. With which function can we open a new window?
- Ans: window.open 

78. Which line of code will return the second paragraph of the document?
- Ans: document.getElementsByTagName("p")[1]

79. Make sure when the user clicks the button mybutton the message Hello World is displayed.
- Ans:
```
<div>
    <input type="button" value="click me!" name="mybutton" onclick="alert('Hello World!');"/>
</div>
```

80. Make sure when the user moves the mouse over the page's text box, the message This is a textbox is displayed.
- Ans:
```
<input type="text" value="" id="mytext" onmouseover="alert('This is a textbox');"/>
```

81. Modify the function alterData so when it is called, it will set the content of the div element with id content to This is the new content
- Ans:
```
function alertData(){
    document.getElementById('content').innerHTML='This is the new content';
}
<p id="content" onclick="alertData();">I am a paragraph click to change it.</p>
https://www.w3schools.com/jsref/prop_html_innerhtml.asp
```

82. Modify the function myToggle so that when it is called, if the div element with id mymessage is visible on the page it should disappears and vice versa. Make sure that when the div element is not visible, it does not occupy any space on the page.
- Ans:
```
function myToggle(){
    if(document.getElementById("mymessage").style.display!=''){
        document.getElementById("mymessage").style.display='';
    }else{
        document.getElementById('mymessage').style.display='none';
    }
}
```

83. Make sure when we click the page's link, the dialog box is displayed, but we should not be redirected to another page.
- Ans: 
```
<a href="https://www.google.com/" class="link" onclick="alert('You Should stay here');return false">Google Link</a>

```

84. Make sure the function myLength is called everytime the content of the text field with id myname is changed. The function will set the content of the div element with id mysize, to the current length of the textbox value.
- Ans:
```
function myLength(){
    document.getElementById('mysize').innerHTML = document.getElementById('myname').value.length;
}
 <input type="text" class="textbox" value="" id="myname" onchange="myLength();" />
                        <p id="mysize">0</p>
```

85. Make sure the function myColor is called everytime the text field with id myname is focused, and the function myRestore is called when it is unfocused. myColor function will set the background color of the field to black and the font color to white. myRestore function will set the background color of the field to white and the font color to black.
- Ans:
```
function myColor(){
    document.getElementById('myname').style.color = 'white';
    document.getElementById('myname').style.backgroundColor = 'black';
}

function myRestore(){
    document.getElementById('myname').style.color = 'black';
    document.getElementById('myname').style.backgroundColor = 'white';
}
<input id="myname" type="text" value="This is focus test" onfocusin="myColor();" onfocusout="myRestore();" >
<input id="myfocustest" type="text" value="This is focus test" onmouseover="myColor();" onmouseout="myRestore();" >
```

86. Make sure that when the user clicks the button with caption progress, the width of the div with id progvalue changes to 78% and the text of the div with id progpercent changes to 78%
- Ans:
```
<div id="progressbar">
    <div id="progvalue">
        <div id="progpercent">61%
        </div>
    </div>
</div>
<input type="button" value="progress" class="button" onclick="myProgress();"/>

function myProgress(){
    document.getElementById('progvalue').style.width='78%';
    document.getElementById('progpercent').innerHTML='78%';
}
```

87. Create a function named myNumbers that will write at the position from which it was called, the following:
1
12
123
1234
12345
123456
1234567
12345678
123456789
- Ans:
```
function myNumbers(){
    for( i=1; i<=9;i++){
        for(k=1;k<=i;k++){
            document.write(k);
        }
        document.write("<br/>");
    }

}

<body>
<script type="text/javascript">myNumbers();</script>
</body>

```

88. Make sure when the user clicks the link new window the function myOpenNew is called. The function will open a new window and visit www.google.com. The name of the new window must be google
- Ans:
```
function myOpenNew(){
    window.open("https://www.google.com/","google");
}
<a href="javascript:void(0);" class="link" onclick="myOpenNew();">new window</a>
<a href="#" class="link" onclick="myOpenNew();">new window</a>
# scrolls you to the top of the page but javascript:void(0); does not.
```

89. Create a function named changeColor. In this function, create an array named myColors which will have the following elements:
#aaaaaa
#ff0000
#00ff00
#0000ff
#ffff00
Make sure that every time the page is reloaded, the background color will be set to a random color from this array.
- Ans: 
```
function changeColor(){
    var myColors = ['#aaaaaa',
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00'];
    var myRand = Math.floor(Math.random()*100) %5;
    document.body.style.background = myColors[myRand];
}
<body onload="changeColor();">
</body>

```

90. In the function getBold, insert into the myArea array all the words that are written in bold. (each word will be in a different position of the array).
- Ans: 
```
function getBold(){
    var elements = document.getElementsByTagName('b');
    var myArea = new Array(elements.length);
    for(i=0; i<elements.length;i++){
        myArea[i]=elements[i].innerText;
        myArea.push(boldElements[i].innerText);
    }
}

<p><b>This text is bold</b></p>
<p><b>Word</b></p>
```

## Interact with HTML Forms

91. What will happen when we execute the next code block?
```
var text = 'this is an example string!';
text = text.replace('a', '_');
```
- Ans: The letter a will be replaced only once in the text with the underscore character.

92. What will happen when we execute the next code block?
```
var text = 'this is an example string!';
text = text.replace(/a/g, '_');
```
- Ans: All occurrences of the a will be replaced with the underscore character.
```
The following example uses the global flag (g) to replace all occurrences of the JS in the str by the JavaScript:
let str = 'JS will, JS will rock you!';
let newStr = str.replace(/JS/g,'JavaScript');
console.log(newStr);
```

93. Which of the following functions must be applied on "Hello World!" in order to get the result "WORLD!"?
- Ans: toUpperCase, substr, replace

94. Every element supports the onSubmit event.
- Ans: Incorrect 

95. The following code block will have the same result on every browser.
```
alert('example'.substr(-1));
```
- Ans: Incorrect 

96. With which event can we cancel the submission of a form?
- Ans: onsubmit 

97. With JavaScript we can submit a form without the use of a submit type button.
- Ans: Correct 

98. Which method of submitting a form is the least secure?
- Ans: the get method because its field and values can be found in the resulting url.

99. You have a form with id myForm. Which command should you use to get all the elements inside this form?
- Ans: document.getElementById('myForm').elements

100. The values of which element are not sent by a form
- Ans: p, a 

101. Which property of an input element must be set, in order for that element to be sent by a form?
- Ans: name

102. Which ways are valid to submit a form?
- Ans: 
```
<input type="submit" value="submit" />
<input type="image" src="button.gif" />
```

103. In a form, an option box has the type...
- Ans: radio 

104. Which properties are valid for the form element?
- Ans: method, action 

105. Which values can the method property of a form have?
- Ans: get, post 

106. The action property of a form defines...
- Ans: The page to which the data of the form will be sent.

107. A group of radio boxes must have...
- Ans: the same name

108. Insert a flow control condition so that if the value of data is greater than 10 characters long, the variable size is set to the value big, otherwise it is set to the value small
- Ans: 
```
var data = 'this is not a small string';
var size = null;
if(data.length>10){
    size='big';
}else{
    size='small';
}
```

109. Convert the variable data to uppercase.
- Ans: 
```
var data = 'Hello WORLD!';
data = data.toUpperCase();
```

110. Convert the variable data to lowercase.
- Ans: 
```
var data = 'Hello WORLD!';
data = data.toLowerCase();
```

111. Replace the word easy with the word difficult in info.
- Ans:
```
	var info = 'This is a very easy example';
	info = info.replace('easy','difficult');
```

112. Replace the word search with the word replace in info. The replacement must be case-insensitive.
- Ans:
```
	var info = 'cAsE InSeNsItIvE SeArCh';
	info = info.replace(/search/i,'replace');
```

113. Make sure that the submission of the form is allowed only after the myValidate function is called and it returns true.
- Ans:
```
html:
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=7" />
		
		<link rel="stylesheet" href="style.css" type="text/css" />
		<script src="exam.js" type="text/javascript"></script>
		
		<title>INFOlearn HTML</title>
	</head>
	
	<body>
		
		<div id="logo" class="centered width-950"></div>
		<div id="header"><div class="wave centered width-950"></div></div>
		<div id="content" class="centered width-950">
			
			<form action="" method="get" name="myform" id="myform" onsubmit="return myValidate();">
				<p>e-mail</p>
				<input type="text" id="email" class="textbox" />
				<input type="submit" value="submit" id="mysubmit" class="button" />
			</form>
			
		</div>
		
	</body>
</html>
exam.js:
	/* DATA */
	function myValidate()
	{
		return (document.getElementById('email').value.length > 0);
	}
```

114. Modify the function myValidate so that it allows the submission of the form only if the field with id email is not empty.
- Ans: 
```
 function myValidate(){
        if(document.getElementById('email').value.length > 0){
            return true;
        }

        return false;       
    }
```

115. Make sure that when the user clicks the button send data, the form is submitted, The type of the button must remain as button
- Ans:
```
<form action="" method="get" name="myform" id="myform">
				<p>e-mail</p>
				<input type="text" id="email" class="textbox" />
				<br />
				<input type="button" value="send data" class="button" id="mybutton" onclick="document.getElementById('myform').submit();" />
			</form>
```

116. Make sure that the form is submitted when the users clicks the link send data.
- Ans:
```
	<form action="" method="get" name="myform" id="myform">
				<p>e-mail</p>
				<input type="text" id="email" class="textbox" />
				<br />
				<a href="" class="link" id="mylink" onclick="document.getElementById('myform').submit();">send data</a>
			</form>
```

117. Create a function named myAdd. This function will be called when the user clicks the button calc, it will sum the integer values of the input fields with id number1 and number2 and will display the result in field with id myresult
- Ans:
```
<input type="button" value="calc" class="button" onclick="myAdd();" />

	function myAdd(){
		var num1 = parseInt(document.getElementById('number1').value);
		var num2 = parseInt(document.getElementById('number2').value);
		document.getElementById('myresult').value= num1+num2;
	}
```

118. Make sure that the submission page of the form, opens in a new window.
- Ans:
```
<form name="myform" target="_blank">
				<div id="ponline1">
					
					<select name="tests">
						<option value="css">CSS</option>
						<option value="html">HTML</option>
						<option value="js">JavaScript</option>
						<option value="php">PHP</option>
						<option value="mysql">MySQL</option>
					</select>
					
					<div id="pbutton1">
						<input type="submit" name="mysubmit" value="submit" />
					</div>
					
				</div>
			</form>
```

119. Make sure that the data of the form are sent to the page test.php with the POST method
- Ans:
```
<form name="myform" method="POST" action="test.php">
				<div id="ponline1">
					
					<select name="tests">
						<option value="css">CSS</option>
						<option value="html">HTML</option>
						<option value="js">JavaScript</option>
						<option value="php">PHP</option>
						<option value="mysql">MySQL</option>
					</select>
					
					<div id="pbutton1">
						<input type="submit" name="mysubmit" value="submit" />
					</div>
					
				</div>
			</form>
```

120. Make sure that form of the document sends its data to the page test.php, with one extra parameter named submit with the value true. The extra parameter should be sent using the GET method.
- Ans:
```
<form name="myform" method="POST" action="test.php?submit=true">
				<div id="ponline1">
					
					<select name="tests">
						<option value="css">CSS</option>
						<option value="html">HTML</option>
						<option value="js">JavaScript</option>
						<option value="php">PHP</option>
						<option value="mysql">MySQL</option>
					</select>
					
					<div id="pbutton1">
						<input type="submit" name="mysubmit" value="submit" />
					</div>
					
				</div>
			</form>
```