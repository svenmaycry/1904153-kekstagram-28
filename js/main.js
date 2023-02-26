// Создаем константу-число сгенерированных объектов по ТЗ
const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;

// Создаем Id - идентификатор опубликованной фотографии + делаем из него массив
const uniquePhotoId = [];

// Создаём url -адрес картинки
const uniquePhotoUrl = [];

// Создаём описание фотографии
const photoDescription = [
  'Не заботьтесь ни о чем, больше улыбайтесь.',
  'Если у вас есть глаза, взгляните на меня сейчас!',
  'Я не толстый. Меня просто легче увидеть, чем всех остальных.',
  'Жизнь похожа на фотографию. Мы развиваемся только из негативов.',
  'Это моя жизнь, и мне так повезло ее жить.',
  'Никогда не бойтесь. Просто постарайтесь быть собой',
  'Когда ты найдешь себя, жизнь меняется.',
];

// Создаём число лайков для каждой фотографии
const photoLikes = [];
for (let i = 15; i <= 200; i++) {
  photoLikes.push(i);
}

// Определяем константу уникального id для комментариев
const uniqueCommentsId = [];

// Определяем константу аватара для комментариев
const commentsAvatarCount = [];
for (let i = 1; i <= 6; i++) {
  commentsAvatarCount.push(i);
}

// Определяем константу сообщения для комментариев
const commentsMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Определяем константу имени для комментариев
const commentsNames = [
  'Артём',
  'Оля',
  'Петя',
  'Даша',
  'Саша',
  'Алёна',
  'Вася',
  'Алина',
];

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
const generateUniqValue = (arr, minElement, maxElement) => {
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

// Собираем объект комментариев
const createComments = () => ({
  id: generateUniqValue(uniqueCommentsId, 1, 100),
  avatar: `img/avatar-${getRandomArrayElement(commentsAvatarCount)}.svg`,
  message: getRandomArrayElement(commentsMessage),
  name: getRandomArrayElement(commentsNames),
});

// Строим структуру объекта для описания фотографии
const createPhotoDescription = () => ({
  id: generateUniqValue(uniquePhotoId, 1, 25),
  url: `photos/${generateUniqValue(uniquePhotoUrl, 1, 25)}.jpg`,
  description: getRandomArrayElement(photoDescription),
  likes: getRandomArrayElement(photoLikes),
  comments: Array.from({ length: 3 }, createComments),
});

// Создаём массив объектов описания фотографии
const similarPhotoDescription = () => Array.from({ length: SIMILAR_PHOTO_DESCRIPTION_COUNT }, createPhotoDescription);
similarPhotoDescription();
