import { Chat, IUser } from './types';
import { EventBus } from './EventBus';
import { isEqual, set } from './helpers';
import Block from './Block';

export interface State {
  user?: IUser;
  chats?: Chat
}

enum StorageEvent {
  UpdateState = 'update',
}

class Store extends EventBus {
  private state: State = {};

  getState(): State {
    return this.state;
  }

  set(path: string, value: unknown): void {
    // @ts-ignore
    if (!isEqual(this.state[path as keyof State], value)) {
      set(this.state, path, value);
      this.emit(StorageEvent.UpdateState, this.state);
    }
  }
}

const updateChildrens = (comp: Block | Block[], props: Record<string, string>): void | boolean => {
  const checkProps = (parent: Block): void => Object.keys(props).forEach((prop) => {
    const needUpdate: Record<string, string> = {};

    if (parent.props?.hasOwnProperty(prop)) {
      needUpdate[prop] = props[prop];
    }
    if (Object.keys(needUpdate).length > 0) {
      parent.setProps(needUpdate);
    }
  });

  if (comp instanceof Block) {
    checkProps(comp);
    if (!comp.children) {
      return;
    }
    const childrens = Object.values(comp.children);
    if (!childrens.length) {
      return;
    }
    if (childrens.length === 1) {
      const child = childrens[0] as Block;
      checkProps(child);

      if ((child).children) {
        Object.keys((child).children).forEach((name) => {
          updateChildrens((child as Block).children[name], props);
        });
      }
    } else {
      childrens.forEach((child) => {
        updateChildrens(child, props);
      });
    }
  } else {
    comp.forEach((el) => {
      updateChildrens(el, props);
    });
  }
};

const store = new Store();

export function withStore(mapStateToProps: (state: State) => any) {
  return (Component: typeof Block): typeof Block => class extends Component {
    constructor(props: any) {
      super({ propsWithChildren: { ...props, ...mapStateToProps(store.getState()) }, tagName: 'div' });

      updateChildrens(this, mapStateToProps(store.getState()));
      store.on(StorageEvent.UpdateState, () => {
        const propsFromState = mapStateToProps(store.getState());
        updateChildrens(this, propsFromState);
        // this.setProps(propsFromState);
        this.mounted();
      });
    }
  };
}

export default store;
