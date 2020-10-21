var string:String = "Vin";
console.log(string);

var number:Number = 9;
console.log(number);

var isWinter:Boolean = true;
console.log(isWinter);

var any:any = "ant";
any = 5;
console.log(any);

enum Names {Vin, Bin, Tin};

for (var nm in Names) {
    console.log(nm);
}
var tin:Names = Names.Tin;
console.log(Names[tin]);

var names:String[] = ["Bull", "Bear"];
console.log(names[0]);
