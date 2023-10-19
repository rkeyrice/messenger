import { MessageListBlock } from './components/MessageList';
import { tmpl } from './chat.tmpl';

import Block from '../../utils/Block';
import { ChatListBlock } from './components/ChatList';
import { MessageInputBlock } from './components/MessageInput';
import { formSubmit, goTo } from '../../utils/helpers';

export class ChatBlock extends Block {
  constructor() {
    super({ propsWithChildren: {}, tagName: 'div' });
  }

  get sendMessageBlock():Block {
    const element = new MessageInputBlock({ events: { submit: (e:Event):void => formSubmit(e, element) }, name: 'message', error: false });
    return element;
  }

  init(): void {
    this.children.chatList = new ChatListBlock();
    this.children.messageList = new MessageListBlock();
    this.children.messageInput = this.sendMessageBlock;
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}

export const Chat = (root:Element):void => {
  const component:Block = new ChatBlock();

  root.append(component.element!);

  component.dispatchComponentDidMount();

  const dialog = document.getElementById('dialog');
  const goProfile = document.getElementById('go_profile');

  if (dialog) {
    dialog.scrollTop = dialog.scrollHeight;
  }

  goProfile?.addEventListener('click', ():void => { goTo('/profile'); });
};
