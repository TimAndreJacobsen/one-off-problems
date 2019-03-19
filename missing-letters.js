/**
 * Challenge - find missing alphabetical letters in string
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
    let reference = "abcdefghijklmnopqrstuvwxyz";
    let i = reference.indexOf(str[0])
  
    for (let j = 0; j < str.length; j++){
      if (str[j] !== reference[i]){
        return reference[i];
      }
      i++;
    }
    return undefined;
  }
  
  fearNotLetter("abce"); // should return "d".
  fearNotLetter("abcdefghjklmno") // should return "i".
  fearNotLetter("stvwx") // should return "u".
  fearNotLetter("bcdf") // should return "e".
  fearNotLetter("abcdefghijklmnopqrstuvwxyz") // should return undefined.