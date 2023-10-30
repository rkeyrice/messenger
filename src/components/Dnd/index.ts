import Block from '../../utils/Block';
import { tmpl } from './dnd.tmpl';
import { DndProps } from '../../utils/types';

export class DndBlock extends Block {
  constructor(props: DndProps) {
    super({ propsWithChildren: props, tagName: 'div' });
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
