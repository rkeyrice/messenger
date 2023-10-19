import { tmpl } from './chatlist.tmpl';
import Block from '../../../../utils/Block';
import { ChatBlock } from '../Chat';

const chats = [
  {
    name: 'Rick',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi',
    time: '12:33',
  },
  {
    name: 'Kristina',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi',
    time: '12:33',
  },
  {
    name: 'Eldar',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi',
    unreadMessages: 6,
    time: '12:33',
  },
  {
    name: 'Mike',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi',
    time: '12:33',
  },
  {
    name: 'Marina',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi',
    time: '12:33',
  },
  {
    name: 'Lana',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi',
    unreadMessages: 1,
    time: '12:33',
  },
  {
    name: 'Rick',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi',
    time: '12:33',
  },
  {
    name: 'Kristina',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi',
    unreadMessages: 3,
    time: '12:33',
  },
  {
    name: 'Eldar',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisiciit amet consectetur adipisicinng elit. Eos, modi',
    unreadMessages: 6,
    time: '12:33',
  },
  {
    name: 'Mike',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi',
    time: '12:33',
  },
  {
    name: 'Marina',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi',
    time: '12:33',
  },
  {
    name: 'Lana',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi',
    unreadMessages: 1,
    time: '12:33',
  },
];

export class ChatListBlock extends Block {
  constructor() {
    super({ propsWithChildren: {}, tagName: 'div' });
  }

  init(): void {
    this.children.chats = chats.map((e) => new ChatBlock(e));
  }

  render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
