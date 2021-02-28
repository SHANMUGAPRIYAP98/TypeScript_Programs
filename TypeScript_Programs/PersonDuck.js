var Person1 = /** @class */ (function () {
    function Person1(Name, Education, Age, DOB, Bgroup) {
        this.Name = Name;
        this.Age = Age;
        this.Education = Education;
        this.DOB = DOB;
        this.Bgroup = Bgroup;
    }
    Person1.prototype.printDetails = function () {
        console.log("----------PERSONAL DETAILS----------");
        console.log("NAME : " + this.Name);
        console.log("DOB : " + this.DOB);
        console.log("AGE : " + this.Age);
        console.log("BLOOD GROUP : " + this.Bgroup);
        console.log("EDUCATION : " + this.Education);
    };
    return Person1;
}());
var Person2 = /** @class */ (function () {
    function Person2(Name, Education, Age, DOB, Bgroup) {
        this.Name = Name;
        this.Age = Age;
        this.Education = Education;
        this.DOB = DOB;
        this.Bgroup = Bgroup;
    }
    Person2.prototype.printDetails = function () {
        console.log("----------PERSONAL DETAILS----------");
        console.log("NAME : " + this.Name);
        console.log("DOB : " + this.DOB);
        console.log("AGE : " + this.Age);
        console.log("BLOOD GROUP : " + this.Bgroup);
        console.log("EDUCATION : " + this.Education);
    };
    return Person2;
}());
var Person3 = /** @class */ (function () {
    function Person3(Name, Education, Age, DOB, Bgroup, Design, sal) {
        this.Name = Name;
        this.Age = Age;
        this.Education = Education;
        this.DOB = DOB;
        this.Bgroup = Bgroup;
        this.Design = Design;
        this.sal = sal;
    }
    Person3.prototype.printDetails = function () {
        console.log("----------PERSONAL DETAILS----------");
        console.log("NAME : " + this.Name);
        console.log("DOB : " + this.DOB);
        console.log("AGE : " + this.Age);
        console.log("BLOOD GROUP : " + this.Bgroup);
        console.log("EDUCATION : " + this.Education);
    };
    Person3.prototype.withDesignationDetails = function () {
        console.log("DESIGNATION : " + this.Design);
        console.log("SALARY : " + this.sal);
    };
    return Person3;
}());
var person1 = new Person2("Diyashri", "28/06/1998", 22, "o+ve", "BCA");
person1.printDetails();
var person2 = new Person1("HariKrishnan", "03/05/1998", 22, "b-ve", "MCA");
person2.printDetails();
var person3 = new Person3("Nagaraj", "02/01/1987", 33, "b+ve", "MBA", "HR", 50000);
person3.printDetails();
