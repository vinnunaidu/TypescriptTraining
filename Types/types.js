var string = "Vin";
console.log(string);
var number = 9;
console.log(number);
var isWinter = true;
console.log(isWinter);
var any = "ant";
any = 5;
console.log(any);
var Names;
(function (Names) {
    Names[Names["Vin"] = 0] = "Vin";
    Names[Names["Bin"] = 1] = "Bin";
    Names[Names["Tin"] = 2] = "Tin";
})(Names || (Names = {}));
;
for (var nm in Names) {
    console.log(nm);
}
var tin = Names.Tin;
console.log(Names[tin]);
var names = ["Bull", "Bear"];
console.log(names[0]);
