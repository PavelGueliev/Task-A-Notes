const inputBase =
  'w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100';
const inputNormal =
  'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-gray-600 dark:focus:border-blue-500';
const inputError = 'border-red-500 focus:border-red-500 focus:ring-red-500/20 dark:border-red-500';

export function Input({ error, className = '', ...props }) {
  const classes = error ? inputError : inputNormal;

  return <input className={`${inputBase} ${classes} ${className}`.trim()} {...props} />;
}
