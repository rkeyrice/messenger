import { tmpl } from './chat.tmpl';
import Block from '../../../../utils/Block';
import { Chat } from '../../../../utils/types';
import store from '../../../../utils/store';

export class ChatBlock extends Block {
  constructor(props: Chat) {
    super({ propsWithChildren: props, tagName: 'div' });
  }

  init(): void {
    this.props.events = {
      click: (): void => {
        store.set('activeChat', this.props.id);
      },
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { ...this.props });
  }
}
