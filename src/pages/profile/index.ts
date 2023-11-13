import { PersonCardBlock } from '../../components/PersonCard';
import { goBackFromProfile } from '../../utils/helpers';

import { profileFields } from '../../static/data';
import Block from '../../utils/Block';
import router from '../../utils/router';
import { InputProps, Routes } from '../../utils/types';
import { withStore, State } from '../../utils/store';
import AuthController from '../../controllers/AuthController';

const buttons = [
  {
    text: 'Изменить данные',
    type: 'button',
    likeLink: true,
    id: 'change_data',
    events: { click: (): void => { router.go(Routes.ChangeProfile); } },
  },
  {
    text: 'Изменить пароль',
    type: 'button',
    likeLink: true,
    id: 'change_password',
    events: { click: (): void => { router.go(Routes.ChangePassword); } },
  },
  {
    text: 'Выйти',
    type: 'button',
    likeLink: true,
    redLink: true,
    id: 'log_out',
    events: { click: (): void => { AuthController.logout(); } },
  },
];

export class BaseProfile extends Block {
  init(): void {
    this.children.content = new PersonCardBlock({
      avatar: this.props.avatar,
      inputs: this.inputs,
      buttons,
    });
  }

  get inputs(): InputProps[] {
    return profileFields.map((e): InputProps => {
      if (this.props[e.name]) {
        return { value: this.props[e.name], ...e };
      }
      return e;
    });
  }

  mounted(): void {
    goBackFromProfile(Routes.Chat);
  }

  render(): DocumentFragment {
    return this.compile(`
      {{{content}}}
    `, {});
  }
}

function mapStateToProps(state: State): unknown {
  return { ...state.user };
}

export const Profile = withStore(mapStateToProps)(BaseProfile);
