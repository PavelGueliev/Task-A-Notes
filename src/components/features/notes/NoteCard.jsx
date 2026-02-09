import { Button } from '../../ui';
import { IconTrash } from '../../ui/icons';
import { TAGS, TAG_COLORS } from '../../../lib/constants/notes.js';

export function NoteCard({ note, onEditClick, onDeleteClick }) {
  const tag = TAGS.find((tagItem) => tagItem.id === note.tag);
  const tagClassName = tag ? TAG_COLORS[tag.color] || TAG_COLORS.gray : '';

  return (
    <div className="relative flex flex-col justify-between rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition-colors hover:shadow-md dark:border-gray-600 dark:bg-gray-800">
      {tag && (
        <span
          className={`absolute right-2 top-4 rounded px-2 py-1 text-sm font-medium ${tagClassName}`}
        >
          {tag.label}
        </span>
      )}

      <h3
        className={`mb-2 break-words text-lg font-semibold text-gray-800 dark:text-gray-100 ${tag ? 'pr-24' : ''}`}
        title={note.title}
      >
        {note.title}
      </h3>
      <p className="mb-2 whitespace-pre-line text-gray-700 dark:text-gray-300">{note.text}</p>

      {note.images?.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {note.images.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt=""
              className="h-20 w-20 rounded border border-gray-200 object-cover dark:border-gray-600"
            />
          ))}
        </div>
      )}

      <div className="mt-2 flex justify-end gap-2">
        <Button variant="primary" className="text-sm" onClick={() => onEditClick(note)}>
          Редактировать
        </Button>
        <Button
          variant="danger"
          className="flex items-center justify-center p-2"
          onClick={() => onDeleteClick(note.id)}
        >
          <IconTrash className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
