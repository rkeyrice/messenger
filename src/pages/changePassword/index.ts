import { PersonCardBlock } from '../../components/PersonCard';
import { goBackFromProfile } from '../../utils/helpers';
import { validate } from '../../utils/validators';
import Block from '../../utils/Block';
import { Routes } from '../../utils/types';

const changePasswordFields = [
  {
    label: 'Старый пароль',
    type: 'password',
    name: 'oldPassword',
    errorMessage: 'неверный формат',
    events: {
      blur: validate,
    },
  },
  {
    label: 'Новый пароль',
    type: 'password',
    name: 'newPassword',
    errorMessage: 'неверный формат',
    events: {
      blur: validate,
    },
  },
  {
    label: 'Повторите новый пароль',
    type: 'password',
    name: 'repeatNewPassword',
    errorMessage: 'неверный формат',
    events: {
      blur: validate,
    },
  },
];

const buttons = [
  {
    text: 'Сохранить',
    type: 'submit',
  },
];



export class ChangePassword extends Block {
  init() {
    this.children.content = new  PersonCardBlock({
      inputs: changePasswordFields,
      buttons,
    });;
  }
  mounted() {
    goBackFromProfile(Routes.Profile);
  }

  render() {
    return this.compile(`
      {{{content}}}
    `, {});
  }
}

