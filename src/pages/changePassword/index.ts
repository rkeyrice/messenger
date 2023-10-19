import { PersonCardBlock } from '../../components/PersonCard';
import { goBackFromProfile } from '../../utils/helpers';
import { validate } from '../../utils/validators';

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

export const ChangePassword = (root:Element):void => {
  const component = new PersonCardBlock({
    inputs: changePasswordFields,
    buttons,
  });

  root.append(component.element!);

  component.dispatchComponentDidMount();
  goBackFromProfile('/profile');
};
