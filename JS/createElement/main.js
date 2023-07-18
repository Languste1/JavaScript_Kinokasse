// <div>
// <a>
//etc.

/*
// create element
var divEle = document.createElement("div")

//initiate element
divEle.innerText = "HelloWorld";

// add element to parentelement
document.body.appendChild(divEle);

// add link
var link = document.createElement("a")
link.innerText = "Click here!";
link.href = "https://www.google.de";
document.body.appendChild(link);
 */

//Table erweitern
var table = document.getElementById("table");

var row = table.insertRow(2);
row.insertCell(0).innerText = "Click";
row.insertCell(1).innerText = "here";

row.addEventListener("click", function () {
    var row = table.insertRow(4);
    row.insertCell(0).innerText = "Mark";
    row.insertCell(1).innerText = "Twain";

});

var row = table.insertRow(3);
row.insertCell(0).innerText = "John";
row.insertCell(1).innerText = "Doe";

table.addEventListener("mouseover", function(){
    table.classList.add("highlight")
});
table.addEventListener("mouseout", function(){
    table.classList.remove("highlight")
});

function add() {
    table.classList.add("awesomeTable");
}

function remove(){
    table.classList.remove("awesomeTable");
}

function toggle(){
    table.classList.toggle("awesomeTable");
}









