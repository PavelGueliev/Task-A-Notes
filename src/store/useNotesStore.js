import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  DEFAULT_NOTE,
  DEFAULT_TAG_ID,
  FALLBACK_NOTE_TITLE,
  DEFAULT_NEW_NOTE_TITLE,
  TAG_IDS,
} from '../lib/constants/notes.js';
import { stripHtml } from '../lib/utils/dom.js';

function migrateNote(note) {
  if (!note.title) {
    note.title = note.text?.slice(0, 50) || FALLBACK_NOTE_TITLE;
  }

  if (!note.tag) {
    note.tag = DEFAULT_TAG_ID;
  }

  if (!Array.isArray(note.images)) {
    note.images = [];
  }

  note.text = stripHtml(note.text);

  return note;
}

export const useNotesStore = create(
  persist(
    (set) => ({
      notes: [DEFAULT_NOTE],
      searchQuery: '',
      activeTag: TAG_IDS.ALL,

      addNote: (payload) =>
        set((state) => ({
          notes: [
            ...state.notes,
            {
              id: crypto.randomUUID(),
              title: payload.title || DEFAULT_NEW_NOTE_TITLE,
              text: payload.text || '',
              tag: payload.tag || DEFAULT_TAG_ID,
              images: payload.images ?? [],
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      updateNote: (id, payload) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id !== id
              ? note
              : {
                  ...note,
                  title: payload.title ?? note.title,
                  text: payload.text ?? note.text,
                  tag: payload.tag ?? note.tag,
                  images: payload.images ?? note.images ?? [],
                  updatedAt: new Date().toISOString(),
                }
          ),
        })),

      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),

      setSearchQuery: (query) => set({ searchQuery: query }),
      setActiveTag: (tag) => set({ activeTag: tag }),
    }),
    {
      name: 'notes-storage',
      version: 4,
      partialize: (state) => ({ notes: state.notes }),
      migrate: (persistedState) => {
        if (persistedState?.notes) {
          persistedState.notes = persistedState.notes.map(migrateNote);
        }

        return persistedState;
      },
    }
  )
);

export { TAGS, TAG_IDS } from '../lib/constants/notes.js';
