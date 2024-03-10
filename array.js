// var arr= [1,2,3,4,5,6,7,8];
// var arr2 = arr.slice(1,5);
// var arr3 = arr.slice(1);
// console.log(arr2);
// console.log(arr3);

// arr.splice(1,0,"a","b", "c");
// console.log(arr);
    

// let originalArray = [1, 2, 3, 4, 5];
// for (let i = 0; i < originalArray.length; i++) {
//     originalArray[i] *= 2;
// }
// console.log(originalArray);


var arr =[2,3,4,5,6]
var arr2= arr.map((item, index)=>{
    console.log(item, index);
    return item*2;
})
console.log(arr);


