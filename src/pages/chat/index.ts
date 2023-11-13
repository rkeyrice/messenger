import { MessageListBlock } from './components/MessageList';
import { tmpl } from './chat.tmpl';

import Block from '../../utils/Block';
import { ChatListBlock } from './components/ChatList';
import { MessageInputBlock } from './components/MessageInput';
import { formSubmitValues } from '../../utils/helpers';
import router from '../../utils/router';
import { State, withStore } from '../../utils/store';
import { ButtonBlock } from '../../components/Button';
import { CardBlock } from '../../components/Card';
import { FormBlock } from '../../components/Form';
import ChatController from '../../controllers/ChatController';
import { OptionsButton } from '../../components/OptionsButton';
import messagesController from '../../controllers/MessagesController';
import { Routes } from '../../utils/types';

export class BaseChat extends Block {
  get sendMessageBlock(): Block {
    const element = new MessageInputBlock({
      events: {
        submit: (e: Event): void => {
          const value = formSubmitValues(e, element) as { message: string };
          if (value) {
            messagesController.sendMessage(this.props.activeChat, value.message);
            (document.getElementById('message') as HTMLTextAreaElement).value = '';
          }
        },
      },
      name: 'message',
      error: false,
    });
    return element;
  }

  init(): void {
    this.children.chatList = new ChatListBlock({
      activeChat: this.props.activeChat,
      chats: [],
    });
    this.children.messageList = new MessageListBlock({ propsWithChildren: {} });
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
    this.children.optionsButton = new OptionsButton({ activeChat: this.props.activeChat });
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
    goProfile?.addEventListener('click', (): void => { router.go(Routes.Profile); });

    this.popup?.addEventListener('click', (e) => {
      this.closeCreateChatPopup(e);
    });
  }

  closeCreateChatPopup(e?: Event): void {
    if (!this.popup) {
      return;
    }
    if (this.popup === e?.target) {
      this.popup.style.display = 'none';
    } else if (!e) {
      this.popup.style.display = 'none';
    }
  }

  openCreateChatPopup(): void {
    if (this.popup) {
      this.popup.style.display = 'flex';
    }
  }

  async createChat(e: Event, inputs: Block[]): Promise<void> {
    e.preventDefault();
    const data = formSubmitValues(e, inputs);
    await ChatController.createChat(data as Record<string, string>);
    this.closeCreateChatPopup();
  }

  getChats(): void {
    ChatController.getChats();
  }

  get popup(): HTMLElement | null {
    return document.getElementById('create_popup');
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}

function mapStateToProps(state: State): unknown {
  let chatName;
  if (state.chats) {
    state.chats.forEach((element) => {
      if (element.id === state?.activeChat) {
        chatName = element.title;
      }
    });
  }
  return {
    chatName, chats: state.chats, activeChat: state?.activeChat,
  };
}

export const Chat = withStore(mapStateToProps)(BaseChat);
