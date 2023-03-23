import { isValidHashtag } from './regexp.js';

const MAX_COMMENTS_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;
const MAX_HASHTAGS_SYMBOLS_LENGTH = 104;

const form = document.querySelector('#upload-select-image');
const formHashtags = document.querySelector('.text__hashtags');
const formComment = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
}, false);

pristine.addValidator(
  formHashtags,
  isValidHashtag,
  'хештег написан не правильно'
);

formHashtags.addEventListener('focusin', () => {
  pristine.reset();
});

formHashtags.addEventListener('focusout', () => {
  pristine.reset();
});

const validateHashtagsLength = () => formHashtags.value.trim().length <= MAX_HASHTAGS_SYMBOLS_LENGTH;

pristine.addValidator(
  formHashtags,
  validateHashtagsLength,
  'слишком много символов'
);

const validateCommentLength = () => formComment.value.trim().length <= MAX_COMMENTS_LENGTH;

pristine.addValidator(
  formComment,
  validateCommentLength,
  'слишком много символов'
);

const validateHashtagsNumber = () => formHashtags.value.trim().split(' ').length < MAX_HASHTAGS_COUNT;

pristine.addValidator(
  formHashtags,
  validateHashtagsNumber,
  'слишком много хештегов'
);

const validateSimilarHashtags = () => {
  const values = [];
  for (let i = 0; i < formHashtags.value.trim().split(' ').length; i++) {
    const value = formHashtags.value.trim().split(' ')[i];
    if (values.indexOf(value) !== -1) {
      return false;
    }
    values.push(value);
  }
  return true;
};

pristine.addValidator(
  formHashtags,
  validateSimilarHashtags,
  'нельзя повторять хештеги'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
