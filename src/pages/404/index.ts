import { ErrorBlock } from '../../components/Error';
import Block from '../../utils/Block';


export class Error404 extends Block {
  init() {
    this.children.content = new ErrorBlock({ number: 404, text: 'Не туда попали' });
  }
  render() {
    return this.compile(`
      {{{content}}}
    `, {});
  }
}

