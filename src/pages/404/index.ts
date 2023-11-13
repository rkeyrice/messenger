import { ErrorBlock } from '../../components/Error';
import Block from '../../utils/Block';

export class Error404 extends Block {
  init():void {
    this.children.content = new ErrorBlock({ number: 404, text: 'Не туда попали' });
  }

  render():DocumentFragment {
    return this.compile(`
      {{{content}}}
    `, {});
  }
}
