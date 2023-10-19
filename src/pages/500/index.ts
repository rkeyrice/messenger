import { ErrorBlock } from '../../components/Error';

export const Error500 = (root:Element):void => {
  const component = new ErrorBlock({ number: 500, text: 'Мы уже фиксим' });

  root.append(component.element!);

  component.dispatchComponentDidMount();
};
