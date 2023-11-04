import { CardBlock } from '../../components/Card';
import { FormBlock } from '../../components/Form';
import { formSubmit } from '../../utils/helpers';
import { validate } from '../../utils/validators';
import Block from '../../utils/Block';
import router from '../../utils/router';
import { Routes } from '../../utils/types';

const inputs = [
  {
    label: 'Логин',
    type: 'input',
    name: 'login',
    value: '',
    errorMessage: 'Неверный логин',
    error: false,
    events: {
      blur: validate,
    },
  },
  {
    label: 'Пароль',
    type: 'password',
    name: 'password',
    errorMessage: 'Неверный пароль',
    error: false,
    events: {
      blur: validate,
    },
  },
];

const buttons = [
  {
    text: 'Авторизоваться',
    type: 'submit',
  },
  {
    text: 'Нет аккаунта?',
    type: 'button',
    likeLink: true,
    id: 'registration',
    events: {
      click: ():void => {
        router.go(Routes.Register);
      },
    },
  },
];

  const content:Block = new FormBlock(
    {
      inputs,
      buttons,
      events: { submit: (e:Event):void => { formSubmit(e, content.children.inputs); } },
    },
  );

export class Login extends Block {
  init() {
    this.children.content = new CardBlock({ title: 'Вход', content, center: true });
  }
  render() {
    return this.compile(`
      {{{content}}}
    `, {});
  }
}
