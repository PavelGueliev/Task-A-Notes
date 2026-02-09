import { useState } from 'react';
import { useNotesStore, TAGS, TAG_IDS } from './store/useNotesStore';
import { useTheme, useFilteredNotes } from './hooks';
import { Header, MainContent } from './components/layout';
import { EmptyState } from './components/ui';
import { NoteCard, AddNoteModal, EditNoteModal, TagFilter } from './components/features/notes';

function App() {
  const { toggleTheme, isDark } = useTheme();

  const notes = useNotesStore((state) => state.notes);
  const searchQuery = useNotesStore((state) => state.searchQuery);
  const activeTagId = useNotesStore((state) => state.activeTag);
  const addNote = useNotesStore((state) => state.addNote);
  const updateNote = useNotesStore((state) => state.updateNote);
  const deleteNote = useNotesStore((state) => state.deleteNote);
  const setSearchQuery = useNotesStore((state) => state.setSearchQuery);
  const setActiveTag = useNotesStore((state) => state.setActiveTag);

  const [isAddOpen, setAddOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const visibleNotes = useFilteredNotes(notes, searchQuery, activeTagId);
  const hasFilters = !!searchQuery?.trim() || activeTagId !== TAG_IDS.ALL;

  const openEdit = (note) => {
    setEditingNote(note);
    setEditOpen(true);
  };

  const closeEdit = () => {
    setEditOpen(false);
    setEditingNote(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 transition-colors dark:bg-gray-900">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onAddNoteClick={() => setAddOpen(true)}
        onToggleTheme={toggleTheme}
        isDark={isDark}
      />

      <MainContent>
        <h1 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-100">Ваши заметки</h1>

        <TagFilter tags={TAGS} activeTagId={activeTagId} onTagSelect={setActiveTag} />

        {visibleNotes.length === 0 ? (
          <EmptyState hasActiveFilters={hasFilters} />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onEditClick={openEdit}
                onDeleteClick={deleteNote}
              />
            ))}
          </div>
        )}
      </MainContent>

      <AddNoteModal isOpen={isAddOpen} onClose={() => setAddOpen(false)} onAdd={addNote} />

      <EditNoteModal
        isOpen={isEditOpen}
        onClose={closeEdit}
        note={editingNote}
        onSave={updateNote}
      />
    </div>
  );
}

export default App;
