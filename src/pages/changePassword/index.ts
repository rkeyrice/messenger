import { PersonCardBlock } from '../../components/PersonCard';
import { formSubmitValues, goBackFromProfile } from '../../utils/helpers';
import { validate } from '../../utils/validators';
import Block from '../../utils/Block';
import { PasswordTypes, Routes } from '../../utils/types';
import UserController from '../../controllers/ProfileController';

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
  init(): void {
    this.children.content = new PersonCardBlock({
      inputs: changePasswordFields,
      buttons,
      event: this.updatePassword,
    });
  }

  async updatePassword(e: Event, inputs: Block[]): Promise<void> {
    const data = formSubmitValues(e, inputs);
    const { repeatNewPassword: _, ...ostData } = data as PasswordTypes;
    if (data) {
      await UserController.updatePassword(ostData);
    }
  }

  mounted(): void {
    goBackFromProfile(Routes.Profile);
  }

  render(): DocumentFragment {
    return this.compile(`
      {{{content}}}
    `, {});
  }
}
