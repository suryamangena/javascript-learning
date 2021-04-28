## [Objects and the DOM](./../objectsanddom.js)

## Object Properties
1) We use the curly braces to create the object
2) Accessing properties can be done by using dot or square brackets
3) Access that property that doesn't exist, value will be assigned to undefined so we must be careful in accessing object properties

## Symbol
1) It provides a unique value behind the scenes
2) Are used to identifier for object properties; this is data type only purpose
3) they are used for secret property and not private
4) One case where symbols can generate same values using symbol.for() -> Creates a global symbol space and it adds these symbols

## Object Functions
1) We can add functions in object
2) forget to add this keyword will give us some bootstrap code and this refer to current object 

## [Passing Objects to Functions](./../passingobjectstooffunctions.js)

## [Standard Built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

## Document 
1) Each tag in html is an Element
    document.getElementById('id');
2) Using javascript we can apply the styles, using HTMLElement and method style in it can be used for styling. Generally using CSS for styling is good way to do it

## [Detecting Button Clicks](./../home.js)
```
const button = document.getElementById('see-review');

button.addEventListener('click', function(){
    console.log('click');
})
```

## [Showing and Hiding DOM Elements](./../home.js)
```
const button = document.getElementById('see-review');

button.addEventListener('click', function(){
    console.log('click');
    const review = document.getElementById('review');
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent='CLOSE REVIEW';
    }else{
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
})
```

