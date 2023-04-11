// static method
class Test  
{  
  static display()  
  {  
    return "static method 1";  
  }  
  static display2()  
  {  
    return "static method 2" ; 
  }  
}  
console.log(Test.display());
console.log(Test.display2());

//invoke static method from constructor
class Demo{
    constructor(){
        console.log(Demo.display());
    }
    static display(){
        return "static method called from constructor";
    }
}
de=new Demo();


// static and non static methods
class Mainclass {  
    static display3() {  
        return "non static method calls static method";
    }  
      
   show() {  
    console.log(Mainclass.display3()) ; 
    }    
  }  
  var t=new Mainclass() ;
  t.show();  