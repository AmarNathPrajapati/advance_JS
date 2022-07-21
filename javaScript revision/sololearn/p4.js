class Add {
    constructor(...words) {
        this.words = words;
        // console.log(...words.toString().replace('','$').concat("$").replaceAll(',','$').split()); 
    }
//     print(){
//       console.log(...this.words.toString().replace('','$').concat("$").replaceAll(',','$').split());
//   }
  print(){
    var y ="";
    for(x of this.words){
         y += `$${x}`;
    }
    console.log(y.concat('$'));
}
  }
  
  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
  var y = new Add("this", "is", "awesome");
  var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
  x.print()
