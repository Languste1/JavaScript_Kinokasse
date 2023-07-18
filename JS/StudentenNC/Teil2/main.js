var students = [

]
function addStudent() {

    let inputName = document.getElementById("inputName").value;
    let inputID = parseInt(document.getElementById("inputID").value);
    let inputNC = parseInt(document.getElementById("inputNC").value);

    let student = {
        "Name" : inputName,
        "Matrikelnummer" : inputID,
        "NC" : inputNC
    };

    students.push(student);

    console.log(students);
}

function calcAverageNC(){

    var totalNC = 0;

    for (let i = 0; i < students.length; i++){

        var student = students[i];
        console.log(student);
        totalNC += student.NC;
    }

    var averageNC = totalNC / students.length;
    console.log("NC Durchschnitt: " + averageNC)


}

