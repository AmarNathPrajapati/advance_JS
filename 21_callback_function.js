//creating a array
const students = [
    {name : 'Amar Nath', course : "JavaScript"},
    {name : 'Chandan',course:"C"}
]
//enroll function which will push student data in 'students';
// now we will use callback function

function enrollStudent(student,call){//here call is a callback function.
    setTimeout(() => {
        console.log("here student is enrolled")
        students.push(student);
        call();
    }, 4000);
}
// function which fetch the data 
function getStudents(student){
    setTimeout(() => {
        console.log("here student's data is fetched");
        // let str= "";
        students.forEach(function(student){
            // str+= `<li>${student.name}</li>`;
            // document.getElementById('student').innerHTML=str;
            console.log(student);
        })
    }, 2000);
}
let newStudent = {name:'lucky',course:'python'}
enrollStudent(newStudent,getStudents); //after using callback function
//getStudents();