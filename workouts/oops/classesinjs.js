//Declaring class  
class Employee  
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
//Declaring method  
    detail()  
    {  
  console.log(this.id+" "+this.name); 
    }  
  }  
//passing object to a variable   
var e1=new Employee(101,"vijay");  
var e2=new Employee(102,"ajay");  
e1.detail(); //calling method  
e2.detail();  


//undefined Class Expression 

var emp=class{  
    constructor(id,name){  
      this.id=id;  
      this.name=name;  
    }  
//Declaring method      
detail(){  
    console.log(this.id+" "+this.name);  
    }  
  }  

var e1=new emp(101,"Raj");  
var e2=new emp(102,"Ram");  
e1.detail(); 
e2.detail();  