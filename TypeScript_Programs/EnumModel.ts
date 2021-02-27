enum Weekdays
{
    Sunday=1,Monday=2,Tuesday=3,Wednesday=4,Thursday=5,Friday=6,Saturday
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
        console.log(`Welcome to ${day2} st day of Weekday - Marvelous Monday`);
    }
    else if(i==2)
    {
        console.log(`Welcome to ${day3} nd day of Weekday - Twisting Tuesday`);
    }
    else if(i==3)
    {
        console.log(`Welcome to ${day4} rd day of Weekday - Wonderful Wednesday`);
    }
    else if(i==4)
    {
        console.log(`Welcome to ${day5} th day of Weekday - Thoughtful Thursday`);
    }
    else if(i==5)
    {
        console.log(`Welcome to ${day6} th day of Weekday - Free Friday`);
    }
    else if(i==6)
    {
        console.log(`Welcome to ${day7} th day of WeekdEnd - Surprising Saturday`);
    }
    else 
    {
        console.log(`Welcome to Last day of Week - Successfull Sunday`);
    }
    
}

