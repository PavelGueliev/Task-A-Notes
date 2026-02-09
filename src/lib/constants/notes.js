export const TAG_IDS = {
  ALL: 'all',
  PERSONAL: 'personal',
  WORK: 'work',
  HOME: 'home',
};

export const DEFAULT_TAG_ID = TAG_IDS.PERSONAL;
export const FALLBACK_NOTE_TITLE = 'Без названия';
export const DEFAULT_NEW_NOTE_TITLE = 'Новая заметка';

export const TAGS = [
  { id: TAG_IDS.ALL, label: 'Все', color: 'gray' },
  { id: TAG_IDS.PERSONAL, label: 'Личное', color: 'orange' },
  { id: TAG_IDS.WORK, label: 'Работа', color: 'purple' },
  { id: TAG_IDS.HOME, label: 'Дом', color: 'green' },
];

export const SELECTABLE_TAGS = TAGS.filter((tag) => tag.id !== TAG_IDS.ALL);

export const DEFAULT_NOTE = {
  id: 'default',
  title: 'Добро пожаловать',
  text: 'Это ваша первая заметка. Вы можете её отредактировать или создать новые.',
  tag: DEFAULT_TAG_ID,
  createdAt: new Date().toISOString(),
};

export const INITIAL_NOTE_FORM = {
  title: '',
  text: '',
  tag: DEFAULT_TAG_ID,
  images: [],
};

export const VALIDATION = {
  requiredTitle: 'Заголовок обязателен',
};

export const MAX_IMAGES_PER_NOTE = 3;
export const MAX_IMAGE_SIZE_BYTES = 1024 * 1024;

export const TAG_COLORS = {
  gray: 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200',
  orange: 'bg-orange-200 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200',
  purple: 'bg-purple-200 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200',
  green: 'bg-green-200 text-green-800 dark:bg-green-900/50 dark:text-green-200',
};
