import Block from '../../utils/Block';
// import { InputProps, ButtonProps } from '../../utils/types';
// import { FormBlock } from '../Form';

import { tmpl } from './card.tmpl';

export { tmpl } from './card.tmpl';

interface CardProps {
  title: string;
  // inputs?: Block[];
  // buttons?: Block[];
  center?: boolean;
  // events?:(e:FormDataEvent)=>void
  content:Block,
}

export class CardBlock extends Block {
  constructor(props: CardProps) {
    super({ propsWithChildren: props, tagName: 'div' });
  }

  init(): void {
    // this.children.content = this.props.content;
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { ...this.props, showButtonsBlock: true });
  }
}

// export const Card = (props: CardProps) => Handlebars.compile(tmpl)(props);
