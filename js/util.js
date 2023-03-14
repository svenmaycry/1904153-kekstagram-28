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
  const previousValues = [];
  return () => {
    let value = getRandomInteger(minElement, maxElement);
    if (previousValues.length >= maxElement) {
      return null;
    }
    while (previousValues.includes(value)) {
      value = getRandomInteger(minElement, maxElement);
    }
    previousValues.push(value);
    return value;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomInteger, getRandomArrayElement, generateUniqValue, isEscapeKey };
