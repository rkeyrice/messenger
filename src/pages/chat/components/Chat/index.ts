import { tmpl } from './chat.tmpl';
import Block from '../../../../utils/Block';

interface ChatListProps {
  name: string;
  message: string;
  unreadMessages?: number;
}

export class ChatBlock extends Block {
  constructor(props:ChatListProps) {
    super({ propsWithChildren: props, tagName: 'div' });
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
