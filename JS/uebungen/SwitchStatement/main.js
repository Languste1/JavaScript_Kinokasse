function main() {

    let input = document.getElementById("product")
    let product = input.value

    switch (product){
        case "Mehl":
            console.log("Mehl kostet 1€.");
            break;
        case "Milch":
            console.log("Milch kostet 2€.");
            break;
        case "Apfel":
            console.log("Apfel kostet 1€.");
            break;
        default:
            console.log("Es konnte kein Preis gefunden werden.")


    }

}