/*
Challenge
************
Have the function FirstReverse(str) take the str parameter being passed 
and return the string in reversed order. 
For example: if the input string is "Hello World and Coders" 
then your program should return the string sredoC dna dlroW olleH. 

Sample Test Cases
***********************
Input:"coderbyte"

Output:"etybredoc"


Input:"I Love Code"

Output:"edoC evoL I"
*/

/*solution based on recursion */
function reverse( str ) {
    if(str<=1) {
        return str
    } else {
        return reverse(str.substring(1))+ str[0];
    }
    // using ternary operator
    // return (str<=1)? str: reverse(str.substring(1))+ str[0];
};


reverse('I Love Code');


/* another solutions */

function reverse( str ) {
    return (str<=1)? str: reverse(str.substring(1))+ str[0];
};

function FirstReverse(str) {
    return str.split('').reverse().join('');
 }

function reverse( str ) {
    let reverseStr = '';
    let strArray = str.split(' ').reverse();
    for(let i = 0; i < strArray.length; i++ ) {
        let reverseWord = strArray[i].split('').reverse().join('') + ' ';
        reverseStr += reverseWord;
    }
    return reverseStr;
}
