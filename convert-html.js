function convertHTML(str) {
    // &colon;&rpar;
    let output = "";
    for(let i = 0; i < str.length; i++){
      if(str.charAt(i) == '&') {
        output += "&​amp;"
      } else if(str.charAt(i) == '<') {
        output += "&​lt;"
      } else if(str.charAt(i) == '>') {
        output += "&​gt;"
      } else if(str.charAt(i) == '"') {
        output += "&​quot;"
      } else if(str.charAt(i) == "'") {
        output += "&​apos;"
      } else {
        output += str.charAt(i);
      }
    }
    return output;
}
  

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));