const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const thumbnailListFragment = document.createDocumentFragment();

const renderThumbnails = (thumbnail) => {
  thumbnail.forEach(({ url, likes, comments, description }) => {
    const thumbnailElement = thumbnailTemplate.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').src = url;
    thumbnailElement.querySelector('.picture__img').alt = description;
    thumbnailElement.querySelector('.picture__likes').textContent = likes;
    thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
    thumbnailListFragment.append(thumbnailElement);
  });
  pictures.append(thumbnailListFragment);
};

export { renderThumbnails };
