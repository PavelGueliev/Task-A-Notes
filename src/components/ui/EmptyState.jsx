export function EmptyState({ hasActiveFilters, message }) {
  const displayText =
    message ??
    (hasActiveFilters
      ? 'По вашему запросу заметок не найдено'
      : 'Заметок пока нет. Нажмите «Добавить», чтобы создать первую.');

  return (
    <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-12 text-center text-gray-500 dark:text-gray-400">
      {displayText}
    </div>
  );
}
