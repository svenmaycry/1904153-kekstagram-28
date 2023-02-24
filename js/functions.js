// Функция проверки длины строки

const isLess = (initString, symbols) => initString.length >= symbols;
isLess('проверочная строка', 16);
isLess('проверочная строка', 30);

// Функция проверки, является ли строка палиндромом

const isPalindrome = (initString) => {
  const tempString = initString
    .toLowerCase()
    .replaceAll(' ', '');
  return tempString === tempString.split('').reverse().join('');
};
isPalindrome('man');
isPalindrome('dad');

// Функция извлекающая цифры из строки

const getNumbers = (initString) => parseInt(initString.replace(/\D+/g, ''), 10);

getNumbers('test 345');
getNumbers('1 new test 456');

// Функция возврата исходной строки

const modifyString = (initString, minLength, pad) => {
  const actualPad = minLength - initString.length;

  if (actualPad <= 0) {
    return initString;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + initString;
};
modifyString('1', 2, '0');
modifyString('1', 4, '0');
modifyString('q', 4, 'werty');
modifyString('q', 4, 'we');
modifyString('qwerty', 4, '0');
