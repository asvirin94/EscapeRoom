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
  App: 'APP',
  User: 'USER'
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

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN'
} as const;

export const DateTranslation = {
  today: 'сегодня',
  tomorrow: 'завтра'
};

export const CENTER_COORDINATES = {
  lat: 59.938676,
  lng: 30.314494
};

export const QUEST_OFFICE_COORDINATES = {
  lat: 59.968322,
  lng: 30.317359
};

export const MAP_ZOOM = 10;
