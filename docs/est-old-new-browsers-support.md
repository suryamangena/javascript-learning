## Old and New Browsers
Code doesn't work in old browsers
The code we've been looking at in this course is not supported by older browsers. Older browsers that were developed prior to the release of ES6 were developed to support the version of JavaScript at the time (which was ES5.1). If you try running any ES6 code in an older browser, it won't work.
**_Attempting to run an arrow function in Safari 9, which does not support arrow functions. The result is a syntax error._**
Try using an arrow function in your code and opening it up in IE 11, and it won't work. There'll be an error on the console saying that it doesn't recognize the syntax.

## ES6 Specifications
http://www.ecma-international.org/ecma-262/6.0/index.html

## Browsers Features
Google Chrome - https://www.chromestatus.com/features#ES6
Microsoft Edge - https://developer.microsoft.com/en-us/microsoft-edge/platform/status/?q=ES6
Mozilla Firefox - https://platform-status.mozilla.org/
Safari - https://webkit.org/status/


## Compatibility Table 
http://kangax.github.io/compat-table/es6/

## Polyfill 
A polyfill, or polyfiller, is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively.
https://remysharp.com/2010/10/08/what-is-a-polyfill

https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills

An example polyfill
The code below is a polyfill for the new ES6 String method, startsWith():
```
if (!String.prototype.startsWith) { -> checks where startsWith native method is existed or not, it doesn't make sense to override existed native method
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

'Udacity'.startsWith('Udac');//return true
'Udacity'.startsWith('Udac',2);//return false
As you can see, a polyfill is just regular JavaScript.
```

## Transpiler:
Transpiler converts one language of code to other programming language of code. Example, we will use transpiler to convert ES6 code to ES5 code to support all the browsers in the world of JavaScript 

## Babel 
The most popular JavaScript transpiler is called Babel.
**_Babel's original name was slightly more descriptive - 6to5. This was because, originally, Babel converted ES6 code to ES5 code. Now, Babel does a lot more. It'll convert ES6 to ES5, JSX to JavaScript, and Flow to JavaScript._**

## Transpiling project in repo
If you check in the repo for this project https://github.com/udacity/course-es6/tree/master/lesson-4/walk-through-transpiling, inside the Lesson 4 directory is a little project that's all set up for transpiling ES6 code to ES5 code. There's an "ES6" directory that contains the ES6 code we'll be transpiling (using Babel) to ES5 code that will be able to run in every browser.

**_The way Babel transforms code from one language to another is through plugins. There are plugins that transform ES6 arrow functions to regular ES5 functions (the ES2015 arrow function plugin). There are plugins that transform ES6 template literals to regular string concatenation (the ES2015 template literals transform). For a full list, check out all of Babel's plugins._**

Now, you're busy and you don't want to have to sift through a big long list of plugins to see which ones you need to convert your code from ES6 to ES5. So instead of having to use a bunch of individual plugins, Babel has presets which are groups of plugins bundled together. So instead of worrying about which plugins you need to install, we'll just use the **ES2015** preset that is a collection of all the plugins we'll need to convert all of our ES6 code to ES5.

You can see that the project has a **.babelrc** file. This is where you'd put all of the plugins and/or presets that the project will use. Since we want to convert all ES6 code, we've set it up so that it has the ES2015 preset.

**Babel uses both Node and NPM to distribute its plugins. So before you can install anything, make sure you have both of these tools installed:**

