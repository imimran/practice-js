const payment = true;
const mark = 70;

function enroll() {
  console.log("Enroll progress...");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (payment) {
        resolve();
      } else {
        reject("Payment fail");
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log("completing...");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (mark > 60) {
        resolve();
      } else {
        reject("Fail");
      }
    }, 3000);
  });
  return promise;
}

function getCertificate() {
  console.log("Prepare Certificate...");
  const promise = new Promise(function (resolve) {
    resolve("congrats");
  });
  return promise
}

enroll()
   .then(progress)
   .then(getCertificate)
   .then(function(value){
       console.log(value);
   })
   .catch(function(err){
       console.log(err);
   })