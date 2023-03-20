import { createCommentItem } from './create-comment.js';
import { isEscapeKey } from './util.js';

const openFullImage = (item, data) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('body').classList.add('modal-open');
    // document.querySelector('.social__comment-count').classList.add('hidden');
    // document.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('.big-picture').classList.remove('hidden');
    document.querySelector('.big-picture .big-picture__img img').setAttribute('src', data.url);
    document.querySelector('.big-picture .likes-count').textContent = data.likes;
    document.querySelector('.big-picture .comments-count').textContent = data.comments.length;
    document.querySelector('.big-picture .social__caption').textContent = data.description;
    document.querySelector('.social__comments').innerHTML = '';
    data.comments.forEach((comment) => document.querySelector('.social__comments').append(createCommentItem(comment)));
  });
};

const closeFullImage = () => {
  const closeButton = document.querySelector('.big-picture__cancel');
  window.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      document.querySelector('.big-picture').classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
    }
  });
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.big-picture').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  });
};


const VISIBLE_COMMENTS = 5;
const commentsList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');

let shownComments = 0;
const comments = [];

const renderComments = () => {
  shownComments += VISIBLE_COMMENTS;

  if (shownComments >= comments.length) {
    commentsLoader.classList.add('hidden');
    shownComments = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < shownComments; i++) {
    const commentElement = createCommentItem(comments[i]);
    fragment.append(commentElement);
  }

  commentsList.innerHTML = '';
  commentsList.append(fragment);
  commentCount.innerHTML = `${shownComments} из <span class="comments-count">${comments.length}</span>`;
};

export { openFullImage, closeFullImage, renderComments };
