


function palindrom(x) {

    // let reversed_number = 0;
    // while (x != 0 ) {
    //     reversed_number = reversed_number * 10;
    //     reversed_number = reversed_number + x % 10;
    //     x -= x % 10;
    //     x /= 10;
       
    // }
    // if(reversed_number == x){
    //     return true;
    // }else{
    //     return false;
    // }


    //    return x;
        var digits = x.toString().split('');
        var realDigits = digits.map(Number).reverse().join("")
            if(realDigits == x){
                return true;
            }else{
                return false;
            }
     
}


let number = 758;

let result = palindrom(number);

console.log(result);