



function romanToInt(s) {
    // return s.includes();
    let exections = 0;
    let totalIntValue = 0;
    var romanArr = s.split('');
    romanArr.forEach(element => {
        if (element == "I") {
            totalIntValue += 1;
        } else if (element == "V") {
            totalIntValue += 5
        }
        else if (element == "X") {
            totalIntValue += 10
        }
        else if (element == "L") {
            totalIntValue += 50
        }
        else if (element == "C") {
            totalIntValue += 50
        }
        else if (element == "D") {
            totalIntValue += 500
        }
        else if (element == "M") {
            totalIntValue += 1000
        }
    });
    if (s.indexOf("IV")) {
        exections += 4;
    }
     if (s.indexOf("XC")) {
        exections += 90;
    }
     if (s.indexOf("CM")) {
        exections += 900;
    } 
    if (s.indexOf("I")) {
        exections += 1;
    } if (s.indexOf("V")) {
        exections += 5
    }
     if (s.indexOf("X")) {
        exections += 10
    }
     if (s.indexOf("L")) {
        exections += 50
    }
     if (s.indexOf("C")) {
        exections += 50
    }
     if (s.indexOf("D")) {
        exections += 500
    }
     if (s.indexOf("M")) {
        exections += 1000
    }
    
    return (exections);

}


let roman = "MCMXCIV";

let result = romanToInt(roman);

console.log(result);