function renderShape(shape) {
    console.log("Rendered");
}
function calculateArea(shape) {
    console.log("calculated area");
}
renderShape({
    radius: 10,
    width: 10,
    length: 10,
    side: 10
});
calculateArea({
    radius: 10,
    width: 10,
    length: 10,
    side: 10
});
function render(circle) {
    var width = circle.borderWidth;
    console.log("circle created");
}
render({
    radius: 5
});
