export class Car{

    constructor(brand, year, hp) {
        this.brand = brand;
        this.year = year;
        this.hp = hp;
    }

    drive (speed){
        console.log("fährt: " + this.brand + speed)
    }

    honk(){
        console.log("hupt: " + JSON.stringify(this))
    }

}

export class Ship{

    constructor(brand, year, hp) {
        this.brand = brand;
        this.year = year;
        this.hp = hp;
    }

    drive (speed){
        console.log("fährt: " + this.brand + speed)
    }

    honk(){
        console.log("hupt: " + JSON.stringify(this))
    }

}

export function allVehicles(){
    console.log("Ausgabe");
}