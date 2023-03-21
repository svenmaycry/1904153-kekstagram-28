import { isEscapeKey } from './util.js';

// const form = document.querySelector('#upload-select-image');
const uploadFile = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
// const formHashtags = document.querySelector('.text__hashtags');
// const formComment = document.querySelector('.text__description');

const openForm = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

uploadFile.addEventListener('input', () => {
  openForm();
});


const closeForm = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
};

window.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeForm();
  }
});

uploadCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
});
