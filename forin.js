function testforin(){
    let testObject = {
        product: "A",
        type: "Food",
        size: "M",
        standardPrice: 10,
        price: function(){
            return this.standardPrice*2;
        }
    }

    for(const key in testObject){
        console.log("'"+key+"'="+testObject[key]);
    }
}

testforin();