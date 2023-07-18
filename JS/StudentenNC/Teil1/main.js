var students = [
    {name: "Klaus", matrikelNum: 2345, NC: 99},
    {name: "Peter", matrikelNum: 2334,  NC: 89},
    {name: "Lisa", matrikelNum: 5365,  NC: 84},
    {name: "Maria", matrikelNum: 5634,  NC: 67},
    {name: "Sven", matrikelNum: 9452,  NC: 97}
]
function calculate() {

    let studentNames = [];
    let nCTotal = 0;
    let studentCounter = 0;

    for (let student of students){
        studentNames.push(student.name);
        nCTotal += student.NC;
        studentCounter++;
    }

    console.log(studentNames + " NC Durchschnitt beträgt: " + nCTotal / studentCounter)
    alert(studentNames + " NC Durchschnitt beträgt: " + nCTotal / studentCounter);

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

