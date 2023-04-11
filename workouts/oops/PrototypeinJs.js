function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
//Employee.prototype.company=" abc pvt ltd";
Employee.prototype.company=function(){
  return "abc pvt ltd";
}
var employee1=new Employee("Merlin","Raj");  
var employee2=new Employee("sasi", "kumar");  
console.log(employee1.firstName+" "+employee1.lastName+" "+employee1.company());
console.log(employee2.firstName+" "+employee2.lastName+" "+employee2.company());