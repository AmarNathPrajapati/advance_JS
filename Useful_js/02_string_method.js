/**
 * Important methods
 * 
 * 1. Extracting String Parts
 * There are 3 methods for extracting a part of a string:
 * 
 * slice(start, end)//it return start to end-1 character
 * substring(start, end)//start<<end
 * substr(start, length)//if number is negative it count from end and return start+1 to end
 * 
 * If you omit the second parameter, the method will slice out the rest of the string:
 * substring() is similar to slice().
 * The difference is that start and end values less than 0 are treated as 0 in substring() 
 * substr() is similar to slice().
 * The difference is that the second parameter specifies the length of the extracted part.
 * 
 * 
 * 
 * 2. The replace function
 * the replace() method is case sensitive
 * it change only first occurance, for all use /regex/g
 * 
 * 3.concat : it concat the another string
 * 4.trim: The trim() method removes whitespace from both sides of a string:
 * 
 * JS string padding
 * padStart():The padStart() method pads a string with another string:
 * 
 * 5.Converting a String to an Array
 * use the split method.
 */
 let str = "Apple, Banana, Kiwi";
 let part = str.slice(7, 13);
 part = str.slice(-10,-5);
 part = str.substr(15,4);
 str = str.replace("Apple","Orange")
//  console.log(str);
 let text = "Please visit Microsoft!";
 let newText = text.replace(/MICROSOFT/i, "W3Schools");
 let text6 = "http://localhost/gec/contact_us.php";
 let newText3 = text6.replace("http://localhost/gec/","");
 let newText4 = newText3.replace(".php","");
 console.log(newText4);
//  console.log(newText);
 let text1 = "Please visit Microsoft! Microsoft! Microsoft!";
 let newText2 = text1.replace(/MICROSOFT/ig, "W3Schools");
//  console.log(newText2);
 let text4 = "Hello";
let text2 = "World";
let text3 = text4.concat(" ", text2);
// console.log(text3);
// console.log(text4+" "+text2);
let str1 = "      Hello World!      ";
let str2 = str1.trim();
// console.log(str1,str2);
let text5 = "5";
let padded = text5.padStart(4,"x");
padded = text5.padStart(4,"0");//4 means total characters is four.
padded = text5.padEnd(4,"0");
// console.log(padded);