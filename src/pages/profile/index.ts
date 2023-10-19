import { PersonCardBlock } from '../../components/PersonCard';
import { goTo, goBackFromProfile } from '../../utils/helpers';

import { profileFields } from '../../static/data';

const buttons = [
  {
    text: 'Изменить данные',
    type: 'button',
    likeLink: true,
    id: 'change_data',
    events: { click: ():void => { goTo('/change-profile'); } },
  },
  {
    text: 'Изменить пароль',
    type: 'button',
    likeLink: true,
    id: 'change_password',
    events: { click: ():void => { goTo('/change-password'); } },
  },
  {
    text: 'Выйти',
    type: 'button',
    likeLink: true,
    redLink: true,
    id: 'log_out',
    events: { click: ():void => { goTo('/login'); } },
  },
];

export const Profile = (root:Element):void => {
  const component = new PersonCardBlock({
    inputs: profileFields,
    buttons,
  });

  root.append(component.element!);

  component.dispatchComponentDidMount();
  goBackFromProfile('/chat');
};
