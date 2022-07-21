// /*we promises to anyone with three condition
// 1.resolve
// 2.reject 
// 3.pending*/
// function func(){
//     return new Promise(function(reslove,reject){
//         setInterval(() => {
//             const error = true;
//             if(!error){
//                 console.log("this statement is in resolve block")
//                 reslove();
//             }else{
//                 console.log("this statement is in reject block")
//                 reject();
//             }
//         }, 2000);
//     })
// }
// func().then(function(){
//     console.log("this statement is in then block")
// }).catch(function(){
//     console.log("this statement is in catch block")
// })


// Promise: Best video on promises
// -resolve
// -reject
// -pending


//this code is written by "Sir Ji"
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Harry: Thanks for resolving")
}).catch(function(error){
    console.log("Harry: Very bad bro. Reason: " + error)
})
/*console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
// getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
*/