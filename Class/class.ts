class UserDetails{
    name:string;
    age:number;
    gender:string;
    static hairColor:string = "black";

    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    helloUser(){
        console.log("Hello, " + this.name + " your age is  " + this.age + " and your hair color is " + UserDetails.hairColor);
    }
}

var user = new UserDetails("Vin", 20, "Male");
user.helloUser();