interface Circle{
    radius:number;
}

interface Square{
    side:number;
}

interface Rectangle{
    width:number;
    length:number;
}

type Shape= Rectangle|Circle|Square
function renderShape(shape:Shape){
    console.log("Rendered");   
}

function calculateArea(shape:Shape){
    console.log("calculated area");
}

renderShape({
    radius:10,
    width:10,
    length:10,
    side:10
})

calculateArea({
    radius:10,
    width:10,
    length:10,
    side:10
})

interface Circle1{
    radius:number;
    borderWidth?:number;
}

function render(circle:Circle1) {
    let width:(number|undefined)=circle.borderWidth;
    console.log("circle created");    
}

render ({
    radius:5
})