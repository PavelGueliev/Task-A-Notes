import { SELECTABLE_TAGS } from '../../../lib/constants/notes.js';
import { Button, FormField, Input, Textarea, Select } from '../../ui';
import { ImagePicker } from './ImagePicker.jsx';

export function NoteForm({
  formValues,
  onFormChange,
  onSubmit,
  onCancel,
  submitButtonLabel,
  titleErrorMessage,
}) {
  return (
    <form onSubmit={onSubmit}>
      <FormField label="Заголовок" error={titleErrorMessage}>
        <Input
          value={formValues.title}
          onChange={(event) => onFormChange({ title: event.target.value })}
          placeholder="Введите заголовок..."
          error={!!titleErrorMessage}
          autoFocus
        />
      </FormField>

      <FormField label="Текст">
        <Textarea
          value={formValues.text}
          onChange={(event) => onFormChange({ text: event.target.value })}
          placeholder="Введите текст заметки..."
          rows={4}
        />
      </FormField>

      <FormField label="Изображения">
        <ImagePicker images={formValues.images} onChange={(images) => onFormChange({ images })} />
      </FormField>

      <FormField label="Тег">
        <Select
          value={formValues.tag}
          onChange={(event) => onFormChange({ tag: event.target.value })}
        >
          {SELECTABLE_TAGS.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.label}
            </option>
          ))}
        </Select>
      </FormField>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Отмена
        </Button>
        <Button type="submit" variant="primary">
          {submitButtonLabel}
        </Button>
      </div>
    </form>
  );
}
