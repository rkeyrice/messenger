import { expect } from 'chai';
import sinon from 'sinon';
import Block from '.';

const defaultProps = { title: 'some title', content: 'some content' };

describe('Block', () => {
  let Component: typeof Block;

  before(() => {
    class SomeBlock extends Block {
      render(): DocumentFragment {
        return this.compile(`
        <form>
          <h1 class="title">{{title}}</h1>
          <p class="content">{{content}}</p>
        </form>
      `, this.props);
      }
    }
    Component = SomeBlock;
  });

  it('Should update props', () => {
    const NewComp = new Component({ propsWithChildren: defaultProps });
    const newProps = { title: 'someTitle', content: 'someContent' };
    NewComp.setProps(newProps);
    console.log('NewComp', NewComp.props);
    expect(NewComp.props).to.deep.equal(newProps);
  });

  it('Should render with props', () => {
    const NewComp = new Component({ propsWithChildren: { title: 'some title', content: 'some content', events: (): void => console.log('lol') } });
    const title = NewComp.element?.querySelector('.title')?.textContent;
    const content = NewComp.element?.querySelector('.content')?.textContent;
    expect({ title, content }).to.deep.equal(defaultProps);
  });

  it('Should be an event', () => {
    const handleStub = sinon.stub();
    const pageComponent = new Component({
      propsWithChildren: {
        events: {
          click: handleStub,
        },
      },
    });

    const event = new MouseEvent('click');
    pageComponent.element?.dispatchEvent(event);

    expect(handleStub.calledOnce).to.be.true;
  });
});
