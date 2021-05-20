function breakSample(){

    let numbers = [1,2,3,4,5,6];

    for(const each of numbers){ 
        if(each===3){
            break;
        }
        console.log(each);  
    }

}

function continueSample(){

    let numbers = [1,2,3,4,5,6];

    for(const each of numbers){ 
        if(each===3){
            continue;
        }
        console.log(each);  
    }

}

breakSample();
continueSample();