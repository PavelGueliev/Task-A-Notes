import { useMemo } from 'react';
import { TAG_IDS } from '../lib/constants/notes.js';

export function useFilteredNotes(notes, searchQuery, activeTagId) {
  return useMemo(() => {
    let result = [...notes];
    const query = searchQuery?.toLowerCase().trim();

    if (query) {
      result = result.filter(
        (note) =>
          note.title?.toLowerCase().includes(query) || note.text?.toLowerCase().includes(query)
      );
    }

    if (activeTagId !== TAG_IDS.ALL) {
      result = result.filter((note) => note.tag === activeTagId);
    }

    return result;
  }, [notes, searchQuery, activeTagId]);
}
