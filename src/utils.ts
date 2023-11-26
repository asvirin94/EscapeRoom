export const checkHasDigits = (value: string) => {
  const hasDigit = /\d/.test(value);
  return hasDigit || 'Пароль должен содержать хотя бы одну цифру';
};

export const checkHasLetter = (value: string) => {
  const hasLetter = /[a-zA-Z]/.test(value);
  return hasLetter || 'Пароль должен содержать хотя бы одну букву';
};

export const checkPasswordLength = (value: string) => {
  const isValidLength = /^.{3,15}$/.test(value);
  return isValidLength || 'Длина пароля должна быть от 3 до 15 символов';
};

export const makeTimeSlotId = (time: string) => {
  const [hours, mins] = time.split(':');
  return `${hours}h${mins}m`;
};

export const separateDayTimeString = (value: string) => {
  const separated = value.match(/(today|tomorrow)(\d{2}:\d{2})/);
  return separated as RegExpMatchArray;
};

