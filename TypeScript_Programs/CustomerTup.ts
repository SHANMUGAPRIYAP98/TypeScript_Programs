class Customer
{
    CustId:number;
    Cname:string;
    PhoneNo:number;
    Email:string;
    constructor(CustId:number,Cname:string,PhoneNo:number,Email:string)
    {
        this.CustId=CustId;
        this.Cname=Cname;
        this.PhoneNo=PhoneNo;
        this.Email=Email;
        
    }
}
var cust1:Customer=new  Customer(101,"Diyashri",8939688770,"diya@gmail.com");
var cust2:Customer=new Customer(102,"Hari",8939866770,"hari@yahoo.com");
var cust3:Customer=new Customer(103,"Sandhya",9803124567,"sandhya@outlook.com");
var cust4:Customer=new Customer(104,"Parthiban",9841345678,"parthi@gmail.com");
var cust5:Customer=new Customer(105,"UshaRani",9043897203,"usha@gmail.com");
let tuprec:[Customer[]];
let tup:[Customer,string,number,boolean];
tuprec:[cust1,cust2,cust3,cust4,cust5];
//let tups:tup[];
for(var i=0;i<tuprec.length;i++)
{
    console.log(tuprec[i])
}
//array literal
var tuplerec:[number,string,number,string]=[101,"Diyashri",8967123456,"diya@gmai.com"];
console.log("Customer Details : ");
for(var i=0;i<tuplerec.length;i++)
{
    if(i==0)
    {
        console.log("Customer Id : "+tuplerec[0])
    }
    else if(i==1)
    {
        console.log("Customer Name : "+tuplerec[1])
    }
    else if(i==2)
    {
        console.log("Phone Number: "+tuplerec[2])
    }
    else{
        console.log("Email-Id : "+tuplerec[3])
    }
}






