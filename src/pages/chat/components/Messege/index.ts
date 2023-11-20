import Block from '../../../../utils/Block';
import { MessageProps } from '../../../../utils/types';
import { tmpl } from './message.tmpl';

export class MessageBlock extends Block {
  constructor(props: MessageProps) {
    super({ propsWithChildren: props });
  }

  showLocalTime(dateTimeString: string): string {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { ...this.props, time: this.showLocalTime(this.props.time) });
  }
}
