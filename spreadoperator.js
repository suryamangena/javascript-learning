function spreadOperator(){
    stringToArray();
    copyArray();
    copyArrayObjects();
    concatenateArray();
    spreadInConstructors();
    spreadForFunctionArgs();
    shallowCopy();
}


//string to array
function stringToArray(){ //using spread operator
    let productNumber = "FR-R92B-58";
    let values = [...productNumber];
    console.log(values);
}

//Copy array with primitive values
function copyArray(){
    let arr = [1,2,3];
    let arr2 = [...arr];
    console.log(arr2);
    arr2.push(4);

    console.log(arr2); // o/P is [1,2,3,4]
    console.log(arr); // O/P is [1,2,3]
}


//Copy object arrays

function copyArrayObjects(){
    let _products = [{
        productID: 707,
        name: "product1"
    },
    {
        productID: 708,
        name: "product2"
    }]

    //The array is copied, but the underlying objects are still accessed
    // Since each one is object it only copy the object pointer not the object
    let diff = [..._products];

    diff[0].productID = 606;

    console.log(diff[0].productID);
    console.log(_products[0].productID);


}

//Concatenation

function concatenateArray(){
    let _products = [{
        productID: 707,
        name: "product1"
    },
    {
        productID: 708,
        name: "product2"
    }]
    
    let _newproducts = [{
        productID: 808,
        name: "product808"
    },
    {
        productID: 909,
        name: "product909"
    }]

    let spproducts = [..._products, ..._newproducts];
    console.log(spproducts.length);
}


//Passing Parameters to constructor using spread operator
function spreadInConstructors(){

    let dt = new Date(2019,10,15);
    console.log(dt);

    let dateFields = [2019,11,15];
    dt = new Date(...dateFields);
    console.log(dt);

}


//Passing Parameters to function using spread operator
function spreadForFunctionArgs(){
    multipleParams(1,2,3);

    let args = [1,2,3];
    multipleParams(...args);
}



function multipleParams(arg1, arg2, arg3){
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
}


// Spread Operator can be used to shallow copy on object literals
function shallowCopy(){
    let _products = {
        productID: 707,
        name: "product1"
    };

    //Following peroms shallow copy of objects
    let prod2 = {..._products};

    prod2.productID = 999;

    console.log(_products);
    console.log(prod2);
}



spreadOperator();