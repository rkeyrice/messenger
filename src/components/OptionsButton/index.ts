import { tmpl } from './optionsButton.tmpl';
import Block from '../../utils/Block';
import { ButtonBlock } from '../Button';
import { CardBlock } from '../Card';
import { FormBlock } from '../Form';
import ChatController from '../../controllers/ChatController';
import { formSubmitValues } from '../../utils/helpers';
import store from '../../utils/store';

export class OptionsButton extends Block {
  popup: HTMLElement | null;

  constructor(props: { activeChat: number }) {
    super({ propsWithChildren: props, tagName: 'div' });
    this.popup = null;
  }

  protected init(): void {
    this.children.buttons = [
      new ButtonBlock({
        text: 'добавить пользователя',
        type: 'button',
        likeLink: true,
        events: {
          click: (): void => {
            this.setProps({ popup: { title: 'Добавить пользователя', submit: this.addUser, buttonText: 'Добавить' } });
            this.openPopup();
          },
        },
      }),
      new ButtonBlock({
        text: 'удалить пользователя',
        type: 'button',
        likeLink: true,
        redLink: true,
        events: {
          click: (): void => {
            this.setProps({ popup: { title: 'Удалить пользователя', submit: this.deleteUser, buttonText: 'Удалить' } });
            this.openPopup();
          },
        },
      }),
      new ButtonBlock({
        text: 'удалить чат',
        type: 'button',
        likeLink: true,
        redLink: true,
        events: {
          click: (): void => {
            ChatController.deleteChat(this.props.activeChat);
          },
        },
      }),
    ];
  }

  openPopup(): void {
    if (!this.popup) {
      return;
    }
    this.popup.style.display = 'flex';
  }

  closePopup(): void {
    if (this.popup) {
      this.popup.style.display = 'none';
    }
  }

  async addUser(e: Event, parent: Block): Promise<void> {
    e.preventDefault();
    const { inputs } = (parent.children.content as Block).children;
    const chatId = store.getState()?.activeChat;
    const data = formSubmitValues(e, inputs);
    await ChatController.addUserTochat(data as Record<string, string>, chatId as number);
    const popup = document?.querySelector('#edit_users') as HTMLElement;
    popup.style.display = 'none';
  }

  async deleteUser(e: Event, parent: Block): Promise<void> {
    e.preventDefault();
    const { inputs } = (parent.children.content as Block).children;
    const chatId = store.getState()?.activeChat;
    const data = formSubmitValues(e, inputs);
    await ChatController.deleteUserFromchat(data as Record<string, string>, chatId as number);
    const popup = document?.querySelector('#edit_users') as HTMLElement;
    popup.style.display = 'none';
  }

  mounted(dom: HTMLElement | DocumentFragment | null): void {
    const popupWrap = dom?.querySelector('#edit_users') as HTMLElement;
    this.popup = popupWrap;
    this.popup?.addEventListener('click', (e) => {
      if (this.popup === e.target) {
        this.closePopup();
      }
    });
  }

  render(): DocumentFragment {
    this.children.popup = new CardBlock({
      title: this.props?.popup?.title ?? '',
      content: new FormBlock({
        buttons: [{ text: this.props?.popup?.buttonText, type: 'submit' }],
        events: { submit: (e: Event): void => { this.props.popup.submit(e, this.children.popup); } },
        inputs: [{ type: 'имя чата', name: 'login', label: 'Введите логин' }],
      }),
    });
    return this.compile(tmpl, this.props);
  }
}
