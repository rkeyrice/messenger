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
    data: ObjectType;
    headers: ObjectType;
    timeout: number;
  };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class HTTPTransport {
  get = (url: string, options: RequestOptions): Promise<XMLHttpRequest> => this.request(url, { ...options }, METHODS.GET);

  put = (url: string, options: RequestOptions): Promise<XMLHttpRequest> => this.request(url, { ...options }, METHODS.PUT);

  post = (url: string, options: RequestOptions): Promise<XMLHttpRequest> => this.request(url, { ...options }, METHODS.POST);

  delete = (url: string, options: RequestOptions): Promise<XMLHttpRequest> => this.request(url, { ...options }, METHODS.DELETE);

  request = (url: string, options: RequestOptions, method = METHODS.GET): Promise<XMLHttpRequest> => new Promise<XMLHttpRequest>((resolve, reject) => {
    const { headers = {}, data = {}, timeout = 5000 } = options;
    const compUrl = method === METHODS.GET ? `${url}${queryStringify(data)}` : url;
    const xhr = new XMLHttpRequest();

    xhr.open(method, compUrl);
    xhr.timeout = timeout;

    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });

    xhr.onload = ():void => {
      resolve(xhr);
    };

    xhr.onabort = reject;
    xhr.onerror = reject;

    xhr.ontimeout = reject;
    if (method === METHODS.GET || !data) {
      xhr.send();
    } else {
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.send(JSON.stringify(data));
    }
  });
}
