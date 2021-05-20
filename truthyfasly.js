function testTruthyFasly(){
    let color = "red";
    let price = 100;
    let result;

    if(color){ // condition is true as color has value
        console.log("color has a value " + Boolean(color));
    }

    color = null;
    console.log("color == null " + Boolean(color));

    color = "";
    console.log("color = '' = " + Boolean(color));
    
    color = undefined;
    console.log("color = undefined "+Boolean(color));

    color = 100/"test"; // Nan
    console.log("color = Nan "+Boolean(color));
}

testTruthyFasly();