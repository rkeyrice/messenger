import { tmpl } from './chatlist.tmpl';
import Block from '../../../../utils/Block';
import { ChatBlock } from '../Chat';
import { Chat } from '../../../../utils/types';
import { State, withStore } from '../../../../utils/store';

export class ChatListBlockBase extends Block {
  init(): void {
    this.setChats();
  }

  setChats(): void {
    this.children.chats = (this.props.chats ?? []).map((e: Chat) => new ChatBlock(e));
  }

  render(): DocumentFragment {
    if (this.props.chats) {
      this.setChats();
    }

    return this.compile(tmpl, this.props.chats);
  }
}

function mapStateToProps(state: State): unknown {
  return { avatar: state.user?.avatar, chats: state.chats };
}

export const ChatListBlock = withStore(mapStateToProps)(ChatListBlockBase);
