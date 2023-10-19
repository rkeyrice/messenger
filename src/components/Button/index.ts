import { tmpl } from './button.tmpl';
import Block from '../../utils/Block';
import { ButtonProps } from '../../utils/types';

export class ButtonBlock extends Block {
  constructor(props: ButtonProps) {
    super({ propsWithChildren: props, tagName: 'div' });
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
