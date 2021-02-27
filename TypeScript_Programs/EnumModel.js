var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Sunday"] = 0] = "Sunday";
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
})(Weekdays || (Weekdays = {}));
var day1 = Weekdays.Sunday;
var day2 = Weekdays.Monday;
var day3 = Weekdays.Tuesday;
var day4 = Weekdays.Wednesday;
var day5 = Weekdays.Thursday;
var day6 = Weekdays.Friday;
var day7 = Weekdays.Saturday;
for (var i = 1; i <= 7; i++) {
    if (i == 1) {
        console.log("Welcome to " + day2 + " st day of Weekday - Marvelous Monday");
    }
    else if (i == 2) {
        console.log("Welcome to " + day3 + " nd day of Weekday - Twisting Tuesday");
    }
    else if (i == 3) {
        console.log("Welcome to " + day4 + " rd day of Weekday - Wonderful Wednesday");
    }
    else if (i == 4) {
        console.log("Welcome to " + day5 + " th day of Weekday - Thoughtful Thursday");
    }
    else if (i == 5) {
        console.log("Welcome to " + day6 + " th day of Weekday - Free Friday");
    }
    else if (i == 6) {
        console.log("Welcome to " + day7 + " th day of WeekdEnd - Surprising Saturday");
    }
    else {
        console.log("Welcome to Last day of Week - Successfull Sunday");
    }
}
