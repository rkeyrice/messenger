import { tmpl } from './arrowButton.tmpl';
import Block from '../../utils/Block';
import { ArrowButtonProps } from '../../utils/types';

export class ArrowButtonBlock extends Block {
  constructor(props: ArrowButtonProps) {
    super({ propsWithChildren: props, tagName: 'div' });
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
