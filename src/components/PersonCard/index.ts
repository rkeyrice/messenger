import Block from '../../utils/Block';
import { tmpl } from './personCard.tmpl';
import { formSubmit } from '../../utils/helpers';
import { ButtonProps, InputProps } from '../../utils/types';
import { ArrowButtonBlock } from '../ArrowButton';
import { FormBlock } from '../Form';

interface PersonCardProps {
  buttons?: ButtonProps[];
  inputs:InputProps[]
  changeAvatar?: boolean;
  popup?: Block;
}

export class PersonCardBlock extends Block {
  constructor(props: PersonCardProps) {
    super({ propsWithChildren: props, tagName: 'div' });
  }

  init(): void {
    this.children.goBackButton = new ArrowButtonBlock({ toLeft: true, type: 'button' });
    this.children.content = this.content;
  }

  get content():Block {
    const content = new FormBlock({
      inputs: this.props.inputs, profileStyle: true, buttons: this.props.buttons, events: { submit: (e:Event):void => { formSubmit(e, content.children.inputs); } },
    });
    return content;
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
