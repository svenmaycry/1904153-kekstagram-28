import { hashtagRules } from './regexp.js';

const MAX_COMMETTS_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;

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
