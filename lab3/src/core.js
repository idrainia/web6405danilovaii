/**
 * Проверяет, является ли число целым используя побитовые операторы
 * @param {*} n
 * @returns {boolean}
 */
function isInteger(n) {
    return (n | 0) === n;
}

/**
 * Возвращает массив четных чисел от 2 до 20 включительно
 * @returns {number[]}
 */
function even() {
    let array = [];
    for (let i = 2; i <= 20; i += 2) 
      array.push(i);   
    return array; 
}

/**
 * Считает сумму чисел до заданного используя цикл
 * @param {*} n
 * @returns {number}
 */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 1) 
      sum += i;   
    return sum;
}

/**
 * Считает сумму чисел до заданного используя рекурсию
 * @param {*} n
 * @returns {number}
 */
function recSumTo(n) {
    if (n <= 1)
        return n;
    return n + recSumTo(n - 1);
}

/**
 * Напишите функцию, считающую факториал заданного числа
 * @param {*} n
 * @returns {number}
 */
function factorial(n) {
    if (n <= 1) 
        return 1;
    return n * factorial(n - 1);
}

/**
 * Определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 * @returns {boolean}
 */
function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

/**
 * Находит N-е число Фибоначчи
 * @param {*} n
 * @returns {number} N
 */
function fibonacci(n) {
    if (n <= 1) 
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/** 
 * Функция функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @returns {function}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;

    return function(newValue) {
        if (operatorFn) {
            storedValue = operatorFn(storedValue, newValue);
        }
        return storedValue;
    };
}
/**
 * Функция создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @returns {function}
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
    let current = start;

    return function() {
        const result = current;
        current += step;
        return result;
    };
}

/**
 * Функция deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp и т.п.) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) 
        return true;

    if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) 
        return true;

    if (firstObject === null || secondObject === null || typeof firstObject !== "object" || typeof secondObject !== "object") {
        return false;
    }

    const keysA = Object.keys(firstObject);
    const keysB = Object.keys(secondObject);

    if (keysA.length !== keysB.length) 
        return false;

    return keysA.every(key => keysB.includes(key) && deepEqual(firstObject[key], secondObject[key]));
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
