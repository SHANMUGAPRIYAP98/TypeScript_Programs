import {PaymentManager,multiply,a} from './PaymentManager';
class UPIPaymentImpl implements PaymentManager{
    public doPayment(paymentapp:string,paymentcreds:number):string
    {
        return `${paymentcreds} RS in ${paymentapp} is being processed`;
    }
    public getPaymentStatus(refNumber: string): string {
       return `Payment Made Successful for ${refNumber} reference number `;
    }
}
class CreditCardPaymentImpl implements PaymentManager{
    doPayment(paymentapp:string,paymentcreds: number): string {
        return `${paymentcreds} RS in ${paymentapp} is being processed`;
    }
    getPaymentStatus(refNumber: string): string {
        return `Payment Made Successful for ${refNumber} reference number `;
    }
}
let upiob:PaymentManager =new UPIPaymentImpl();
console.log("----------UPIPAYMENT IMPLEMENTATION----------")
console.log(upiob.doPayment("GPay",50000));
console.log(upiob.getPaymentStatus("9123456789012"));
let credob:PaymentManager=new CreditCardPaymentImpl();
console.log("----------CREDITCARDPAYMENT IMPLEMENTATION----------");
console.log(credob.doPayment("IMOBILE",250000));
console.log(credob.getPaymentStatus("923456789123"));