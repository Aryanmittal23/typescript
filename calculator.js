function calculate(a, b, type) {
    if (type === "sum") {
        return a + b;
    }
    if (type === "sub") {
        return a - b;
    }
    if (type === "mul") {
        return a * b;
    }
    if (type === "div") {
        return a / b;
    }
    return -1;
}
var ans = calculate(1, 2, "sum");
console.log(ans);
