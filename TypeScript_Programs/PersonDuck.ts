class Person1
{
    Name:string;
    Education:string;
    Age:number;
    DOB:string;
    Bgroup:string;
    constructor(Name:string,Education:string,Age:number,DOB:string,Bgroup:string)
    {
        this.Name=Name;
        this.Age=Age;
        this.Education=Education;
        this.DOB=DOB;
        this.Bgroup=Bgroup;
    }
    printDetails()
    {
        console.log("----------PERSONAL DETAILS----------");
        console.log("NAME : "+this.Name);
        console.log("DOB : "+this.DOB);
        console.log("AGE : "+this.Age);
        console.log("BLOOD GROUP : "+this.Bgroup);
        console.log("EDUCATION : "+this.Education);
    }
}
class Person2
{
    Name:string;
    Education:string;
    Age:number;
    DOB:string;
    Bgroup:string;
    constructor(Name:string,Education:string,Age:number,DOB:string,Bgroup:string)
    {
        this.Name=Name;
        this.Age=Age;
        this.Education=Education;
        this.DOB=DOB;
        this.Bgroup=Bgroup;
    }
    printDetails()
    {
        console.log("----------PERSONAL DETAILS----------");
        console.log("NAME : "+this.Name);
        console.log("DOB : "+this.DOB);
        console.log("AGE : "+this.Age);
        console.log("BLOOD GROUP : "+this.Bgroup);
        console.log("EDUCATION : "+this.Education);
    }
}
class Person3
{
    Name:string;
    Education:string;
    Age:number;
    DOB:string;
    Bgroup:string;
    Design:string;
    sal:number;
    constructor(Name:string,Education:string,Age:number,DOB:string,Bgroup:string,Design:string,sal:number)
    {
        this.Name=Name;
        this.Age=Age;
        this.Education=Education;
        this.DOB=DOB;
        this.Bgroup=Bgroup;
        this.Design=Design;
        this.sal=sal;
    }
    printDetails()
    {
        console.log("----------PERSONAL DETAILS----------");
        console.log("NAME : "+this.Name);
        console.log("DOB : "+this.DOB);
        console.log("AGE : "+this.Age);
        console.log("BLOOD GROUP : "+this.Bgroup);
        console.log("EDUCATION : "+this.Education);
        
    }
    withDesignationDetails()
    {
        console.log("DESIGNATION : "+this.Design);
        console.log("SALARY : "+this.sal);
    }
}
let person1:Person1=new Person2("Diyashri","28/06/1998",22,"o+ve","BCA");
person1.printDetails();
let person2:Person2=new Person1("HariKrishnan","03/05/1998",22,"b-ve","MCA");
person2.printDetails();
let person3:Person1=new Person3("Nagaraj","02/01/1987",33,"b+ve","MBA","HR",50000);
person3.printDetails();
