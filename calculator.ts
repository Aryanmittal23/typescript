function calculate(
    a:number,
    b:number,
    type:"sum"|"sub"|"mul"|"div"
):number{
    if(type==="sum"){
    return a+b;
    }
    if(type==="sub"){
        return a-b;
    }
    if(type==="mul"){
        return a*b;
    }
    if(type==="div"){
        return a/b;
    }
    return -1;
}
const ans = calculate(1,2,"sum");
console.log(ans);

