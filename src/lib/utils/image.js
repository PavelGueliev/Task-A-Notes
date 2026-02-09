import { MAX_IMAGE_SIZE_BYTES, MAX_IMAGES_PER_NOTE } from '../constants/notes.js';

export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      reject(new Error('Файл слишком большой (макс. 1 МБ)'));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Не удалось загрузить изображение'));
    reader.readAsDataURL(file);
  });
}

export function canAddImage(images = []) {
  return Array.isArray(images) && images.length < MAX_IMAGES_PER_NOTE;
}
