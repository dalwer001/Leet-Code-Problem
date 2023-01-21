// Add some code
process.stdin.on("data", v => {
    let customInput=v.toString().split('\n');
class Stack {
    constructor() {
        this.backwardStack=[];
        this.forwardStack=[];
    }
    addBackwordStack(element) {
        this.backwardStack.push(element)
    }
    addForwardStack(element){
        this.forwardStack.push(element)
    }
    removeBackwordStack() {
        return this.backwardStack.pop()
    }
      removeForwardStack() {
        return this.forwardStack.pop()
    }
}
   let browseDir=new Stack();
    for(let i=1;i<=customInput[0];i++){
        if(browseDir.backwardStack.lenght===0 && customInput[i].includes('open')){
            browseDir.addBackwordStack(customInput[i])
        }
        else if(browseDir.forwardStack.lenght===0){
            browseDir. addForwardStack(customInput[i])
        }
    }
    console.log(browseDir.backwardStack)
  });