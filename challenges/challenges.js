/*
Challenge
************
Have the function LetterCapitalize(str) 
take the str parameter being passed and 
capitalize the first letter of each word. 
Words will be separated by only one space. 


Sample Test Cases
***********************
Input:"hello world"

Output:"Hello World"


Input:"i ran there"

Output:"I Ran There"
*/

/*solution based on recursion */
function LetterCapitalize (str) {
	 // convert all letters to lowercase to cover case capital letters in middle of word
	 // then split str into an array
	let strArray = str.toLowerCase().split(' ');
	for (let i = 0; i < strArray.length; i++) {
 		// change first letter of every item in array then add the remaining letters
		strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);	
	}
 	// convert array to a string and return it
	return (strArray.join(' '));
}


/*
// a solution using regular expressions
// from https://www.coderbyte.com/solution/Letter%20Capitalize#JavaScript
function LetterCapitalize(str) { 
  
	// our regex [a-z] matches every alphabetic character in the string
	// but the \b before it specifies a word boundary, in other words, nothing can 
	// come before those letters therefore selecting every word in the string
	// using a function to return the replacement text
	return str.replace(/\b[a-z]/gi, function(char) { 
	  return char.toUpperCase();
	});
		   
  }

  */
console.log(LetterCapitalize("heLLo world"));

