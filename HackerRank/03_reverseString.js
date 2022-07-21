let s = 1234;
try{
    s= s.split('');
    s = s.reverse();
    s=s.join('');
    console.log(s);
}catch{
    console.log("s.split is not a function");
    console.log(s);
}