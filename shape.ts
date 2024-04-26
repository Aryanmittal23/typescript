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