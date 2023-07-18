//Klassen
import * as vehicles from "./car.js";
import {allVehicles} from "./car.js";

var car = new vehicles.Car("mercedes", 2022, 160);
var car2 = new vehicles.Car("porsche", 2021, 220);

car.drive(120);

car2.drive(180);
car2.honk();

vehicles.allVehicles();

vehicles.

