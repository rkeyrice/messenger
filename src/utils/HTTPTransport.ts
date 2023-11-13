const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

type ObjectType = Record<string, string>;

function queryStringify(data: ObjectType): string {
  const params = Object.entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `?${params}`;
}

type RequestOptions = {
  data?: unknown;
  headers?: ObjectType;
  timeout?: number;
};

type HTTPMethods = <T = XMLHttpRequest>(
  url: string,
  options?: RequestOptions
) => Promise<T>

export class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';

  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  get: HTTPMethods = (path: string, options = {}): Promise<any> => this.request(this.endpoint + path, { ...options }, METHODS.GET);

  put: HTTPMethods = (path: string, options = {}): Promise<any> => this.request(this.endpoint + path, { ...options }, METHODS.PUT);

  post: HTTPMethods = (path: string, options = {}): Promise<any> => this.request(this.endpoint + path, { ...options }, METHODS.POST);

  delete: HTTPMethods = (path: string, options = {}): Promise<any> => this.request(this.endpoint + path, { ...options }, METHODS.DELETE);

  request = <T = any>(url: string, options: RequestOptions, method = METHODS.GET): Promise<T> => new Promise<T>((resolve, reject) => {
    const { headers = {}, data = {}, timeout = 5000 } = options;
    const compUrl = method === METHODS.GET ? `${url}${queryStringify(data as ObjectType)}` : url;
    const xhr = new XMLHttpRequest();

    xhr.open(method, compUrl);
    xhr.timeout = timeout;

    xhr.onreadystatechange = (): void => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status < 400) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      }
    };

    xhr.onabort = reject;
    xhr.onerror = reject;

    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });

    xhr.withCredentials = true;
    xhr.responseType = 'json';

    xhr.ontimeout = reject;
    if (method === METHODS.GET || !data) {
      xhr.send();
    } else if (headers['Content-Type'] === 'application/json') {
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send(data as Document);
    }
  });
}
