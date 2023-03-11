// Получаем рандомное число в заданном диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Получаем рандомный элемент массива от первого элемента до последнего
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Получаем уникальные значения
const generateUniqValue = (minElement, maxElement) => {
  const arr = [];
  return function () {
    let value = getRandomInteger(minElement, maxElement);
    if (arr.length >= maxElement) {
      return null;
    }
    while (arr.includes(value)) {
      value = getRandomInteger(minElement, maxElement);
    }
    arr.push(value);
    return value;
  };
};

export { getRandomInteger, getRandomArrayElement, generateUniqValue };
