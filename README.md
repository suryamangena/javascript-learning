- You will need to have Node installed to start this environment. If you are not sure if you have Node installed run `node -v` in your terminal. If you do not see a version number output, install Node before moving on.
- Install light-server locally and save it to your development environment by running `npm install lite-server --save-dev` in your terminal.
- Run `npm run start` in your terminal to start the server.
- Your browser will open at `localhost:3000`.

# JavaScript Learning

## Variables
    1) Valid Variable Names
        a) Start with one of this: _ $ letter
        b) Followed by Zero or More: _ $ letter number

    Note: 
    1) Variable name start with underscore(_) is used for private variables
    2) Variable name start with dollar sign($) is used for automatically generated code 
    3) Variable _123 is not a good choise for name
    4) Use camelcase for variable names 
    5) Variable names cannot have spaces and keywords
    6) Variables not assigned to a value by default will be assigned with undefined value

## Constants
    Value doesn't change 
    1) Declare a constant and need to initialize during declaration, will get uncaught syntax error if we don't initialize during declaration 

## [Var vs Let keyword](./varvslet.js)
    a) Var:
        1) Variables declared with var keyword are hoisted (initialized with undefined before the code is run) which means they are accessible in their enclosing scope even before they are declared
        function run() {
            console.log(foo); // undefined
            var foo = "Foo";
            console.log(foo); // Foo
        }
        2) Var is function scoped 

    b) Let:
     1) let variables are not initialized until their definition is evaluated.  Accessing them before the initialization results in a Uncaught ReferenceError. Variable said to be in "temporal dead zone" from the start of the block until the initialization is processed.
        function checkHoisting() {
            console.log(foo); // ReferenceError
            let foo = "Foo";
            console.log(foo); // Foo
        }
     2) let is block scoped
    
    







