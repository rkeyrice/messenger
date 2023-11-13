import { ErrorBlock } from '../../components/Error';
import Block from '../../utils/Block';

export class Error500 extends Block {
  init(): void {
    this.children.content = new ErrorBlock({ number: 500, text: 'Мы уже фиксим' });
  }

  render(): DocumentFragment {
    return this.compile(`
      {{{content}}}
    `, {});
  }
}
