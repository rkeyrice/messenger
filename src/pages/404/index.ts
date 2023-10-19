import { ErrorBlock } from '../../components/Error';

export const Error404 = (root:Element):void => {
  const component = new ErrorBlock({ number: 404, text: 'Не туда попали' });

  root.append(component.element!);

  component.dispatchComponentDidMount();
};
