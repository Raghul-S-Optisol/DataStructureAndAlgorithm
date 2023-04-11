// extends predefined class(Date)
class Moment extends Date {  
    }
  var m=new Moment();  
  console.log(m.getFullYear());


// user-defined class
  class Superclass{
constructor(){
    this.company="ABC pvt ltd"
}
  }
  class Sub extends Superclass{
    constructor(name){
    super();
    this.name=name
    }
  }
var s=new Sub("Ravi")
console.log(s.name+" working in - "+s.company)
