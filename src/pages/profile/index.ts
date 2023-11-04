import { PersonCardBlock } from '../../components/PersonCard';
import { goBackFromProfile } from '../../utils/helpers';

import { profileFields } from '../../static/data';
import Block from '../../utils/Block';
import router from '../../utils/router';
import { Routes } from '../../utils/types';

const buttons = [
  {
    text: 'Изменить данные',
    type: 'button',
    likeLink: true,
    id: 'change_data',
    events: { click: ():void => { router.go('/change-profile'); } },
  },
  {
    text: 'Изменить пароль',
    type: 'button',
    likeLink: true,
    id: 'change_password',
    events: { click: ():void => {  router.go('/change-password'); } },
  },
  {
    text: 'Выйти',
    type: 'button',
    likeLink: true,
    redLink: true,
    id: 'log_out',
    events: { click: ():void => {  router.go('/'); } },
  },
];

export class Profile extends Block {
  init() {
    this.children.content =new PersonCardBlock({
      inputs: profileFields,
      buttons,
    });
  }
  mounted() {
    goBackFromProfile(Routes.Chat)
  }

  render() {
    return this.compile(`
      {{{content}}}
    `, {});
  }
}
