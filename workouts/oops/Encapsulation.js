class Student  
  {  
    constructor() 
    {  
       var name;  
    }  
     getName()  
     {  
          return this.name;  
     }  
      setName(name)  
      {  
        this.name=name;  
      }  
  
    }  
    var stud=new Student();   
     stud.setName("kumar");   
     console.log(stud.getName());  


