import { Chat } from '../utils/types';
import { API } from './api';

export class ChatAPI extends API {
  constructor() {
    super('/chats');
  }

  getChats(): Promise<Chat[]> {
    return this.http.get('');
  }

  createChat(data: Record<string, string>): Promise<XMLHttpRequest> {
    return this.http.post('', { data, headers: { 'Content-Type': 'application/json' } });
  }

  addUser(data: { users: string[]; chatId: number; }): Promise<XMLHttpRequest> {
    return this.http.put('/users', { data, headers: { 'Content-Type': 'application/json' } });
  }

  deleteUser(data: { users: string[]; chatId: number; }): Promise<XMLHttpRequest> {
    return this.http.delete('/users', { data, headers: { 'Content-Type': 'application/json' } });
  }

  getChatToken(id: number): Promise<{ token: number }> {
    return this.http.post(`/token/${id}`);
  }

  deleteChat(id: number): Promise<void> {
    return this.http.delete('', { data: { chatId: id }, headers: { 'Content-Type': 'application/json' } });
  }
}
