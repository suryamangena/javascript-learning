function testForOf(){

    //Iterate over array 
    let _products = [
        {
            "productID": 680,
            "color": "Red"
        },
        {
            "productID": 700,
            "color": "white"
        }
    ]


    for( const item of _products){
        console.log(JSON.stringify(item));
    }

    // forof loops over string
    let productName = "product tv mount fits 75inch"; // Here iterating over char array
    let letters = "";
    for(const char of productName){
        letters+=char;
    }
    console.log(letters);

}