import { createCommentItem } from './create-comment.js';
import { isEscapeKey } from './util.js';

//!!! Все данные для renderComments

const commentsList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');

const VISIBLE_COMMENTS = 5;
let shownComments = 0;
//!!! Функция загрузки комментов

const renderComments = (data) => {
  shownComments += VISIBLE_COMMENTS;
  if (shownComments >= data.comments.length) {
    commentsLoader.classList.add('hidden');
    shownComments = data.comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < shownComments; i++) {
    const commentElement = createCommentItem(data.comments[i]);
    fragment.append(commentElement);
  }

  commentsList.innerHTML = '';
  commentsList.append(fragment);
  commentCount.innerHTML = `${shownComments} из <span class="comments-count">${data.comments.length}</span>`;
};

const openFullImage = (item, data) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('body').classList.add('modal-open');
    document.querySelector('.big-picture').classList.remove('hidden');
    document.querySelector('.big-picture .big-picture__img img').setAttribute('src', data.url);
    document.querySelector('.big-picture .likes-count').textContent = data.likes;
    document.querySelector('.big-picture .comments-count').textContent = data.comments.length;
    document.querySelector('.big-picture .social__caption').textContent = data.description;
    document.querySelector('.social__comments').innerHTML = '';
    //!!! После загрузки страницы, при открытии первой фотографии, когда нажимаем "загрузить ещё" счётчик и прогрузка комментариев работает нормально, но когда закрываешь фото и открываешь другую, либо эту же, тогда начинается "магия"
    renderComments(data);
    commentsLoader.addEventListener('click', () => {
      renderComments(data);
    });
  });
};

const closeFullImage = () => {
  const closeButton = document.querySelector('.big-picture__cancel');
  window.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      document.querySelector('.big-picture').classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
      //!!! Обновляю число комментов при закрытии + удаляю событие загрузки
      shownComments = 0;
      commentsLoader.removeEventListener('click', renderComments);
    }
  });
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.big-picture').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    //!!! Обновляю число комментов при закрытии + удаляю событие загрузки
    shownComments = 0;
    commentsLoader.removeEventListener('click', renderComments);
  });
};

export { openFullImage, closeFullImage };
