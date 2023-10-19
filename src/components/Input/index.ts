import { tmpl } from './input.tmpl';
import Block from '../../utils/Block';
import { InputProps } from '../../utils/types';

export class InputBlock extends Block {
  constructor(props: InputProps) {
    super({ propsWithChildren: props, tagName: 'div' });
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
