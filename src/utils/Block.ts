import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';

import { EventBus } from './EventBus';

// Нельзя создавать экземпляр данного класса
class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = nanoid(6);

  public props: P;

  public children: Record<string, Block | Block[]>;

  private eventBus: () => EventBus;

  private _element: HTMLElement | null | DocumentFragment = null;

  private _meta: { tagName?: string; props?: object; };

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor({ propsWithChildren, tagName }:{propsWithChildren: P, tagName?:string}) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this._meta = {
      tagName,
      props: props as P,
    };

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = ():EventBus<Record<string, string>, Record<string, any[]>> => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(childrenAndProps: P): { props: P, children: Record<string, Block>} {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key as string] = value;
      } else {
        props[key] = value;
      }
    });

    return { props: props as P, children };
  }

  _addEvents():void {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };
    console.log(events)

    Object.keys(events).forEach((eventName) => {
      const inputEvents = ['focus', 'blur', 'change'];
      const el = !inputEvents.includes(eventName) ? this._element : this._findInputInParent(this.element);
      el?.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents():void {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };

    Object.keys(events).forEach((eventName) => {
      const inputEvents = ['focus', 'blur', 'change'];
      const el = !inputEvents.includes(eventName) ? this._element : this._findInputInParent(this.element);
      el?.removeEventListener(eventName, events[eventName]);
    });
  }

  _findInputInParent(
    parent:
    HTMLElement | null | DocumentFragment,
  ):HTMLInputElement | HTMLTextAreaElement| null
    | undefined {
    return parent?.querySelector('input') || parent?.querySelector('textarea');
  }

  _registerEvents(eventBus: EventBus):void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources():void {
    const { tagName } = this._meta;
    this._element = tagName ? document.createElement(tagName) : document.createDocumentFragment();
  }

  private _init():void {
    this._createResources();

    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init():void {}

  _componentDidMount():void {
    this.componentDidMount();
  }

  protected componentDidMount():void {}

  public dispatchComponentDidMount():void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((el) => {
          el.dispatchComponentDidMount();
        });
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate(oldProps: P, newProps: P):void {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  protected componentDidUpdate(oldProps: P, newProps: P):boolean {
    return true;
  }

  setProps = (nextProps: P):void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element():HTMLElement | null | DocumentFragment {
    return this._element;
  }

  private _render():void {
    const fragment = this.render();
    this._removeEvents();
    (this._element as HTMLElement).innerHTML = '';

    this._element!.append(fragment);

    this._addEvents();
  }

   mounted(lol: Element):void {

  }



  protected compile(template: string, context: any, callback?:()=>void): DocumentFragment {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      contextAndStubs[name] = `<div data-id="${(component as Block).id}"></div>`;
    });

    const html = Handlebars.compile(template)(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    Object.entries(this.children).forEach(([_, components]) => {
      const stub = temp.content.querySelector(`[data-id="${(components as Block).id}"]`);

      if (!stub) {
        return;
      }

      if (Array.isArray(components)) {
        const fragment = document.createDocumentFragment();

        components.forEach((component) => {
          const content = component.getContent();
          if (content) {
            fragment.appendChild(content);
          }
        });

        stub.replaceWith(fragment);
      } else {
        stub.replaceWith(components.getContent()!);
      }
    });
    return temp.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent(): HTMLElement | null | DocumentFragment {
    return this.element;
  }

  _makePropsProxy(props: P):P {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string):string {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value):boolean {
        const oldTarget = { ...target };
        const newTarget = target;
        newTarget[prop as keyof P] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, newTarget);
        return true;
      },
      deleteProperty():boolean {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string):HTMLElement | DocumentFragment {
    return tagName ? document.createElement(tagName) : document.createDocumentFragment();
  }

  show():void {
    (this.getContent() as HTMLElement)!.style.display = 'block';
  }

  hide():void {
    (this.getContent() as HTMLElement)!.style.display = 'none';
  }
}

export default Block;
