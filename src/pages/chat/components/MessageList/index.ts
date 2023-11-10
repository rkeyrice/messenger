import Block from '../../../../utils/Block';
import { tmpl } from './messageList.tmpl';
import { MessageBlock } from '../Messege';

export class MessageListBlock extends Block {
  constructor() {
    super({ propsWithChildren: {}, tagName: 'div' });
  }

  get messages(): Block[] {
    return [].map((e) => new MessageBlock(e));
  }

  init(): void {
    this.children.messages = this.messages;
  }

  mounted(lol: HTMLElement): void {
    const dialog = lol.querySelector('#dialog');
    if (dialog) {
      dialog.scrollTop = 1000;
    }
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
