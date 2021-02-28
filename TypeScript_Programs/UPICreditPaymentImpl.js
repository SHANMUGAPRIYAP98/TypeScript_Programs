"use strict";
exports.__esModule = true;
var UPIPaymentImpl = /** @class */ (function () {
    function UPIPaymentImpl() {
    }
    UPIPaymentImpl.prototype.doPayment = function (paymentapp, paymentcreds) {
        return paymentcreds + " RS in " + paymentapp + " is being processed";
    };
    UPIPaymentImpl.prototype.getPaymentStatus = function (refNumber) {
        return "Payment Made Successful for " + refNumber + " reference number ";
    };
    return UPIPaymentImpl;
}());
var CreditCardPaymentImpl = /** @class */ (function () {
    function CreditCardPaymentImpl() {
    }
    CreditCardPaymentImpl.prototype.doPayment = function (paymentapp, paymentcreds) {
        return paymentcreds + " RS in " + paymentapp + " is being processed";
    };
    CreditCardPaymentImpl.prototype.getPaymentStatus = function (refNumber) {
        return "Payment Made Successful for " + refNumber + " reference number ";
    };
    return CreditCardPaymentImpl;
}());
var upiob = new UPIPaymentImpl();
console.log("----------UPIPAYMENT IMPLEMENTATION----------");
console.log(upiob.doPayment("GPay", 50000));
console.log(upiob.getPaymentStatus("9123456789012"));
var credob = new CreditCardPaymentImpl();
console.log("----------CREDITCARDPAYMENT IMPLEMENTATION----------");
console.log(credob.doPayment("IMOBILE", 250000));
console.log(credob.getPaymentStatus("923456789123"));
