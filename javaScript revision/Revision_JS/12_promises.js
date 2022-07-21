/**
 * promises
 * promises has three state
 * 1.processing
 * 2.resolve
 * 3.reject
 * if promises resolve then .then(reslove());
 * if promises rejected then .catch(reject());
 * Promise.then(your resolve function)
 * Promise.catch(your reject function)
 * Promise constructor take an callback function and that callback function take two callback resolve and reject.
 */
const fun1 =() =>{
  return new Promise((resolve,reject)=>{
    let err = false;
    if (!err) {
      console.log("promise resolved ");
      resolve();
    } else {
      console.log("Sorry! I couldn't complete promises");
      reject();
    }
  });
}
fun1()
  .then(function () {
    console.log(" thanks a lot");
  })
  .catch(function () {
    console.log(" very bad bro!");
  });
