import { Modal } from '../../ui';
import { useNoteForm } from '../../../hooks/useNoteForm.js';
import { NoteForm } from './NoteForm.jsx';

export function AddNoteModal({ isOpen, onClose, onAdd }) {
  const { formValues, titleError, updateFieldAndClearTitleError, reset, validateAndSubmit } =
    useNoteForm();

  const handleSubmit = validateAndSubmit((payload) => {
    onAdd(payload);
    reset();
    onClose();
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Новая заметка">
      <NoteForm
        formValues={formValues}
        onFormChange={updateFieldAndClearTitleError}
        onSubmit={handleSubmit}
        onCancel={handleClose}
        submitButtonLabel="Создать"
        titleErrorMessage={titleError}
      />
    </Modal>
  );
}
