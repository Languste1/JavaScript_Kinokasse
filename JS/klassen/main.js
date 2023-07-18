//Klassen
class Car{

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

var car = new Car("mercedes", 2022, 160);
var car2 = new Car("porsche", 2021, 220);

car.drive(120);

car2.drive(180);
car2.honk();


