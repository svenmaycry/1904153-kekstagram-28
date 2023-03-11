import { getRandomInteger, getRandomArrayElement, generateUniqValue } from './util.js';

const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;

const MIN_URL_COUNT = 1;
const MAX_URL_COUNT = 25;

const MIN_PHOTO_ID_COUNT = 1;
const MAX_PHOTO_ID_COUNT = 25;

const MIN_PHOTO_LIKES = 15;
const MAX_PHOTO_LIKES = 200;

const MIN_COMMENTS_ID_COUNT = 1;
const MAX_COMMENTS_ID_COUNT = 500;

const MIN_COMMENTS_AVATAR_COUNT = 1;
const MAX_COMMENTS_AVATAR_COUNT = 6;

const COMMENT_COUNT = 10;

const PHOTO_DESCRIPTIONS = [
  'Не заботьтесь ни о чем, больше улыбайтесь.',
  'Если у вас есть глаза, взгляните на меня сейчас!',
  'Я не толстый. Меня просто легче увидеть, чем всех остальных.',
  'Жизнь похожа на фотографию. Мы развиваемся только из негативов.',
  'Это моя жизнь, и мне так повезло ее жить.',
  'Никогда не бойтесь. Просто постарайтесь быть собой',
  'Когда ты найдешь себя, жизнь меняется.',
];

const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENT_NAMES = ['Петя', 'Оля', 'Артём', 'Даша', 'Саша', 'Алёна', 'Вася', 'Алина',];

const generatePhotoId = generateUniqValue(MIN_PHOTO_ID_COUNT, MAX_PHOTO_ID_COUNT);
const generatePhotoUrl = generateUniqValue(MIN_URL_COUNT, MAX_URL_COUNT);
const generateCommentId = generateUniqValue(MIN_COMMENTS_ID_COUNT, MAX_COMMENTS_ID_COUNT);

const createComments = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_COMMENTS_AVATAR_COUNT, MAX_COMMENTS_AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(COMMENT_LINES),
  name: getRandomArrayElement(COMMENT_NAMES),
});

const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(MIN_PHOTO_LIKES, MAX_PHOTO_LIKES),
  comments: Array.from({ length: getRandomInteger(0, COMMENT_COUNT) }, createComments),
});

// Создаём массив объектов описания фотографии
const getSimilarPhotoDescription = () => Array.from({ length: SIMILAR_PHOTO_DESCRIPTION_COUNT }, createPhotoDescription);

export { getSimilarPhotoDescription };
