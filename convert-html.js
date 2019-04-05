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
  




function convertHTML1(str) {
// Use Object Lookup to declare as many HTML entities as needed.
    htmlEntities={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        '\'':"&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str.split('').map(entity => htmlEntities[entity] || entity).join('');
}

// test here
convertHTML1("Dolce & Gabbana");
console.log(convertHTML1("Dolce & Gabbana"));
console.log(convertHTML1("Hamburgers < Pizza < Tacos"));
console.log(convertHTML1("Sixty > twelve"));
console.log(convertHTML1('Stuff in "quotation marks"'));
console.log(convertHTML1("Schindler's List"));
console.log(convertHTML1("<>"));
