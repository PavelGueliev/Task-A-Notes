const base =
  'cursor-pointer rounded-lg px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 dark:focus:ring-offset-gray-800';

const variants = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500/30 dark:bg-blue-500 dark:hover:bg-blue-600',
  secondary:
    'text-gray-600 hover:bg-gray-100 focus:ring-gray-300 dark:text-gray-300 dark:hover:bg-gray-700',
  danger:
    'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500/30 dark:bg-red-600 dark:hover:bg-red-700',
};

export function Button({
  type = 'button',
  variant = 'secondary',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant] || variants.secondary} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
