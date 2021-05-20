function mathOperations(){
    let price = 200;
    let result = 0;

    //Addition
    result = price+100;
    console.log("Addition 200 + 100 "+ result);

    //Subtraction
    result = price -10;
    console.log("Subtraction 200 -10 "+ result);


    //Multiplication 
    result = price * 2;
    console.log("Multiplication 200*2 "+ result);


     //Division 
     result = price / 2;
     console.log("Division 200/2 "+ result);

     //Exponentiation
     result = price ** 2;
     console.log("Exponentiation 200**2 "+ result);

      //Modular
      result = price % 2;
      console.log("Modular 200%2 "+ result);


       //Increment
     result = price++;
     console.log("Result PostIncrement price++ = "+ result);
     console.log("Price = "+ price);
     result = ++price;
     console.log("Result PreIncrement ++price = "+ result);


     //Decrement
     result = price--;
     console.log("Result PostDecrement price-- = "+ result);
     console.log("Price = "+ price);
     result = --price;
     console.log("Result PreDecrement --price = "+ result);

     // Plus sign with string and number 
     let number = 100;
     let string = "100";
     result = 100 + string;
     console.log(" number + string is :" +result );

     //Converting stringValue to number using plus sign 
     result = number + (+string);
     console.log(" number + (+string) is :" +result );

     result = number + Number(string);
     console.log(" number + Number(string) is :" +result );

}

mathOperations();