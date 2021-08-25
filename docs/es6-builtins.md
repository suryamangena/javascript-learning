## Built-Ins

## JavaScript Primitive Data Types
1) numbers
2) strings
3) booleans
4) null
5) undefined
6) Symbols

## [Symbols](./../img/symbols-banans.png)
If I ask you take out a banana from bowl of bananas, then we will get the question like which banana we need to take out. With ES6 we got a solution to identify object properties uniquely.
```
A symbol is a unique and immutable data type that is often used to identify object properties.

To create a symbol, you write Symbol() with an optional string as its description.

const sym1 = Symbol('apple');
console.log(sym1);
```

Here’s the code to represent the fruit bowl from the example,
```
const bowl = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.15 },
  'orange': { color: 'orange', weight: 170.097 }
};
```
The bowl contains fruit which are objects that are properties of the bowl. But, we run into a problem when the second banana gets added.
```
const bowl = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.151 },
  'orange': { color: 'orange', weight: 170.097 },
  'banana': { color: 'yellow', weight: 176.845 }
};
console.log(bowl);
Object {apple: Object, banana: Object, orange: Object}
```

Instead of adding another banana to the bowl, our previous banana is overwritten by the new banana being added to the bowl. To fix this problem, we can use symbols.
```
const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl);
Object {Symbol(apple): Object, Symbol(banana): Object, Symbol(orange): Object, Symbol(banana): Object}
```
By changing the bowl’s properties to use symbols, each property is a unique Symbol and the first banana doesn’t get overwritten by the second banana.

## Iterable and Iterator Protocol:
### Iterable
The iterable protocol is used for defining and customizing the iteration behavior of objects. What that really means is you now have the flexibility in ES6 to specify a way for iterating through values in an object. For some objects, they already come built-in with this behavior. For example, strings and arrays are examples of built-in iterables.
```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
  console.log(digit);
}
```
Sets and Maps are other examples of built-in iterables

## How it Works
In order for an object to be iterable, it must implement the iterable interface. If you come from a language like Java or C, then you’re probably familiar with interfaces, but for those of you who aren’t, that basically means that in order for an object to be iterable it must contain a default iterator method. This method will define how the object should be iterated.

The iterator method, which is available via the constant [Symbol.iterator], is a zero arguments function that returns an iterator object. An iterator object is an object that conforms to the iterator protocol.

## The Iterator Protocol
The iterator protocol is used to define a standard way that an object produces a sequence of values. What that really means is you now have a process for defining how an object will iterate. This is done through implementing the .next() method.

How it Works
An object becomes an iterator when it implements the .next() method. The .next() method is a zero arguments function that returns an object with two properties:

value : the data representing the next value in the sequence of values within the object
done : a boolean representing if the iterator is done going through the sequence of values
If done is true, then the iterator has reached the end of its sequence of values.
If done is false, then the iterator is able to produce another value in its sequence of values.
Here’s the example from earlier, but instead we are using the array’s default iterator to step through the each value in the array.

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

## Set
A set is a collection of distinct items
Sets are not indexed-based - you do not refer to items in a set based on their position in the set
items in a Set can’t be accessed individually

## How to Create a Set
1) First Way 
```
const games = new Set();
console.log(games);
```

2) This creates an empty Set games with no items.
```
Set {}
```

3) create a Set from a list of values, you use an arra
```
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games);
```

## Modifying Sets
1) .add()
2) .delete() -> delete a item
3) .clear() -> delete all items 

## Note
1) If you attempt to .add() a duplicate item to a Set, you won’t receive an error, but the item will not be added to the Set. Also, if you try to .delete() an item that is not in a Set, you won’t receive an error, and the Set will remain unchanged.
2) .add() returns the Set if an item is successfully added. On the other hand, .delete() returns a Boolean (true or false) depending on successful deletion.

## Working With Sets

1) Checking The Length
.size() -> to know the length 
**_Remember, Sets can’t be accessed by their index like an array, so you use the .size property instead of .length property to get the size of the Set._**

2) Checking If An Item Exists

Use the .has() method to check if an item exists in a Set. If the item is in the Set, then .has() will return true. If the item doesn’t exist in the Set, then .has() will return false.
```
console.log(months.has('September'));
```

3) Retrieving All Values
Finally, use the .values() method to return the values in a Set. The return value of the .values() method is a SetIterator object.
```
console.log(months.values());
```
## Note:
**_The .keys() method will behave the exact same way as the .values() method by returning the values of a Set within a new Iterator Object. The .keys() method is an alias for the .values() method for similarity with maps. You’ll see the .keys() method later in this lesson during the Maps section._**

4) Looping over Sets
In ES6, then you’ll recall that Sets are built-in iterables. This means two things in terms of looping:

1) You can use the Set’s default iterator to step through each item in a Set, one by one.
2) You can use the new for...of loop to loop through each item in a Set.

## Using the SetIterator
Because the .values() method returns a new iterator object (called SetIterator), you can store that iterator object in a variable and loop through each item in the Set using .next().
```
const iterator = months.values();
iterator.next();
```
## Using a for...of Loop
An easier method to loop through the items in a Set is the for...of loop.
```
const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
  console.log(color);
}
```

## WeakSet
A WeakSet is just like a normal Set with a few key differences:
1) a WeakSet can only contain objects
2) a WeakSet is not iterable which means it can’t be looped over
3) a WeakSet does not have a .clear() method
```
let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
roster.add('Amanda');
Uncaught TypeError: Invalid value used in weak set(…)
```
## Maps
If Sets are similar to Arrays, then Maps are similar to Objects because Maps store key-value pairs similar to how objects contain named properties with values.

## Create a Map
1) 
```
const employees = new Map();
console.log(employees);
```
2) This creates an empty Map employee with no key-value pairs.
Map {}

## Modifying Maps
Unlike Sets, you can’t create Maps from a list of values; instead, you add key-values by using the Map’s .set() method.
```
const employees = new Map();

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);
```
1) Remove 
To remove key-value pairs, simply use the .delete() method.
```
employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');
console.log(employees);
```

2) .clear() method to remove all key-value pairs from the Map.

**_ If you .set() a key-value pair to a Map that already uses the same key, you won’t receive an error, but the key-value pair will overwrite what currently exists in the Map. Also, if you try to .delete() a key-value that is not in a Map, you won’t receive an error, and the Map will remain unchanged.The .delete() method returns true if a key-value pair is successfully deleted from the Map object, and false if unsuccessful. The return value of .set() is the Map object itself if successful._**

## Working with Maps
 you can use the .has() method to check if a key-value pair exists in your Map by passing it a key.
 ```
 const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));
```
And you can also retrieve values from a Map, by passing a key to the .get() method.
```
console.log(members.get('Evelyn'));
```

3) Looping Through Maps
you’ve got three different options to choose from:

1) Step through each key or value using the Map’s default iterator
2) Loop through each key-value pair using the new for...of loop
3) Loop through each key-value pair using the Map’s .forEach() method

a) Using the MapIterator
Using both the .keys() and .values() methods on a Map will return a new iterator object called MapIterator.  You can store that iterator object in a new variable and use .next() to loop through each key or value. 
```
let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();
```
Use .next() to the get the next key value.
On the flipside, use the .values() method to access the Map’s values, and then repeat the same process.
```
let iteratorObjForValues = members.values();
iteratorObjForValues.next();
```

b) Using a for...of Loop
```
for (const member of members) {
  console.log(member);
}
```
## Question1:
```
/*
 * Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 */

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const member of members) {
    console.log([key, value]=member);
}
```

## Using a forEach Loop
Your last option for looping through a Map is with the .forEach() method.
```
members.forEach((value, key) => console.log(key, value));
```

## WeakMap
1) a WeakMap can only contain objects as keys,
2) a WeakMap is not iterable which means it can’t be looped and
3) a WeakMap does not have a .clear() method.
```
const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);
```
but if you try to add something other than an object as a key, you’ll get an error!
```
library.set('The Grapes of Wrath', false);
Uncaught TypeError: Invalid value used as weak map key(…)
```

## Promises
It tells do this thing right now and notify me when it's done so i can pickup where i left off. 
A JavaScript Promise is created with the new Promise constructor function - new Promise(). A promise will let you start some work that will be done asynchronously and let you get back to your regular work. When you create the promise, you must give it the code that will be run asynchronously. You provide this code as the argument of the constructor function:
```
new Promise(function () {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
    }, Math.random() * 2000);
});
```
This code creates a promise that will start in a few seconds after I make the request. Then there are a number of steps that need to be made in the createSundae function.

Indicated a Successful Request or a Failed Request
But once that's all done, how does JavaScript notify us that it's finished and ready for us to pick back up? It does that by passing two functions into our initial function. Typically we call these resolve and reject.

The function gets passed to the function we provide the Promise constructor - typically the word "resolve" is used to indicate that this function should be called when the request completes successfully. Notice the resolve on the first line:
```
new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        resolve(sundae);
    }, Math.random() * 2000);
});
```

Now when the sundae has been successfully created, it calls the resolve method and passes it the data we want to return - in this case the data that's being returned is the completed sundae. So the resolve method is used to indicate that the request is complete and that it completed successfully.

If there is a problem with the request and it couldn't be completed, then we could use the second function that's passed to the function. Typically, this function is stored in an identifier called "reject" to indicate that this function should be used if the request fails for some reason. Check out the reject on the first line:

```
new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        if ( /* iceCreamConeIsEmpty(flavor) */ ) {
            reject(`Sorry, we're out of that flavor :-(`);
        }
        resolve(sundae);
    }, Math.random() * 2000);
});
```
**_A Promise constructor takes a function that will run and then, after some amount of time, will either complete successfully (using the resolve method) or unsuccessfully (using the reject method).When the outcome has been finalized (the request has either completed successfully or unsuccessfully), the promise is now fulfilled and will notify us so we can decide what to do with the response_**

## Promises Return Immediately
The first thing to understand is that a Promise will immediately return an object.
```
const myPromiseObj = new Promise(function (resolve, reject) {
    // sundae creation code
});
```
That object has a .then() method on it that we can use to have it notify us if the request we made in the promise was either successful or failed. The .then() method takes two functions:

1) the function to run if the request completed successfully
2) the function to run if the request failed to complete
```
mySundae.then(function(sundae) {
    console.log(`Time to eat my delicious ${sundae}`);
}, function(msg) {
    console.log(msg);
    self.goCry(); // not a real method
});
```
As you can see, the first function that's passed to .then() will be called and passed the data that the Promise's resolve function used. In this case, the function would receive the sundae object. The second function will be called and passed the data that the Promise's reject function was called with. In this case, the function receives the error message "Sorry, we're out of that flavor :-(" that the reject function was called with in the Promise code above.

## Proxies:
Dictionary defines something that represents someone else
In ES6, an object stand in for another object to handle all the interactions for that other object. 
To create a proxy object, we use the Proxy constructor - new Proxy();. The proxy constructor takes two items:

the object that it will be the proxy for
an object containing the list of methods it will handle for the proxied object

The second object is called the handler.

A Pass Through Proxy
The simplest way to create a proxy is to provide an object and then an empty handler object.
```
var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});

agent.status; // returns 'looking for work'
```
The above doesn't actually do anything special with the proxy - it just passes the request directly to the source object! If we want the proxy object to actually intercept the request, that's what the handler object is for!

Get Trap
The get trap is used to "intercept" calls to properties:
```
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    }
};
const agent = new Proxy(richard, handler);
agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)
```

## Generators
Whenever a function is invoked, the JavaScript engine starts at the top of the function and runs every line of code until it gets to the bottom. There's no way to stop the execution of the function in the middle and pick up again at some later point. This "run-to-completion" is the way it's always been:

Pausable Functions
If we _do_ want to be able to pause a function mid-execution, then we'll need a new type of function available to us in ES6 - generator functions! Let's look at one:
```
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log( name );
    }

    console.log('the function has ended');
}
```
Notice the asterisk (i.e. *) right after the function keyword? That asterisk indicates that this function is actually a generator!
Valid definitions
```
function* names() { /* ... */ }
function * names() { /* ... */ }
function *names() { /* ... */ }
```

## Generators & Iterators
When a generator is invoked, it doesn't actually run any of the code inside the function. Instead, it creates and returns an iterator. This iterator can then be used to execute the actual generator's inner code.
```
const generatorIterator = getEmployee();
generatorIterator.next();
```
The code never paused! So how do we get this magical, pausing functionality?
## The Yield Keyword
The yield keyword is new and was introduced with ES6. It can only be used inside generator functions. yield is what causes the generator to pause. Let's add yield to our generator and give it a try:
```
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
        yield;
    }

    console.log('the function has ended');
}
const generatorIterator = getEmployee();
generatorIterator.next();
Logs the following to the console:

the function has started
Amanda
It's paused! But to really be sure, let's check out the next iteration:

generatorIterator.next();
Logs the following to the console:

Diego
```
So it remembered exactly where we left off! It took the next item in the array (Diego), logged it, and then hit the yield again, so it paused again.

Now pausing is all well and good, but what if we could send data from the generator back to the "outside" world? We can do this with yield.

## Yielding Data to the "Outside" World
Instead of logging the names to the console and then pausing, let's have the code "return" the name and then pause.
```
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;
    }

    console.log('the function has ended');
}
```
Notice that now instead of console.log(name); that it's been switched to yield name;. With this change, when the generator is run, it will "yield" the name back out to the function and then pause its execution. Let's see this in action:
```
const generatorIterator = getEmployee();
let result = generatorIterator.next();
result.value // is "Amanda"

generatorIterator.next().value // is "Diego"
generatorIterator.next().value // is "Farrin"

```
## Question1:
How many times will the iterator's .next() method need to be called to fully complete/"use up" the udacity generator function below:
```
function* udacity() {
    yield 'Richard';
    yield 'James'
}
```
**_It will be called one more time than there are yield expressions in the generator function._**


## Sending Data into/out of a Generator:
So we can get data out of a generator by using the yield keyword. We can also send data back into the generator, too. We do this using the .next() method:
```
function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next(); // starts running the generator function
iterator.next('Hello Udacity Student'); // send data into the generator
// the line above logs to the console: Your response is "Hello Udacity Student"!
```
Calling .next() with data (i.e. .next('Richard')) will send data into the generator function where it last left off. It will "replace" the yield keyword with the data that you provided.

So the yield keyword is used to pause a generator and used to send data outside of the generator, and then the .next() method is used to pass data into the generator. Here's an example that makes use of both of these to cycle through a list of names one at a time:

