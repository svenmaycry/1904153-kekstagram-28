const hashtagRules = /^#[a-zа-яё0-9]{1,19}$/i;
const formHashtags = document.querySelector('.text__hashtags');

const isValidHashtag = (tag) => {
  if (formHashtags.value.length === 0) {
    return true;
  } else {
    hashtagRules.test(tag);
  }
};

export { isValidHashtag };
