// function alertContents() {
//     if (httpRequest.readyState === XMLHttpRequest.DONE) {
//       if (httpRequest.status === 200) {
//         alert(httpRequest.responseText);
//         alert('hello')
//       } else {
//         alert('There was a problem with the request.');
//       }
//     }
// }

//
const students = [
    {
        name: "harry" , subject: "java"
    },
     {
         name:"Akshara" , subject:"python"
     }

]
const student11 = [
    {
        name: "A" , subject: "java"
    },
     {
         name:"Aksh" , subject:"python"
     }

]

function enroll(student){
    setTimeout(function(){
        students.push(student);
        console.log(students);
    },3000);
}

function enroll2(student1){
    setTimeout(function(){
        student11.push(student1);
        console.log(student11);
    },6000);
}
enroll();
enroll2();

