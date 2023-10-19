import { tmpl } from './error.tmpl';
import Block from '../../utils/Block';
import { ButtonBlock } from '../Button';
import { goTo } from '../../utils/helpers';

interface ErrorProps {
  number: number;
  text: string;
}

export class ErrorBlock extends Block {
  constructor(props: ErrorProps) {
    super({ propsWithChildren: props, tagName: 'div' });
  }

  init(): void {
    this.children.button = new ButtonBlock({
      likeLink: true, text: 'назад к чатам', type: 'button', events: { click: ():void => goTo('/chat') },
    });
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
