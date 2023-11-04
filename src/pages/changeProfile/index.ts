import { PersonCardBlock } from '../../components/PersonCard';
import { CardBlock } from '../../components/Card';
import { FormBlock } from '../../components/Form';
import { goBackFromProfile } from '../../utils/helpers';
import { profileFields } from '../../static/data';
import Block from '../../utils/Block';
import { Routes } from '../../utils/types';

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

export class ChangeProfile extends Block {
  init() {
    this.children.content = new PersonCardBlock({
      inputs: unDisabledFileds,
      changeAvatar: true,
      popup: new CardBlock(
        { title: 'Загрузите файл', content: new FormBlock({ buttons: [{ text: 'Поменять', type: 'button' }], profileStyle: true, dnd: { name: 'avatar' } }) },
      ),
      buttons: saveDataButton,
    });
  }
  mounted() {
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

  render() {
    return this.compile(`
      {{{content}}}
    `, {});
  }
}
