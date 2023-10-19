import { CardBlock } from '../../components/Card';
import { FormBlock } from '../../components/Form';
import { formSubmit, goTo } from '../../utils/helpers';
import { validate } from '../../utils/validators';
import Block from '../../utils/Block';

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
      click: ():void => goTo('/registration'),
    },
  },
];

export const Login = (root:Element):void => {
  const content:Block = new FormBlock(
    {
      inputs,
      buttons,
      events: { submit: (e:Event):void => { formSubmit(e, content.children.inputs); } },
    },
  );

  const component:Block = new CardBlock({ title: 'Вход', content, center: true });

  root.append(component.element!);

  component.dispatchComponentDidMount();
};
