// Var function scoped
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 2

function run() {
    console.log(foo); // undefined
    var foo = "Foo";
    console.log(foo); // Foo
}

//Let is block scoped
let b = 1;

if (b === 1) {
  let b = 2;

  console.log(b);
  // expected output: 2
}

console.log(b);
// expected output: 1

function checkHoisting() {
    console.log(foo); // ReferenceError
    let foo = "Foo";
    console.log(foo); // Foo
}
