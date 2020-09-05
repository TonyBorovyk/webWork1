// перша функція
function printArray(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
        arr.push(i);
    }
    var arr1 = arr.toString();
    console.log("arr(" + number + ") =>[" + arr1 + "]")
}
printArray(5);

// друга функція
function checkOnmultip(num1, num2, num3) {
    var Bool = false;
    var Arr = [num1, num2, num3];
    var a = Arr.toString();
    if ((num1 % num2 == 0) && (num1 % num3 == 0)) {
        Bool = true;
    }
    console.log("(" + a + ")" + " -> " + Bool);

}
checkOnmultip(12, 5, 9);

// третя функція
function capitalize(str){
    if((str.length >=1) &&(str.length <=10)){
        var newStr = str[0].toUpperCase() + str.slice(1).toLowerCase();
        console.log("Capitalize("+str+") -> '"+ newStr + "'");
    }
}
capitalize('hello');
