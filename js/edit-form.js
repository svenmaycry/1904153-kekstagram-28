import { isEscapeKey } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');

const onModalKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    uploadFile.value = '';
    overlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const openModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');

  overlay.addEventListener('focusin', () => document.removeEventListener('keydown', onModalKeydown));
  overlay.addEventListener('focusout', () => document.addEventListener('keydown', onModalKeydown));

  document.addEventListener('keydown', onModalKeydown);
};

const closeModal = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';

  document.removeEventListener('keydown', onModalKeydown);
};

uploadFile.addEventListener('change', () => {
  openModal();
});

uploadCancel.addEventListener('click', () => {
  closeModal();
});
