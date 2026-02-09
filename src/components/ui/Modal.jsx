import { Button } from './Button';
import { IconClose } from './icons';

export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 cursor-pointer bg-black/50 dark:bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-md rounded-xl bg-white dark:bg-gray-800 p-6 shadow-xl dark:border dark:border-gray-700">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            className="rounded p-1"
            aria-label="Закрыть"
          >
            <IconClose className="h-5 w-5" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
