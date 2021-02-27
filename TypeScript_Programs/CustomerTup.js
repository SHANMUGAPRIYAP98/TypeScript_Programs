var Customer = /** @class */ (function () {
    function Customer(CustId, Cname, PhoneNo, Email) {
        this.CustId = CustId;
        this.Cname = Cname;
        this.PhoneNo = PhoneNo;
        this.Email = Email;
    }
    return Customer;
}());
var cust1 = new Customer(101, "Diyashri", 8939688770, "diya@gmail.com");
var cust2 = new Customer(102, "Hari", 8939866770, "hari@yahoo.com");
var cust3 = new Customer(103, "Sandhya", 9803124567, "sandhya@outlook.com");
var cust4 = new Customer(104, "Parthiban", 9841345678, "parthi@gmail.com");
var cust5 = new Customer(105, "UshaRani", 9043897203, "usha@gmail.com");
var cust = [cust1, cust2, cust3, cust4, cust5];
var tuprec = [cust];
for (var i = 0; i < tuprec.length; i++) {
    console.log(tuprec[i]);
}
var tuplerec = [101, "Diyashri", 8967123456, "diya@gmai.com"];
console.log("Customer Details : ");
for (var i = 0; i < tuplerec.length; i++) {
    if (i == 0) {
        console.log("Customer Id : " + tuplerec[0]);
    }
    else if (i == 1) {
        console.log("Customer Name : " + tuplerec[1]);
    }
    else if (i == 2) {
        console.log("Phone Number: " + tuplerec[2]);
    }
    else {
        console.log("Email-Id : " + tuplerec[3]);
    }
}
