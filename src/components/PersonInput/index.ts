import { tmpl } from './personInput.tmpl';
import Block from '../../utils/Block';
import { InputProps } from '../../utils/types';

export class PersonInputBlock extends Block {
  constructor(props: InputProps) {
    super({ propsWithChildren: props, tagName: 'div' });
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
