import { ChatAPI } from '../api/ChatAPI';
import store from '../utils/store';

class ChatController {
  private api = new ChatAPI();

  async createChat(data: Record<string, string>): Promise<void> {
    try {
      await this.api.createChat(data);
      this.getChats();
    } catch (error) {
      console.log(error);
    }
  }

  async getChats(): Promise<void> {
    try {
      const chats = await this.api.getChats();
      store.set('chats', chats);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatController();
