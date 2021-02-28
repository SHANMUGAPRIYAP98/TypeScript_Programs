let ReferNumber=912345678901;
let CName="Diyashri"
//CName=ReferNumber;
//number is not assignable to string type and vice-versa
function AreaParallelogram(base:number,height:number)
{
    return base*height;
}
let area=AreaParallelogram(10,20);
console.log("Area of Parallelogram : "+area);
//let area1:string=AreaParallelogram(15,20);
//Type 'number' is not assignable to type 'string'..


//let arr:(number|string)[]=[1,"hello","welcome",2,5,10,true]
//Type 'boolean' is not assignable to type 'string | number'

