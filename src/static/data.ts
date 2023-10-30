import { validate } from '../utils/validators';

export const profileFields = [
  {
    label: 'Почта',
    isDisabled: true,
    name: 'email',
    type: 'email',
    errorMessage: 'Неверный формат почты',
    events: {
      blur: validate,
    },
  },
  {
    label: 'Логин',
    isDisabled: true,
    name: 'login',
    type: 'text',
    errorMessage: 'Неверный формат логина',
    events: {
      blur: validate,
    },
  },
  {
    label: 'Имя',
    isDisabled: true,
    name: 'first_name',
    type: 'text',
    errorMessage: 'Неверный формат имени',
    events: {
      blur: validate,
    },
  },
  {
    label: 'Фамилия',
    isDisabled: true,
    name: 'second_name',
    type: 'text',
    errorMessage: 'Неверный формат фамилии',
    events: {
      blur: validate,
    },
  },
  {
    label: 'Имя в чате',
    isDisabled: true,
    name: 'display_name',
    type: 'text',
    events: {
      blur: validate,
    },
  },
  {
    label: 'Телефон',
    isDisabled: true,
    name: 'phone',
    type: 'phone',
    errorMessage: 'Неверный формат телефона',
    events: {
      blur: validate,
    },
  },
];
