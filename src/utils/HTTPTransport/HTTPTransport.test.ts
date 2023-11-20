import sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from 'sinon';
import { expect } from 'chai';
import { HTTPTransport } from '.';

describe('HTTPTransport Tests', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  let newRequest: SinonFakeXMLHttpRequest | null;

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    (global as any).XMLHttpRequest = xhr;

    xhr.onCreate = (request: SinonFakeXMLHttpRequest): void => {
      newRequest = request;
    };

    instance = new HTTPTransport('/auth/user');
  });

  afterEach(() => {
    newRequest = null;
  });

  it('Should be a GET method', () => {
    instance.get('');
    expect(newRequest?.method).to.eq('GET');
  });

  it('Should be a PUT method', () => {
    instance.put('');

    expect(newRequest?.method).to.eq('PUT');
  });

  it('Should be a DELETE method', () => {
    instance.delete('');

    expect(newRequest?.method).to.eq('DELETE');
  });

  it('Should be a POST method', () => {
    instance.post('');

    expect(newRequest?.method).to.eq('POST');
  });
});
