// function display(result){
//     console.log("result is " + result);
// }

// function add(a, b, callback){
//     let sum = a + b
//     if(callback) callback(sum)
//     return sum
// }

// const total = add(10, 5, display)
// console.log(total);


const payment = true
const mark = 70

function enroll(callback){
    console.log("Enroll progress...");
    setTimeout( function(){

  
    if(payment){
        callback()
    }else{
        console.log("Payment fail");
    }  
  }, 2000)
}

function progress(callback){
    console.log("Progressing...");

    setTimeout( function(){
    if(mark>60){
        callback()
    }else{
        console.log("Fail");
    }
}, 3000)
}

function getCertificate(){
    console.log("congrats");
}

enroll(function(){
    progress(getCertificate)
})
console.log("final");