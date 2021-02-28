var Car = /** @class */ (function () {
    function Car(Cname, Color, EngineCap, CylinderNo) {
        this.Cname = Cname;
        this.Color = Color;
        this.EngineCap = EngineCap;
        this.CylinderNo = CylinderNo;
    }
    Car.prototype.printDetails = function () {
        console.log("The " + this.Cname + " Car is " + this.Color + " in Color with Engine Capacity holding " + this.EngineCap + " Litres with " + this.CylinderNo + " cylinders ");
    };
    Car.prototype.startCar = function () {
        console.log("The Car is Started....");
    };
    Car.prototype.accelerateCar = function () {
        console.log("The Car is Driving State ....");
    };
    Car.prototype.stopCar = function () {
        console.log("The Car is Stopped....");
    };
    Car.prototype.openCarLock = function () {
        console.log("The Car Lock is Opened....");
    };
    Car.prototype.closeCarLock = function () {
        console.log("The Car Lock is Closed....");
    };
    return Car;
}());
var carob = new Car("Aadi", "Blue", 2.5, 6);
carob.printDetails();
carob.openCarLock();
carob.startCar();
carob.accelerateCar();
carob.stopCar();
carob.closeCarLock();
