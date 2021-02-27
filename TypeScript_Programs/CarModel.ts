abstract class CarBaseModel
{
    Cname:string;
    Color:string;
    EngineCap:number;
    CylinNo:number;
    constructor(Cname:string,Color:string,EngineCap:number,CylinNo:number)
    {
        this.Cname=Cname;
        this.Color=Color;
        this.EngineCap=EngineCap;
        this.CylinNo=CylinNo;
    }
    abstract StartCar();
    abstract StopCar();
}
class SUV extends CarBaseModel
{
    Cname:string;
    Color:string;
    EngineCap:number;
    CylinNo:number;
    Price:number;
    Total:number;
    constructor(Cname:string,Color:string,EngineCap:number,CylinNo:number,Price:number,Total:number)
    {
        super(Cname,Color,EngineCap,CylinNo);
        this.Price=Price;
        this.Total=Total;
    }
    StartCar() {
        console.log(this.Cname+" Car has Started");
    }
    StopCar() {
        console.log(this.Cname+" Car has Stopped");
    }
    printSUVDetails()
    {
        console.log("Car Name : "+this.Cname);
        console.log("Color : "+this.Color);
        console.log("Engine Capacity : "+this.EngineCap+" CC");
        console.log("No.of.Cylinders : "+this.CylinNo);
        console.log("Price : "+this.Price+" Lakhs");
        console.log("Total No.of.SUV in India : "+this.Total);
    }
}
class HatchBack extends CarBaseModel
{
    Cname:string;
    Color:string;
    EngineCap:number;
    CylinNo:number;
    Price:number;
    Total:number;
    constructor(Cname:string,Color:string,EngineCap:number,CylinNo:number,Price:number, Total:number)
    {
        super(Cname,Color,EngineCap,CylinNo);
        this.Price=Price;
        this.Total=Total;
    }
    StartCar() {
        console.log(this.Cname+" Car has Started");
    }
    StopCar() {
        console.log(this.Cname+" Car has Stopped");
    }
    printHatchBackDetails()
    {
        console.log("Car Name : "+this.Cname);
        console.log("Color : "+this.Color);
        console.log("Engine Capacity : "+this.EngineCap+" CC");
        console.log("No.of.Cylinders : "+this.CylinNo);
        console.log("Price : "+this.Price+" Lakhs");
        console.log("Total No.of.HatchBack Cars in India : "+this.Total);
    }
}
class Sedan extends CarBaseModel
{
    Cname:string;
    Color:string;
    EngineCap:number;
    CylinNo:number;
    Price:number;
    Total:number;
    constructor(Cname:string,Color:string,EngineCap:number,CylinNo:number,Price:number, Total:number)
    {
        super(Cname,Color,EngineCap,CylinNo);
        this.Price=Price;
        this.Total=Total;
    }
    StartCar() {
        console.log(this.Cname+" Car has Started");
    }
    StopCar() {
        console.log(this.Cname+" Car has Stopped");
    }
    printSedanDetails()
    {
        console.log("Car Name : "+this.Cname);
        console.log("Color : "+this.Color);
        console.log("Engine Capacity : "+this.EngineCap+" CC");
        console.log("No.of.Cylinders : "+this.CylinNo);
        console.log("Price : "+this.Price+" Lakhs");
        console.log("Total No.of.Sedan Cars in India : "+this.Total);
    }
}
let suvob:SUV =new SUV("Renault Kiger","Blue",999,3,5.45,79);
console.log("----------SUV CAR DETAILS----------")
suvob.StartCar()
suvob.printSUVDetails()
suvob.StartCar()
console.log("----------HATCHBACK CAR DETAILS----------")
let hatchob:HatchBack =new HatchBack("Maruti Suzuki Swift","Red",1197,4,5.73,25);
hatchob.StartCar()
hatchob.printHatchBackDetails()
hatchob.StopCar()
console.log("----------SEDAN CAR DETAILS----------")
let sedanob:Sedan =new Sedan("Hyundai Verna","Green",1493,4,9.11,38);
sedanob.StartCar()
sedanob.printSedanDetails()
sedanob.StopCar()