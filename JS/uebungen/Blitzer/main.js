function main() {

    let inputMaxSpeed = document.getElementById("maxSpeed");
    let inputSpeed = document.getElementById("speed");
    let inputDir = document.getElementById("dir");

    let maxSpeed = parseInt(inputMaxSpeed.value)
    let speed = parseInt(inputSpeed.value)
    let isFacing = inputDir.checked;

    let maxSpeedWithOffset = maxSpeed + ((maxSpeed/100)*10);

    console.log(speed)
    console.log(isFacing)
    console.log(maxSpeedWithOffset)

    if (speed> maxSpeedWithOffset && isFacing == true){
        alert("Geblitzt!")
        location.reload()
    }else if (speed <= maxSpeedWithOffset && isFacing == true){
        alert("Sehr vorbildlich!")
        location.reload()
    }else if (speed > maxSpeedWithOffset && isFacing == false){
        alert("Auto ist nicht in die richtung des Blitzers gefahren")
        location.reload()
    }else{
        alert("Messung ungültig!")
        location.reload()
    }
}