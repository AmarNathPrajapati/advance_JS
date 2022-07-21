/**
 * new Date()
 * new Date(year, month, day, hours, minutes, seconds, milliseconds)
 * new Date(milliseconds)
 * new Date(date string)
 * January = 0.
 * December = 11
 * new Date(2019, 3, 24, 10, 33, 30) ==  new Date(2018, 15, 24, 10, 33, 30);
 * Using 6, 4, 3, or 2 Numbers
 * 6 numbers specify year, month, day, hour, minute, second
 * 5 numbers specify year, month, day, hour, and minute:
 * 4 numbers specify year, month, day, and hour:
 * 3 numbers specify year, month, and day:
 * 2 numbers specify year and month:
 * You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
 * One and two digit years will be interpreted as 19xx:
 * 
 * new Date(dateString)
 * const d = new Date("October 13, 2014 11:13:00");
 * 
 * JavaScript Stores Dates as Milliseconds
 * JavaScript stores dates as number of milliseconds since
 * January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
 * 
 * Dates Methods
 * 1. JavaScript Date Input
 * There are generally 3 types of JavaScript date input formats:
 * Type	Example
 * ISO Date	"2015-03-25" (The International Standard)
 * Short Date	"03/25/2015"
 * Long Date	"Mar 25 2015" or "25 Mar 2015"
 * 
 */

let d  = new Date(1000);// add 1000 milisecond to initial date i.e. 1970..
d = new Date(1999, 11, 19, 5, 15, 50, 75);
d = new Date(1655405765396)//negative mean before 1970
// console.log(d.toString());
// console.log(d.toUTCString());
// console.log(d.toISOString());
// console.log(d.toDateString());

let d1 = new Date("2022-06-17");
d1 = new Date("2015");
d1 = new Date("2015-03");
// const d = new Date("Mar 25 2015");
// const d = new Date("JANUARY, 25, 2015");
// console.log(d1);

/**
 * Date Input - Parsing Dates
 * If you have a valid date string, you can use the Date.pars() method to convert it to milliseconds.
 * 
 */
let today = new Date("June 17 2022");
let msec = Date.parse("June 17 2022")
console.log(msec);

/**
 * get method : Known very well
 * set method: you creating a date
 */
 const d2 = new Date();
 d2.setFullYear(2020, 11, 3);
 console.log(d2);