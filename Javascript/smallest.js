

function sum(a, b, c) {

    let tempArray = [];
    for (let i = 0; i < c.length; i++) {
        let multi = c[i] * c[i - 1];
        tempArray.push(multi)
    }
    tempArray.shift();
    let largestLowest = [];
    largestLowest.push(Math.max(...tempArray));
    largestLowest.push(Math.min(...tempArray));

    return largestLowest;

}

let a = 2;
let b = 5;

let c = [1, 2, 3, 4, 5];

let result = sum(a, b, c);

console.log(result);





process.stdin.on("info", x => {
    let input=x.toString().split('\n');
class Floder {
    constructor() {
        this.floder=[];
        this.forward=[];
        this.backward=[];
    }
    clickAdd(element){
        this.floder.push(element)
    }
    backword(element) {
        this.backward.push(element)
    }
    forward(element){
        this.forward.push(element)
    }
    removeBackword() {
        return this.backward.pop()
    }
      removeForward() {
        return this.forward.pop()
    }
}
   let browseDir=new Floder();
    let command='';
    for(let i=1;i<=input[0];i++){
        command=input[i].slice(0,4);
        if(browseDir.backward.lenght!==0 && command==='OPEN' ){
            browseDir.backword(input[i])
            browseDir.clickAdd(input[i])
        }
        else if(browseDir.forward.lenght!==0 && command==='OPEN'){
            browseDir. forward(input[i]);
            browseDir.addClick(input[i])
        }
       console.log(`Case ${[i]}:\n${browseDir.Floder}`)
    }
  });