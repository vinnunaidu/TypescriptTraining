interface User {
    name:String,
    age?:Number
}

function printUser(user:User){

    console.log(user.name + " " + user.age);
}

printUser({name:"Vin", age:40});