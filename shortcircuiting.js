function shortCircutingAndSample(){
    let result;

    result = isColorRed("Black") && isGreatherThan1400(1400);
}

function isColorRed(value){
    console.log("In the isColorRed " +value );
    return value==="Red";
}

function isGreatherThan1400(value){
    console.log("In the isGreaterThan1400 "+ value);
    return value>1400;
}

function shortCircutingOrSample(){
    let result;

    result = isColorRed("Red") || isGreatherThan1400(1400);
}

shortCircutingAndSample();
shortCircutingOrSample();