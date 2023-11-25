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
