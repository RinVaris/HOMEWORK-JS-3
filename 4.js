"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

//Сумма
function findSum(number1, number2) {
  return number1 + number2;
}

console.log(findSum(3, 5));

// Разность
function findDifference(number1, number2) {
  if (number1 > number2) {
    return number1 - number2;
  } else {
    return number2 - number1;
  }
}

console.log(findDifference(3, 5));

// Умножение
function findMultip(number1, number2) {
  return number1 * number2;
}

console.log(findMultip(3, 5));

// Деление
function findDivision(number1, number2) {
  return number1 / number2;
}

console.log(findDivision(3, 5));
