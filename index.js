// console.log(a);
// console.log(sum(9));
// var a=10;

// console.log(a);

// function sum(x){
//     var y=x*x;
//     return y;
// }

// var double=sum(5);
// console.log(double);

// in js every thing is treated as object.


var a=10;

function sum(x){
    var y=x*x;
    function triple(z){
        var p=z*z*z;
        return p;
    }
    var thrice =triple(4)
    console.log(thrice);
    return y;
}

var double= sum(4);
console.log(double);
