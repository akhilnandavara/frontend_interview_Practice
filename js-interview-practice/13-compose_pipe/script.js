const addThree=(num)=>{
    return num + 3;
}

const multipyFour=(num)=>{
    return num * 4;
}

const substractTwo=(num)=>{
    return num - 2 ;
}
// compose function
const evaluateCompose=compose(addThree,multipyFour,substractTwo);
console.log( evaluateCompose(5)); // 5-2=3, 3*4=12, 12+3=15

function compose(...fn){
    return function(arg){
        for(i=fn.length-1;i>=0;i--) 
                arg=fn[i](arg);
        return  `Compose Output: `+ arg;
    }
}
// pipe function
const evaluatePipe=pipe(addThree,multipyFour,substractTwo);
console.log(evaluatePipe(5)); // 5+3=8, 8*4=32, 32-2=30

function pipe(...fn){
    return function(arg){
        for(i=0;i<=fn.length-1;i++) 
                arg=fn[i](arg);
        return `Pipe Output: `+ arg;
    }
}