import { useState, useCallback } from 'react';
import { INITIAL_NOTE_FORM, VALIDATION, DEFAULT_TAG_ID } from '../lib/constants/notes.js';

export function useNoteForm(initialValues = null) {
  const [formValues, setFormValues] = useState(initialValues ?? INITIAL_NOTE_FORM);
  const [didAttemptSubmit, setDidAttemptSubmit] = useState(false);

  const titleError =
    didAttemptSubmit && !formValues.title?.trim() ? VALIDATION.requiredTitle : null;

  const updateField = useCallback((partial) => {
    setFormValues((prev) => ({ ...prev, ...partial }));
  }, []);

  const updateFieldAndClearTitleError = useCallback((partial) => {
    setFormValues((prev) => ({ ...prev, ...partial }));

    if (partial.title !== undefined) {
      setDidAttemptSubmit(false);
    }
  }, []);

  const setValues = useCallback((values) => {
    setFormValues(values ?? INITIAL_NOTE_FORM);
    setDidAttemptSubmit(false);
  }, []);

  const reset = useCallback(() => {
    setFormValues(INITIAL_NOTE_FORM);
    setDidAttemptSubmit(false);
  }, []);

  const validateAndSubmit = useCallback(
    (onSubmit) => (event) => {
      event.preventDefault();
      setDidAttemptSubmit(true);

      if (!formValues.title?.trim()) {
        return;
      }

      onSubmit({
        title: formValues.title.trim(),
        text: formValues.text?.trim() ?? '',
        tag: formValues.tag ?? DEFAULT_TAG_ID,
        images: formValues.images ?? [],
      });
    },
    [formValues]
  );

  return {
    formValues,
    titleError,
    updateField,
    updateFieldAndClearTitleError,
    setValues,
    reset,
    validateAndSubmit,
  };
}
