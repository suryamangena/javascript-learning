function product(color){
    switch(color) {
        case "Red":
        case "Dark Red":
            console.log("The color is red ");
            break;
        case "Blue":
        case "Dark Blue":
        case "Light Blue":
            console.log("The color is blue");
            break;

        case "Pink":
            console.log("Color is Pink");
        case "Light Pink":
            console.log("Color is Light Pink");
            break;


        
        // Block Level Scope Problem in Siwtch 
        case "Green": 
            let message = "Green";
            break;
        case "White":
            let message = "White";
            break;

        //We get error message identifier is already declared to overcome this problem we have use block as below
        case "GreenBlock": {
            let message = "Green";
            break;
        }
        case "WhiteBlock": {
            let message = "White";
            break;
        }
    
        default:
            console.log("Unkown color");
            break;
    }
}

product("Red"); // o/p is The color is red
product("Pink"); // O/p is
// Color is Pink
// Color is Light Pink
// In color pink, we forgot to use break statement for color pink and it follows to next statements until it has break;


