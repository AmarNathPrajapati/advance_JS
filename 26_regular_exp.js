/*Regular expression*/
let regex = /Amar/;
regex=/amar/i;//i is arrow flag which means case insensitivity
regex=/Amar/g;//g->means global
console.log(regex.source);//content inside forward slas
let str = "Amar My name is Amar Nath Prajapati,Amar is Amar";
/*Function in regular expression*/
// 1.exec()-> return an array if match otherwise null
    let result = regex.exec(str);
    // console.log(result.input);
    // console.log(result.index);
//2.test()->if matches , if will return true otherwise false
    result=regex.test(str);
//3.match()->it also return array(worth for g arrow flag)
    result=str.match(regex);
//4.search()->return index of first match
    result=str.search(regex)
//5.replace()->return new replaced string 
    result=str.replace(regex,'Chandan')
    
    /*META CHARACTER IN REGULAR EXPRESSION*/

//1.(^)(carat symbol)_if starts with newReges
    let newRegex = /^Chandan/;
//2.($) means if ends with newRegex
    newRegex = /ing$/;
//3.(.) means exactly any one character
    newRegex = /go.d/;
//4.(*) means zero or more character
    newRegex = /Ch*an/;
//5.(a?) a is optional in newRegex
    newRegex= /chany?dan/i;
//6.(\*) * is to match 
    newRegex =/n\*ow/;
    str="Chandan is a very go$d boy , n*ow a days he spends his time on javaScript coding";
    result = newRegex.exec(str);
    result = newRegex.test(str);

    /*CHARACTER SET IN REGULAR EXPRESSION*/

//[a-z] --> a to z any single character can occurs.
//[0-9] --> 0 to 9 any single digit can occurs.
//[abz] -->either a,b or z can occurs
//[^abz] -->any single character can occurs expect a ,b or z.
//[a-zA-Z] -->any single chacter form a to z or A to Z.
//you can use multiple character set.
    newRegex =/ve[a-zA-Z][0-9][abz][^abz]y/;
    str="Chandan is a veR3bsy go$d boy , n*ow a days he spends his time on javaScript coding";
    result = newRegex.exec(str);
    result = newRegex.test(str);

    /* QUANTIFIERS and GROUPING IN REGULAR EXPRESSION*/

//n{2}--> two time repititions of r.
//n{0,2} --> 0 or 2 times occurance of n
//(sp){2}-->match if spsp will occurs.
//()-> use for grouping
    newRegex =/(sp){2}/;
    str="Chandan is a veR3bsy go$d boy , n*ow a days he spspeds his time on javaScript coding";
    result = newRegex.exec(str);
    result = newRegex.test(str);
    
    /*Shorthand Character Classes*/

// \w -> only word character(alpha numeric or underscore)
    newRegex =/\wan/;
// \w+ -> more than word character
    newRegex=/\w+an/;
// \W -> only one non word character(like $,%)
    newRegex=/\Wd/;
// \W+-> more than one nor word character
    newRegex=/\W+ld/;
// \d99 ->if single digit present before 99
    newRegex= /\d99/;
//d+99 ->if more than one digit present before 99
    newRegex= /\d+99/;
// \D ->only one non digit character
    newRegex= /\D99/;
// \D+ -> more than one non digit character
    newRegex = /\D+99/
// \s-> match the only one white space
    newRegex=/\sis/;
// \s+->match more the one white space
    newRegex=/\s+is/;
// \S ->match non white space
    newRegex=/\Sdan/;
// \S+ ->match more than one non white space
    newRegex=/\S+ld/;
// a\b ->match if white space occur after a
    newRegex=/a\b/;
    str="Chandan is aveR3bsygo%$#@$ld boy , n*ow a days99 he spspeds his time on javaScript coding";
    result = newRegex.exec(str);
    result = newRegex.test(str);

    /*ASSERTIONS*/
    //a(?=n) match if n occur after a
    newRegex=/a(?=n)/;
    //a(?!n) match if n not occur after a
    newRegex=/a(?!n)/;
    str="Chandan is aveR3bsygo%$#@$ld boy , n*ow a days99 he spspeds his time on javaScript coding";
    result = newRegex.exec(str);
    console.log(result);
    result = newRegex.test(str);
    console.log(result);