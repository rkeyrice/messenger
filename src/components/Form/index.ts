import Block from '../../utils/Block';
import { tmpl } from './form.tmpl';
import { InputBlock } from '../Input';
import { PersonInputBlock } from '../PersonInput';
import { ButtonBlock } from '../Button';
import { InputProps, ButtonProps, DndProps } from '../../utils/types';
import { DndBlock } from '../Dnd';

interface FormProps {
  inputs?:InputProps[];
  buttons?: ButtonProps[];
  events?: {
    submit: (e: any) => void
  },
  profileStyle?:boolean,
  dnd?:DndProps
}

export class FormBlock extends Block {
  constructor(props: FormProps) {
    super({ propsWithChildren: props, tagName: 'form' });
  }

  init(): void {
    if (this.inputs) {
      this.children.inputs = this.inputs;
    }
    if (this.props.buttons) {
      this.children.buttons = this.props.buttons?.map((e: ButtonProps) => new ButtonBlock(e));
    }
    if (this.props.dnd) {
      this.children.dnd = new DndBlock(this.props.dnd);
    }
  }

  get inputs(): Block[] {
    return this.props.inputs?.map((e: InputProps) => {
      const { events, ...ostProps } = e;
      const input = this.props.profileStyle ? new PersonInputBlock(ostProps) : new InputBlock(ostProps);
      if (events) {
        const eventCollection:Record<string, (e:FocusEvent)=>void> = {};
        Object.entries(events).forEach(([eventName, fn]) => {
          eventCollection[eventName] = (event:FocusEvent):void => (fn as (input: Block, event:FocusEvent)=>void)(input, event);
        });
        input.setProps({ events: eventCollection });
      }

      return input;
    });
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
