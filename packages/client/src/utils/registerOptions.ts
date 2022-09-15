export const login = {
  required: { value: true, message: 'Обязательное поле' },
  minLength: { value: 3, message: 'Минимум 3 символа' },
  maxLength: { value: 20, message: 'Максимум 20 символов' },
  pattern: {
    value: /^[A-ZА-Яa-zа-я_-\d]+$/,
    message: 'Логин может содержать цифры, буквы или символы"-" "_"',
  },
}

export const password = {
  required: { value: true, message: 'Обязательное поле' },
  minLength: { value: 8, message: 'Минимум 8 символов' },
  maxLength: { value: 40, message: 'Максимум 40 символов' },
  pattern: {
    value: /^(?=.*[0-9])(?=.*[A-ZА-Я])/,
    message: 'Пароль должен содержать цифры и заглавные буквы',
  },
}