import { API } from './api';

export class ChatAPI extends API {
  constructor() {
    super('/chats');
  }

  getChats(): Promise<XMLHttpRequest> {
    return this.http.get('');
  }

  createChat(data: Record<string, string>): Promise<XMLHttpRequest> {
    return this.http.post('', { data, headers: { 'Content-Type': 'application/json' } });
  }
}
