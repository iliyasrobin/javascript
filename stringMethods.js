// String Methods

//str.toUpperCase() - converts the string to uppercase
//str.toLowerCase() - converts the string to lowercase
//str.trim() - removes whitespace from both ends of a string
//str.indexOf() - returns the index of (the position of) the first occurrence of a specified text in a string
//str.lastIndexOf() - returns the index of the last occurrence of a specified text in a string
//str.charAt() - returns the character at a specified index (position) in a string
//str.charCodeAt() - returns the Unicode of the character at a specified index in a string
//str.split() - splits a string into an array of substrings
//str.slice(start, end) - extracts a part of a string and returns a new string
//str.substring() - extracts the characters from a string, between two specified indices
//str.substr() - extracts the number of characters from a string, starting at a specified index
//str.replace() - replaces a specified value with another value in a string
//str.concat(str2) - joins two or more strings
//str.search() - searches a string for a specified value and returns the position of the match
//str.match() - searches a string for a match against a regular expression, and returns the matches
//str.includes() - checks if a string contains the specified string/characters
//str.startsWith() - checks if a string starts with the specified string/characters
//str.endsWith() - checks if a string ends with the specified string/characters
//str.repeat() - returns a new string with a specified number of copies of an existing string

// Example 1

let str = "Hello World!";
let result = str.toUpperCase();
console.log(result); // HELLO WORLD!

// Example 2

let str2 = "Hello World!";
let result2 = str.toLowerCase();
console.log(result2); // hello world!

// Example 3

let str3 = "   Hello World!   ";
let result3 = str.trim(); // removes whitespace from both ends of a string
console.log(result3); // Hello World!

// Example 4

let str4 = "Hello World!";
let result4 = str.slice(3, 10); //last index not included
console.log(result4); // lo Worl

// Example 5
let str5 = "Hello World! ";
let str6 = "JS";
let result5 = str5.concat(str6);
console.log(result5); // Hello World! JS
console.log(str5 + str6); // Hello World! JS

let str7 = "Hello World! " + 123;
console.log(str7); // Hello World! 123

// Example 6

let str8 = "Hello World!";
let result6 = str8.replace("World", "JavaScript");
console.log(result6); // Hello JavaScript!
let result7 = str8.replaceAll("World", "JavaScript");
console.log(result7); // Hello JavaScript!

// Example 7

let str9 = "Hello World!";
let result8 = str9.charAt(6);
console.log(result8); // W

// Example 8

let str10 = "Hello World!";
let a = (str10[4] = "a");
let b = str10.replace("o", "a");
console.log(a); // Hello World!
console.log(b); // Hella World!
