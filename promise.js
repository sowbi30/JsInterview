//Asynchroonous Jaavscript
//promise
//3state: pending, fulfilled, rejected



const myPromise = new Promise((resolve, reject) =>{
    const error =false;
    if(!error){
        resolve("yes! resolved the promise");

    }else{
        reject("no! rejected");

    }
})


const myNextPromise = new Promise((resolve,
     reject) => {
setTimeout(function(){
    resolve("myNextPromise resolved")
},2000)

})

myNextPromise
.then(value => {
    console.log(value)
})

myPromise
.then(value => {
    console.log(value)
})
