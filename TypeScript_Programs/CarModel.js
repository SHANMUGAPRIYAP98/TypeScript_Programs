var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CarBaseModel = /** @class */ (function () {
    function CarBaseModel(Cname, Color, EngineCap, CylinNo) {
        this.Cname = Cname;
        this.Color = Color;
        this.EngineCap = EngineCap;
        this.CylinNo = CylinNo;
    }
    return CarBaseModel;
}());
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(Cname, Color, EngineCap, CylinNo, Price, Total) {
        var _this = _super.call(this, Cname, Color, EngineCap, CylinNo) || this;
        _this.Price = Price;
        _this.Total = Total;
        return _this;
    }
    SUV.prototype.StartCar = function () {
        console.log(this.Cname + " Car has Started");
    };
    SUV.prototype.StopCar = function () {
        console.log(this.Cname + " Car has Stopped");
    };
    SUV.prototype.printSUVDetails = function () {
        console.log("Car Name : " + this.Cname);
        console.log("Color : " + this.Color);
        console.log("Engine Capacity : " + this.EngineCap + " CC");
        console.log("No.of.Cylinders : " + this.CylinNo);
        console.log("Price : " + this.Price);
        console.log("Total No.of.SUV in India : " + this.Total);
    };
    return SUV;
}(CarBaseModel));
var HatchBack = /** @class */ (function (_super) {
    __extends(HatchBack, _super);
    function HatchBack(Cname, Color, EngineCap, CylinNo, Price, Total) {
        var _this = _super.call(this, Cname, Color, EngineCap, CylinNo) || this;
        _this.Price = Price;
        _this.Total = Total;
        return _this;
    }
    HatchBack.prototype.StartCar = function () {
        console.log(this.Cname + " Car has Started");
    };
    HatchBack.prototype.StopCar = function () {
        console.log(this.Cname + " Car has Stopped");
    };
    HatchBack.prototype.printHatchBackDetails = function () {
        console.log("Car Name : " + this.Cname);
        console.log("Color : " + this.Color);
        console.log("Engine Capacity : " + this.EngineCap + " CC");
        console.log("No.of.Cylinders : " + this.CylinNo);
        console.log("Price : " + this.Price);
        console.log("Total No.of.HatchBack Cars in India : " + this.Total);
    };
    return HatchBack;
}(CarBaseModel));
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(Cname, Color, EngineCap, CylinNo, Price, Total) {
        var _this = _super.call(this, Cname, Color, EngineCap, CylinNo) || this;
        _this.Price = Price;
        _this.Total = Total;
        return _this;
    }
    Sedan.prototype.StartCar = function () {
        console.log(this.Cname + " Car has Started");
    };
    Sedan.prototype.StopCar = function () {
        console.log(this.Cname + " Car has Stopped");
    };
    Sedan.prototype.printSedanDetails = function () {
        console.log("Car Name : " + this.Cname);
        console.log("Color : " + this.Color);
        console.log("Engine Capacity : " + this.EngineCap + " CC");
        console.log("No.of.Cylinders : " + this.CylinNo);
        console.log("Price : " + this.Price + " Lakhs");
        console.log("Total No.of.Sedan Cars in India : " + this.Total);
    };
    return Sedan;
}(CarBaseModel));
var suvob = new SUV("Renault Kiger", "Blue", 999, 3, 5.45, 79);
console.log("----------SUV CAR DETAILS----------");
suvob.StartCar();
suvob.printSUVDetails();
suvob.StartCar();
console.log("----------HATCHBACK CAR DETAILS----------");
var hatchob = new HatchBack("Maruti Suzuki Swift", "Red", 1197, 4, 5.73, 25);
hatchob.StartCar();
hatchob.printHatchBackDetails();
hatchob.StopCar();
console.log("----------SEDAN CAR DETAILS----------");
var sedanob = new Sedan("Hyundai Verna", "Green", 1493, 4, 9.11, 38);
sedanob.StartCar();
sedanob.printSedanDetails();
sedanob.StopCar();
