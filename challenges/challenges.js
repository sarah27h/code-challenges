/*
Challenge
************
Have the function SimpleSymbols(str) take the str parameter being passed and determine 
if it is an acceptable sequence by either returning the string true or false. 
The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) 
and for the string to be true each letter must be surrounded by a + symbol.
So the string to the left would be false. 
The string will not be empty and will have at least one letter. 


Sample Test Cases
***********************
Input:"+d+=3=+s+"

Output:"true"


Input:"f++d+"

Output:"false"
*/

function SimpleSymbols(str) { 
	let pattern = /[+=]/;
	// return false if str start or end with a character or an empty str
	if(!(pattern.test(str[0])) || !(pattern.test(str[str.length-1])) || str[0] === null) {
		return false;
	} else {
		for(let i=1; i<= str.length; i++) {
			// return true if character is between +character+
			if(!(pattern.test(str[i])) ) {
				// match return an array so we need to access first element to check matches
				return str[i-1].match(pattern)[0] === str[i+1].match(pattern)[0] ? true : false;
			}	
		}
	}
}
SimpleSymbols('+d+=3=+s+');


/*
// from https://www.coderbyte.com/solution/Simple%20Symbols#JavaScript
function SimpleSymbols(str) { 

  // pad the strings so that if a character exists at the beginning
  // of the string for example, we don't get on out-of-bounds error by
  // trying to get the character before it
  var str = '=' + str + '=';

  // loop through entire string
  for (var i = 0; i < str.length; i++) {
    
    // check to see if current character is an alphabetic character  
    // by using a simple case-insensitive regex pattern 
    if (str[i].match(/[a-z]/i) !== null) {

      // check to see if a + symbol is to the left and right
      // if not, then we know this string is not valid
      if (str[i-1] !== '+' || str[i+1] !== '+') { 
        return false;
      }

    }
 
  }

  return true;
  
}

*/
