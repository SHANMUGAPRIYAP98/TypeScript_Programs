class Shapes
{
    rectArea(length:number,breadth:number):number
    {
        return length*breadth;
    }
    squareArea(side:number):number
    {
        return side*side;
    }
    triangleArea(base:number,height:number):number
    {
        return 0.5*base*height;
    }
}
let shape:Shapes=new Shapes();
let RArea=shape.rectArea(1.45,4.78).toFixed(2)
let SArea=shape.squareArea(8.5).toFixed(2)
let TArea=shape.triangleArea(2.5,4.2).toFixed(2)
console.log("Area of Rectangle : "+RArea) 
console.log("Area of Square : "+SArea) 
console.log("Area of Triangle : "+TArea) 