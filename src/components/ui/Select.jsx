const base =
  'cursor-pointer w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 mt-0 mb-[15px] bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 dark:focus:border-blue-500';

export function Select({ className = '', ...props }) {
  return <select className={`${base} ${className}`.trim()} {...props} />;
}
