import { PersonCardBlock } from '../../components/PersonCard';
import { CardBlock } from '../../components/Card';
import { FormBlock } from '../../components/Form';
import { formSubmitValues, goBackFromProfile } from '../../utils/helpers';
import { profileFields } from '../../static/data';
import Block from '../../utils/Block';
import { InputProps, Routes } from '../../utils/types';
import { withStore, State } from '../../utils/store';
import UserController from '../../controllers/UserController';

const unDisabledFileds = profileFields.map((e) => ({
  ...e,
  isDisabled: false,
}));

const saveDataButton = [
  {
    text: 'Сохранить',
    type: 'submit',
  },
];

export class BaseChangeProfile extends Block {
  init(): void {
    this.children.content = new PersonCardBlock({
      avatar: this.props.avatar,
      inputs: unDisabledFileds,
      changeAvatar: true,
      event: this.updateProfile,
      popup: new CardBlock(
        {
          title: 'Загрузите файл',
          content: new FormBlock({
            buttons: [{ text: 'Поменять', type: 'submit' }], events: { submit: (e: Event): void => { this.changeAvatar(e); } }, profileStyle: true, dnd: { name: 'avatar' },
          }),
        },
      ),
      buttons: saveDataButton,
    });
  }

  async changeAvatar(e: Event): Promise<void> {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    await UserController.updateAvatar(formData);
  }

  async updateProfile(e: Event, inputs: Block[]): Promise<void> {
    const data = formSubmitValues(e, inputs);
    if (data) {
      await UserController.updateProfile(data as Record<string, string>);
    }
  }

  get inputs(): InputProps[] {
    return unDisabledFileds.map((e): InputProps => {
      if (this.props[e.name]) {
        return { value: this.props[e.name], ...e };
      }
      return e;
    });
  }

  mounted(): void {
    const changeAvatar = document.getElementById('avatar');
    const popupTarget = document.getElementById('popup');

    changeAvatar?.addEventListener('click', () => {
      if (popupTarget) {
        popupTarget.style.display = 'flex';
      }
    });

    popupTarget?.addEventListener('click', (e) => {
      if (e.target === popupTarget) {
        popupTarget.style.display = 'none';
      }
    });
    goBackFromProfile(Routes.Profile);
  }

  render(): DocumentFragment {
    return this.compile(`
      {{{content}}}
    `, { ...this.props });
  }
}

function mapStateToProps(state: State): unknown {
  return { ...state.user };
}

export const ChangeProfile = withStore(mapStateToProps)(BaseChangeProfile);
