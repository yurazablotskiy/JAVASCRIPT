"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNum = exports.Type = exports.Robot = void 0;
// Определение перечисления для типа робота
var Type;
(function (Type) {
    Type["Enemy"] = "Enemy";
    Type["Assist"] = "Assist";
})(Type || (exports.Type = Type = {}));
// Функция для генерации случайных чисел
function RandomNum(max) {
    return Math.floor(Math.random() * max);
}
exports.RandomNum = RandomNum;
// Определение класса "Robot"
class Robot {
    constructor(type, name, coordinates = [0, 0, 0], options) {
        this.type = type;
        this.name = name;
        this.coordinates = coordinates;
    }
    setNewCoords(newCoordinates) {
        this.coordinates = newCoordinates;
        return this.coordinates;
    }
    info() {
        console.log(`Robot Type: ${this.type}`);
        console.log(`Name: ${this.name}`);
        console.log(`Coordinates: [${this.coordinates.join(', ')}]`);
        console.log('---');
    }
}
exports.Robot = Robot;
