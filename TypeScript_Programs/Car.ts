class Car
{
    Cname:String;
    Color:string;
    EngineCap:number;
    CylinderNo:number;
    constructor(Cname:String,Color:string,EngineCap:number,CylinderNo:number)
    {
        this.Cname=Cname;
        this.Color=Color;
        this.EngineCap=EngineCap;
        this.CylinderNo=CylinderNo;
    }
    printDetails()
    {
        console.log(`The ${this.Cname} Car is ${this.Color} in Color with Engine Capacity holding ${this.EngineCap} Litres with ${this.CylinderNo} cylinders `);
    }
    startCar()
    {
        console.log("The Car is Started....")
    }
    accelerateCar()
    {
        console.log("The Car is Driving State ....")
    }
    stopCar()
    {
        console.log("The Car is Stopped....")
    }
    openCarLock()
    {
        console.log("The Car Lock is Opened....")
    }
    closeCarLock()
    {
        console.log("The Car Lock is Closed....")
    }
}
let carob:Car=new Car("Aadi","Blue",2.5,6);
carob.printDetails()
carob.openCarLock()
carob.startCar()
carob.accelerateCar()
carob.stopCar()
carob.closeCarLock()