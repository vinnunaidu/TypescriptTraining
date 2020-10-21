class Animal{
    name:String;


    constructor(name:String){
        this.name = name;
    }
    
    makeSound(){
        console.log("Wooooo");
    }
}

class Pig extends Animal{
    constructor(){
        super("I'm a super Pig");
    }

    makeSound(){
        console.log("Oink Oink");
    }
}

var animal = new Animal("I'm a Super Animal");
animal.makeSound();

var pig = new Pig();
pig.makeSound();