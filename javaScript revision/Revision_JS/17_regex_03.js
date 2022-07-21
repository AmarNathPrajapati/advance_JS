/**
 * character set in Regular Expression
 * can use multiple character set in regular expression.
 */
let reg = /coder/;
reg = /c[a-zA-Z]der/;//a to z or A to Z but only one character.
reg = /c[das]der/;//either d or a or s;
reg = /c[^das]der/;//neither d nor a nor s;
reg = /c[^das][0-9]der/;//neither d nor a nor s;
/**
 * Quantifiers in regex function
 */
reg = /c{2}/;//not required whole word
reg = /c{0,2}[a-z]/; // apperance of c 0 to 2;
/**
 * Grouping in Regular expression 
 */
reg = /(cod){2}/;
reg = /[a-z0-9A-Z]{0,100}@[a-z]{0,100}.[a-z]{0,3}/
/**
 * Shorthand character in Regular expression
 * \w for word character _ or alpha numeric
 * \W for non word character 
 * \d for digit 
 * \D for non digit
 * \s space character
 * \S non space character
 * \b word boundary- ke baad kuch no ho then it will match.
 */
reg = /\woder/;
reg = /\w+oder/;
reg = /\w+oder\b/;
let str = "c3der I ahx am a good ama335sdgr@gmail.com codcoderand coderis also a good coder";
console.log("The result of regex funtion is ",reg.exec(str));
if(reg.test(str)){
    console.log("Expression matched");
}else{
    console.log("Expression not matched");
}