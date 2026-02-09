import { Button, Input } from '../ui';
import { IconSun, IconMoon, IconSearch, IconPlus } from '../ui/icons';

export function Header({ searchQuery, onSearchChange, onAddNoteClick, onToggleTheme, isDark }) {
  return (
    <header className="border-b border-gray-200 bg-white transition-colors dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-2">
            <div className="relative max-w-xs flex-1">
              <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Поиск заметок..."
                className="pl-9"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={onToggleTheme}
              className="rounded-lg p-2"
              aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
            >
              {isDark ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
            </Button>
            <Button type="button" variant="primary" onClick={onAddNoteClick} className="flex shrink-0 items-center gap-2">
              <IconPlus className="h-4 w-4" />
              Добавить
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
