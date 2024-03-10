var promise = new Promise((resolve, reject) =>{
    //resolve("sakshi jaiswal");

    reject("sakshi jaiswal");

});
promise.then((result)=>{
    console.log(result);
}).catch((error =>{
    console.log(error)}))
//console.log(promise);