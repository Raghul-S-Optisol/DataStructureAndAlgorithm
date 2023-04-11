// no parameterised function
function msg(){  
    console.log("Do you want to continue?");  
 }
 msg();

 //single parameterized function
function value(number){  
    console.log("number in method call is",number); 
 }  
 value(4);

 // function with return type
 function Returns(numb){  
    return numb;
 }
 console.log("number in method call is",Returns(8)); 

 //using Function Object
 var sum=new Function("num1","num2","return num1+num2");
 console.log("sum of values is "+sum(2,5));
