## Harmony, ES6, ES2015 Features
1) Var vs Let 
2) Template Literals for String concatenations
3) Destructig 
4) Object Literal Shorthand 
5) Iteration  

## [Var vs Let](./../README.md) 
Refer to above link 

## String Concatenation 
Prior to ES6, the old way to concatenate strings together was by using the string concatenation operator ( + ).
```
const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}

let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';
```
This works alright, but it gets more complicated when you need to build multi-line strings.
```
let note = teacher.name + ',\n\n' +
  'Please excuse ' + student.name + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' +
  student.guardian;
  ```
However, that’s changed with the introduction of template literals (previously referred to as "template strings" in development releases of ES6).

## Template Literals
Template literals are essentially string literals that include embedded expressions.

Denoted with backticks (` `) instead of single quotes ( '' ) or double quotes ( "" ), template literals can contain placeholders which are represented using ${expression}. This makes it much easier to build strings.

Here's the previous examples using template literals.
```
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
```

By using template literals, you can drop the quotes along with the string concatenation operator. Also, you can reference the object's properties inside expressions.

### TIP: Embedded expressions inside template literals can do more than just reference variables. You can perform operations, call functions and use loops inside embedded expressions!

## Destructuring

In ES6, you can extract data from arrays and objects into distinct variables using destructuring.

This probably sounds like something you’ve done before, for example, look at the two code snippets below that extract data using pre-ES6 techniques:

The example below shows extracting values from an array.

```
const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);
```
And this example below shows extracting values from an object.

const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const carat = gemstone.carat;

console.log(type, color, carat);

And this example shows extracting values from an object.

Both are pretty straightforward, however, neither of these examples are actually using destructuring.

So what exactly is destructuring?

### Destructuring
Destructuring borrows inspiration from languages like Perl and Python by allowing you to specify the elements you want to extract from an array or object on the left side of an assignment. It sounds a little weird, but you can actually achieve the same result as before, but with much less code; and it's still easy to understand.

Let’s take a look at both examples rewritten using destructuring.

Destructuring values from an array
```
const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z);
```
## TIP: You can also ignore values when destructuring arrays. For example, const [x, , z] = point; ignores the y coordinate and discards it.

### Destructuring values from an object

```
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const {type, color, carat} = gemstone;

console.log(type, color, carat);
```
In this example, the curly braces { } represent the object being destructured and type, color, and carat represent the variables where you want to store the properties from the object. Notice how you don’t have to specify the property from where to extract the values. Because gemstone has a property named type, the value is automatically stored in the type variable. Similarly, gemstone has a color property, so the value of color automatically gets stored in the color variable. And it's the same with carat.

## TIP: You can also specify the values you want to select when destructuring an object. For example, let {color} = gemstone; will only select the color property from the gemstone object.

What do you expect to be returned from calling getArea()?

```
const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius, getArea, getCircumference} = circle;
```
Correct! Calling getArea() will return NaN. When you destructure the object and store the getArea() method into the getArea variable, it no longer has access to this in the circle object which results in an area that is NaN.

## Object literal Shorthand
You’ve probably written code where an object is being initialized using the same property names as the variable names being assigned to them.

But just in case you haven’t, here’s an example.
```
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);
```
Do you see the repetition? Doesn't type: type, color: color, and carat:carat seem redundant?

The good news is that you can remove those duplicate variables names from object properties _if_ the properties have the same name as the variables being assigned to them.

Check it out!
```
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat
};

console.log(gemstone);
```

Speaking of shorthand, there’s also a shorthand way to add methods to objects.

To see how that looks, let’s start by adding a calculateWorth() method to our gemstone object. The calculateWorth() method will tell us how much our gemstone costs based on its type, color, and carat.
```
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth: function() {
    // will calculate worth of gemstone based on type, color, and carat
  }
};
```
In this example, an anonymous function is being assigned to the property calculateWorth, but is the function keyword really needed? In ES6, it’s not!

## Shorthand method names
Since you only need to reference the gemstone’s calculateWorth property in order to call the function, having the function keyword is redundant, so it can be dropped.
```
let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }
};
```

## Iteration 
