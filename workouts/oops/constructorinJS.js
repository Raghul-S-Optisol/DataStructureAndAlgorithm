class Company{
    constructor(){
        this.company="abc pvt ltd";
        this.id=102;
    }
}
com=new Company();
console.log(com.id,com.company);

// super constructor
class Demo{
constructor(){
    console.log("welcome to ");
}
}
class Demo1 extends Demo{
    constructor(name){
        super();
        this.name=name;
        
    }

}
d=new Demo1("abc pvt ltd");
console.log(d.name);