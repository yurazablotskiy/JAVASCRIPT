// Импортируем всё необходимое
import { Robot, Type, RandomNum } from './classes/Robot'

// Создание объекта на основе класса Робот (обязательные параметры - тип робота и его имя)
let enemy = new Robot(Type.Enemy, 'Терминатор')
// Через объект обращаемся к методу setNewCoords
// Он принимает 1 параметр – массив, состоящий из 3 чисел
// Из метода должен возвращаться итоговый массив
let enemyCoords = enemy.setNewCoords([RandomNum(5), RandomNum(5), RandomNum(5)])
console.log('Enemy Coords:', enemyCoords);

// Создаем ещё три объекта
let assist1 = new Robot(Type.Assist, 'Бобби 1', [4, 0, 3])
// Одному из них можем указать доп характеристки (указываем что его уже чинили)
let assist2 = new Robot(Type.Assist, 'Бобби 2', [2, 5, 1], { isRepaired: true })
let assist3 = new Robot(Type.Assist, 'Бобби 3', [2, 1, 0])

// Обращаемся ко всем созданным объектам и получаем информацию про роботов
enemy.info()
assist1.info()
assist2.info()
assist3.info()