import Block from '../../utils/Block';

import { tmpl } from './card.tmpl';

interface CardProps {
  title: string;
  center?: boolean;
  content:Block,
}

export class CardBlock extends Block {
  constructor(props: CardProps) {
    super({ propsWithChildren: props, tagName: 'div' });
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { ...this.props, showButtonsBlock: true });
  }
}
