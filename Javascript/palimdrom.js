


function palindrom(x) {
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