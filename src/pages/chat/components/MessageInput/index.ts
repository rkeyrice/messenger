import { ArrowButtonBlock } from '../../../../components/ArrowButton';
import Block from '../../../../utils/Block';
import { tmpl } from './messageInput.tmpl';
import { MessageInputBlockProps } from '../../../../utils/types';

export class MessageInputBlock extends Block {
  constructor(props:MessageInputBlockProps) {
    super({ propsWithChildren: props, tagName: 'form' });
  }

  init(): void {
    this.children.arrowButton = new ArrowButtonBlock({ type: 'submit' });
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
