enum Weekdays
{
    Sunday=7,Monday=1,Tuesday=2,Wednesday=3,Thursday=4,Friday=5,Saturday=6
}
let day1 =Weekdays.Sunday;
let day2 =Weekdays.Monday;
let day3 =Weekdays.Tuesday;
let day4 =Weekdays.Wednesday;
let day5 =Weekdays.Thursday;
let day6 =Weekdays.Friday;
let day7 =Weekdays.Saturday;
for(var i=1;i<=7;i++)
{
    if(i==1)
    {
        console.log(`Welcome to ${day2} st day of Week - Marvelous Monday`);
    }
    else if(i==2)
    {
        console.log(`Welcome to ${day3} nd day of Week - Twisting Tuesday`);
    }
    else if(i==3)
    {
        console.log(`Welcome to ${day4} rd day of Week- Wonderful Wednesday`);
    }
    else if(i==4)
    {
        console.log(`Welcome to ${day5} th day of Week - Thoughtful Thursday`);
    }
    else if(i==5)
    {
        console.log(`Welcome to ${day6} th day of Week - Free Friday`);
    }
    else if(i==6)
    {
        console.log(`Welcome to ${day7} th day of Week - Surprising Saturday`);
    }
    else 
    {
        console.log(`Welcome to ${day1} day of Week - Successful Sunday`);
    }
    
}

