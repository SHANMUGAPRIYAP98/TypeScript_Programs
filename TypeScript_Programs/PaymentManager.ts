export interface PaymentManager
{
    doPayment(paymentapp:string,paymentcreds:number):string;
    getPaymentStatus(refNumber : string):string;
}
export function multiply(a:number,b:number):number
{
    return a*b;
}
export const a=10;