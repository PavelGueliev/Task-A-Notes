import { useRef } from 'react';
import { fileToBase64, canAddImage } from '../../../lib/utils/image.js';
import { MAX_IMAGES_PER_NOTE } from '../../../lib/constants/notes.js';
import { Button } from '../../ui';
import { IconClose, IconPlus } from '../../ui/icons';

export function ImagePicker({ images = [], onChange, disabled }) {
  const fileInputRef = useRef(null);
  const canAddMore = canAddImage(images) && !disabled;

  const handleFileSelect = async (event) => {
    const files = Array.from(event.target.files || []);

    if (files.length === 0) {
      return;
    }

    try {
      const slotsLeft = MAX_IMAGES_PER_NOTE - images.length;
      const toAdd = files.slice(0, slotsLeft);
      const converted = await Promise.all(toAdd.map(fileToBase64));

      onChange([...images, ...converted]);
    } catch (err) {
      alert(err.message);
    }

    event.target.value = '';
  };

  const removeAt = (index) => {
    onChange(images.filter((_image, imageIndex) => imageIndex !== index));
  };

  return (
    <div>
      <div className="mb-2 flex flex-wrap gap-2">
        {images.map((src, index) => (
          <div key={index} className="relative group">
            <img
              src={src}
              alt="image"
              className="h-20 w-20 rounded-lg border border-gray-200 object-cover dark:border-gray-600"
            />
            {!disabled && (
              <Button
                type="button"
                variant="danger"
                onClick={() => removeAt(index)}
                className="absolute -right-1 -top-1 flex h-5 w-5 min-w-0 items-center justify-center rounded-full p-0 opacity-90 hover:opacity-100"
                aria-label="Удалить изображение"
              >
                <IconClose className="h-3 w-3" />
              </Button>
            )}
          </div>
        ))}
        {canAddMore && (
          <label className="flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-gray-500 hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:border-blue-500 dark:hover:bg-blue-900/30 dark:hover:text-blue-400">
            <IconPlus className="h-8 w-8" />
            <span className="mt-1 text-xs">Добавить</span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileSelect}
            />
          </label>
        )}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {images.length}/{MAX_IMAGES_PER_NOTE} изображений, макс. 1 МБ каждое
      </p>
    </div>
  );
}
