//Instructions
/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.") */

//Solution
function alphabetPosition(text) {
    let str = text.toLowerCase()
    let x = ''
    for (let i = 0; i < str.length; i++) {
         if (str.charCodeAt(i) - 96 > 0 && str.charCodeAt(i) - 96 <= 26) {
          x+= str.charCodeAt(i) - 96 + ' ';
        }
      }
      return x.trim();
    }
  