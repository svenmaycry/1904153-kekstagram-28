import { getSimilarPhotoDescription } from './data.js';
import { renderThumbnails } from './show-thumbnails.js';

import './edit-form.js';
import './validate.js';

renderThumbnails(getSimilarPhotoDescription());
