import { MessageListBlock } from './components/MessageList';
import { tmpl } from './chat.tmpl';

import Block from '../../utils/Block';
import { ChatListBlock } from './components/ChatList';
import { MessageInputBlock } from './components/MessageInput';
import { formSubmit, formSubmitValues } from '../../utils/helpers';
import router from '../../utils/router';
import store, { State, withStore } from '../../utils/store';
import { ButtonBlock } from '../../components/Button';
import { CardBlock } from '../../components/Card';
import { FormBlock } from '../../components/Form';
import ChatController from '../../controllers/ChatController';

export class Chat extends Block {
  get sendMessageBlock(): Block {
    const element = new MessageInputBlock({ events: { submit: (e: Event): void => formSubmit(e, element) }, name: 'message', error: false });
    return element;
  }

  init(): void {
    this.children.chatList = new ChatListBlock({ propsWithChildren: {} });
    this.children.messageList = new MessageListBlock();
    this.children.messageInput = this.sendMessageBlock;
    this.children.AddChatButton = new ButtonBlock({ text: 'добавить чат', type: 'button', events: { click: (): void => { this.openCreateChatPopup(); } } });
    this.children.popup = new CardBlock({
      title: 'Создать чат',
      content: new FormBlock({
        buttons: [{ text: 'Создать', type: 'submit' }],
        events: { submit: (e: Event): void => { this.createChat(e, this.inputs); } },
        inputs: [{ type: 'имя чата', name: 'title', label: 'Имя чата' }],
      }),
    });
    this.getChats();
  }

  get inputs(): Block[] {
    const parenEl = (this.children.popup as Block).children.content as Block;
    return parenEl.children.inputs as Block[];
  }

  mounted(): void {
    const dialog = document.querySelector('#dialog');
    const goProfile = document.querySelector('#go_profile');
    if (dialog) {
      dialog.scrollTop = dialog.scrollHeight;
    }
    goProfile?.addEventListener('click', (): void => { router.go('/profile'); });

    this.popup?.addEventListener('click', (e) => {
      this.closeCreateChatPopup(e);
    });
  }

  closeCreateChatPopup(e: Event): void {
    if (this.popup === e.target && this.popup) {
      this.popup.style.display = 'none';
    }
  }

  openCreateChatPopup(): void {
    if (this.popup) {
      this.popup.style.display = 'flex';
    }
  }

  createChat(e: Event, inputs: Block[]): void {
    e.preventDefault();
    const data = formSubmitValues(e, inputs);
    ChatController.createChat(data as Record<string, string>);
  }

  getChats(): void {
    ChatController.getChats();
  }

  get popup(): HTMLElement | null {
    return document.getElementById('popup');
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
