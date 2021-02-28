var Shapes = /** @class */ (function () {
    function Shapes() {
    }
    Shapes.prototype.rectArea = function (length, breadth) {
        return length * breadth;
    };
    Shapes.prototype.squareArea = function (side) {
        return side * side;
    };
    Shapes.prototype.triangleArea = function (base, height) {
        return 0.5 * base * height;
    };
    return Shapes;
}());
var shape = new Shapes();
var RArea = shape.rectArea(1.45, 4.78).toFixed(3);
var SArea = shape.squareArea(8.5);
var TArea = shape.triangleArea(2.5, 4.2).toFixed(2);
console.log("Area of Rectangle : " + RArea);
console.log("Area of Square : " + SArea);
console.log("Area of Triangle : " + TArea);
