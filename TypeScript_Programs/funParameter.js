function linearSearch(arr) {
    if (arr === void 0) { arr = [67, 34, 23, 12, 45]; }
    var searchElem = 23;
    var flag = false;
    console.log("----------DEFAULT PARAMETER FUNCTION----------");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == searchElem) {
            console.log(arr[i] + " Element is Found in Location " + (i + 1));
            flag = true;
            break;
        }
    }
    if (flag == false) {
        console.log(searchElem + " Element is not Found in Array List");
    }
}
linearSearch();
console.log();
console.log("----------OPTIONAL PARAMETER FUNCTION----------");
function productDetails(Pname, Pid, Brand, price, Licno, Netweight) {
    console.log("Product Details");
    console.log("Product Name - " + Pname + "\t" + "Product Id - " + Pid + "\t" + "Brand - " + Brand + "\t"
        + "Price - " + price + " Rs" + "\t" + "License No - " + Licno + "\t" + "Net Weight - " + Netweight + " g" + "\t");
}
productDetails("50/50 Biscuit", 112015, "Britannia", 25);
productDetails("50/50 Biscuit", 112015, "Britannia", 25, 10015043001129, 47);
console.log("----------REST PARAMETER FUNCTION----------");
function oddEven(n) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i] + " is a Even Number");
        }
        else {
            console.log(arr[i] + " is a Odd Number");
        }
    }
}
oddEven(5, 1, 2, 3, 4, 6);
