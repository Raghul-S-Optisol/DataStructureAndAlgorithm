//By object literal
emp={id:102,name:"Shyam Kumar"};
mng={id:001,name:"Ram"};
console.log("emp id is",emp.id,"and emp name is",emp.name);
console.log("manager id is",mng.id,"and emp name is",mng.name);

//By Object instance 
emp=new Object();
emp.id=200;
emp.name="guru";
console.log("emp id is",emp.id,"and emp name is",emp.name);


//By  object constructor 
e=new employee(302,"Kumaran");
function employee(id,name){
    this.id=id;
    this.name=name;
    }
console.log("emp id is",e.id,"and emp name is",e.name);


//Defining method in JavaScript Object
e=new employer(302,"Kumaran");
e.changename("samar");
function employer(id,name){
    this.id=id;
    this.name=name;

    this.changename=changename;
    function changename(name){
        this.name=name;
    }
    }
    console.log("emp id is",e.id,"and emp name is",e.name);
    