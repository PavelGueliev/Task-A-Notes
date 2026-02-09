import { useEffect } from 'react';
import { Modal } from '../../ui';
import { useNoteForm } from '../../../hooks/useNoteForm.js';
import { DEFAULT_TAG_ID } from '../../../lib/constants/notes.js';
import { NoteForm } from './NoteForm.jsx';

export function EditNoteModal({ isOpen, onClose, note, onSave }) {
  const { formValues, titleError, updateFieldAndClearTitleError, setValues, validateAndSubmit } =
    useNoteForm();

  useEffect(() => {
    if (note) {
      setValues({
        title: note.title || '',
        text: note.text || '',
        tag: note.tag || DEFAULT_TAG_ID,
        images: note.images || [],
      });
    }
  }, [note, setValues]);

  const handleSubmit = validateAndSubmit((payload) => {
    if (!note) {
      return;
    }

    onSave(note.id, payload);
    onClose();
  });

  if (!note) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Редактировать заметку">
      <NoteForm
        formValues={formValues}
        onFormChange={updateFieldAndClearTitleError}
        onSubmit={handleSubmit}
        onCancel={onClose}
        submitButtonLabel="Сохранить"
        titleErrorMessage={titleError}
      />
    </Modal>
  );
}
