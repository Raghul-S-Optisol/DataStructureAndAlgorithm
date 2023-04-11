class Superclass{
    display(){
        console.log("super class");
    }
}

class Subclass extends Superclass{
    display(){// it overrides the super class method
        //super.display();
        console.log("subclass");
    }
}
 sub =new Subclass();
 sub.display();