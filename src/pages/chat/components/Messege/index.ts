import Block from '../../../../utils/Block';
import { tmpl } from './message.tmpl';

interface MessageProps {
  message: string;
  time: string | undefined;
  read?: boolean | undefined;
  fromMe?: boolean | undefined;
}

export class MessageBlock extends Block {
  constructor(props:MessageProps) {
    super({ propsWithChildren: props });
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
