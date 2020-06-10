let a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); //2 потому что сначала произошёл инкремент и a стала 2 а затем присвоилась в c

d = b++;
alert(d); //1 потому что сначала было присвоение, а после инкремент

c = 2 + ++a;
alert(c); //5 потому что сначала произошёл инкремент а стала равнятся 3 потом сложение 2 + 3, а затем присвоение 

d = 2 + b++; //4 потому что сначала произошло сложение и присвоение, а после инкремент

a = 2;

let x = 1 + (a *= 2); // a*=2 это умножение с присвоением (a*= 2) == (a = a*2) а после сложение x = 5, a = 4

a = 5;
b = 8;

if (a > 0 && b > 0) {
    console.log(a - b);
}

if (a < 0 && b < 0) {
    console.log(a * b);
}

if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    console.log(a + b);
}

/**
 * Функция возвращающася сумму двух чисел
 * @param {number} arg1 Первое число
 * @param {number} arg2 Второе число
 * @returns {number} Сумма двух чисел
 */
function addition(arg1, arg2) {
    return (arg1 + arg2);
}


/**
 * Функция возвращающая разницу двух чисел
 * @param {number} arg1 Уменьшаемое число
 * @param {number} arg2 Вычитаемое число
 * @returns {number} Разница первого и второго чисел
 */
function subtraction(arg1, arg2) {
    return (arg1 - arg2);
}
/**
 * Функция возвращающая произведение двух чисел
 * @param {number} arg1 Первое число
 * @param {number} arg2 Второе число
 * @returns {number} Произведение двух чисел
 */
function product(arg1, arg2) {
    return (arg1 * arg2);
}
/**
 * Функия возвращающая частное двух чисел. При попытке деления на ноль возвращает null
 * @param {number} arg1 Делимое
 * @param {number} arg2 Делитель
 * @returns {number} Частное
 */
function division(arg1, arg2) {
    if (arg2 == 0) {
        return null;
    }
    return (arg1 / arg2);

}
/**
 * Функия принимающая два числа и операцию которую надо произвести над ними. Возможные операции "Сложение", "Вычитание", "Умножение", "Деление".
 * @param {number} arg1 Первое число
 * @param {number} arg2 Второе число
 * @param {string} operation Операция которую надо произвести над числами.
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "Сложение":
            return addition(arg1, arg2);
        case "Вычитание":
            return subtraction(arg1, arg2);
        case "Умножение":
            return product(arg1, arg2);
        case "Деление":
            return division(arg1, arg2);
        default:
            alert("Введена неправильная операция. Правильные операции \"Сложение\", \"Вычитание\", \"Умножение\", \"Деление\"");
            return null;
    }
}
/**
 * Функция которая выводит на экран количество денег зачисленное на счет
 * @member lastTwoCharacters последние две цифры числа необходимые для проверки исключений в виде 4 чисел 11, 12, 13, 14.
 * @member lastCharacter последняя цифра числа.
 * @param {number} amount Количество денег для зачисления.
 */
function balanceReplenishment(amount) {
    if (amount < 0){
        throw Error("Сумма должна быть положительной");
    }
    else if(isNaN(amount)){
        throw Error("Введите число");
    }
    lastTwoCharacters = Number(String(amount).slice(-2));
    lastCharacter = Number(String(amount).slice(-1));
    if (lastTwoCharacters == 11 || lastTwoCharacters == 12 || lastTwoCharacters == 13 || lastTwoCharacters == 14) {
        alert("Ваша сумма в " + amount + " рублей успешно зачислена");
    }
    else{
        switch (true) {
            case lastCharacter == 1:
                alert("Ваша сумма в " + amount + " рубль успешно зачислена");
                break;
            case (lastCharacter == 0 || lastCharacter == 5 || lastCharacter == 6 || lastCharacter == 7 || lastCharacter == 8 || lastCharacter == 9):
                alert("Ваша сумма в " + amount + " рублей успешно зачислена");
                break;
            case (lastCharacter == 2 || lastCharacter == 3 || lastCharacter == 4):
                alert("Ваша сумма в " + amount + " рубля успешно зачислена");
                break;
        }
    }   
}

balanceReplenishment(parseInt(prompt("Введи сумму")));