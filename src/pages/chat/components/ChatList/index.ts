import { tmpl } from './chatlist.tmpl';
import Block from '../../../../utils/Block';
import { ChatBlock } from '../Chat';
import { Chat } from '../../../../utils/types';

export class ChatListBlock extends Block {
  constructor(props: { chats: Chat[], activeChat: number }) {
    super({ propsWithChildren: props, tagName: 'div' });
  }

  init(): void {
    this.setChats();
  }

  setChats(): void {
    this.children.chats = this.props.chats.map((e: Chat) => new ChatBlock({ active: e.id === this.props.activeChat, ...e }));
  }

  render(): DocumentFragment {
    if (this.props.chats) {
      this.setChats();
    }

    return this.compile(tmpl, this.props);
  }
}
