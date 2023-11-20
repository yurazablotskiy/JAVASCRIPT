// Определение перечисления для типа робота
enum Type {
  Enemy = 'Enemy',
  Assist = 'Assist',
}

// Определение интерфейса для дополнительных характеристик
interface RobotOptions {
  isRepaired?: boolean;
}

// Функция для генерации случайных чисел
function RandomNum(max: number) {
  return Math.floor(Math.random() * max);
}

// Определение класса "Robot"
class Robot {
  private type: Type;
  private name: string;
  private coordinates: number[];

  constructor(type: Type, name: string, coordinates: number[] = [0, 0, 0], options?: RobotOptions) {
    this.type = type;
    this.name = name;
    this.coordinates = coordinates;
  }

  setNewCoords(newCoordinates: number[]): number[] {
    this.coordinates = newCoordinates;
    return this.coordinates;
  }

  info(): void {
    console.log(`Robot Type: ${this.type}`);
    console.log(`Name: ${this.name}`);
    console.log(`Coordinates: [${this.coordinates.join(', ')}]`);
    console.log('---');
  }
}

export { Robot, Type, RandomNum };
