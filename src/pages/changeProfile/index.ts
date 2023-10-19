import { PersonCardBlock } from '../../components/PersonCard';
import { CardBlock } from '../../components/Card';
import { FormBlock } from '../../components/Form';
import { goBackFromProfile } from '../../utils/helpers';
import { profileFields } from '../../static/data';

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

export const ChangeProfile = (root:Element):void => {
  const popup = new CardBlock(
    { title: 'Загрузите файл', content: new FormBlock({ buttons: [{ text: 'Поменять', type: 'button' }], profileStyle: true, dnd: { name: 'avatar' } }) },
  );
  const component = new PersonCardBlock({
    inputs: unDisabledFileds,
    changeAvatar: true,
    popup,
    buttons: saveDataButton,
  });

  root.append(component.element!);

  component.dispatchComponentDidMount();
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
  goBackFromProfile('/profile');
};
