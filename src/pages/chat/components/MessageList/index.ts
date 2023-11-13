import Block from '../../../../utils/Block';
import { tmpl } from './messageList.tmpl';
import { MessageBlock } from '../Messege';
import store, { State, withStore } from '../../../../utils/store';
import { MessageProps } from '../../../../utils/types';

export class BaseMessageListBlock extends Block {
  get messages(): Block[] {
    return (this.props.messages ?? []).map((e: MessageProps) => new MessageBlock({ fromMe: store.getState().user?.id === e.user_id, ...e }));
  }

  mounted(): void {
    const dialog = document.querySelector('#dialog');
    if (dialog) {
      dialog.scrollTop = 1000;
    }
  }

  setChildren(): void {
    this.children.messages = this.messages.reverse();
  }

  render(): DocumentFragment {
    this.setChildren();
    return this.compile(tmpl, this.props);
  }
}

function mapStateToProps(state: State): unknown {
  if (state.messages) {
    return { messages: state?.messages[state.activeChat ?? 0], activeChat: state?.activeChat };
  }
  return { activeChat: state?.activeChat, messages: [] };
}

export const MessageListBlock = withStore(mapStateToProps)(BaseMessageListBlock);
