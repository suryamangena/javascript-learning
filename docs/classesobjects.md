## Objects

### Creating and Using JavaScript Objects

1) [Object Literals](./../objectliteral.js)
2) [Constructor Functions](./../objectsusingconstructor.js)
    a) To create multiple object instances of same class structure
3) Classes
    a) To create multiple object instances of same class structure

### Notes
1) Objects can be created using object literal and Object.create
2) But Nobody want to use object.create as it is more verbose 
3) Behind the scene object literal uses Object.create only 
```
    let person1 = {
        firstName:'Jim'
    }
    let person2 = Object.create(Object.prototype,{
        firstName: {value:'Jim', enumerable:true, writable:true, configurable:true},
    });
    Here person1 is equal to person2 but for using object.create we will need to be more verbose 
```

### Dynamic Nature of JavaScript 

1) Objects can be created dynamically and no need to create class 
2) Objects can be changed dynamically like adding properties to objects after it defined


### Object Operations
1) [Object Equality](./../objectliteral.js) 
    a) ==, ===, Object.is()
    b) [=== vs Object.is()](./../img/ThreeibleEqualvsObjectis.png)
    c) Object comparison will happen addresses, not on the content of object
    d) While on Primitive data types, comparison on content not on addresses
2) Merging Properties
3) Immutability 


### [Objecrt Properties](./../objectproperties.js)
1) Object properties can be accessed by dot . and bracket[]
2) bracket used when propertyName is dynamic

### Prototypes and Inheritance
1) Every function in javascript has prototype
