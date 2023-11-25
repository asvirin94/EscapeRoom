export const AppRoute = {
  Main: '/',
  Login: '/login',
  Quest: '/quest/:id',
  Booking: '/quest/:id/booking',
  Contacts: '/contacts',
  Quests: '/my-quests'
} as const;

export const NameSpace = {
  Data: 'DATA',
  App: 'APP'
} as const;

export const DifficultLevel = {
  easy: 'легкий',
  medium: 'средний',
  hard: 'сложный',
  any: 'любой'
} as const;

export const Genre = {
  any: 'Все квесты',
  adventures: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  'sci-fi': 'Sci-fi'
} as const;

export const GenreFilterName = {
  any: 'any',
  adventures: 'adventures',
  horror: 'horror',
  mystic: 'mystic',
  detective: 'detective',
  'sci-fi': 'sci-fi'
} as const;

export const LevelFilterName = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
  any: 'any'
} as const;
