if(1=="1"){ // double equals will convert number to string and makes condition true
    console.log(true);
}

if(1!="2"){ // equal to with exclamation will convert number to string
    console.log(true);
}



// Truthy & Falsy 
if(1.1+1.3 !== 2.4){ // condition is true, as javascript uses inaccurate floating point numbers
    console.log(true);
}

if(+(1.1+1.3).toFixed(2)===2.4){ // convert floating point numbers to be fixed number with tofixed method, 
    //here tofixed returns string and we need to convert to number by using the plus(+) sign 
    console.log(true)
}

// Block Scope using let 
if(true){
    let value = 'yes';
    console.log(value);
}
console.log(value); // Uncaught Reference Error 

// Var scope
if(true){
    var value1 = 'yes';
    console.log(value1)
}
console.log(value1);