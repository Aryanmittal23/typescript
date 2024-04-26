var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["Add"] = 0] = "Add";
    Arithmetic[Arithmetic["Sum"] = 1] = "Sum";
    Arithmetic[Arithmetic["Mul"] = 2] = "Mul";
    Arithmetic[Arithmetic["Div"] = 3] = "Div";
})(Arithmetic || (Arithmetic = {}));
function calculate(a, b, type) {
    return 1;
}
var ans = calculate(1, 2, Arithmetic.Mul);
console.log(ans);
