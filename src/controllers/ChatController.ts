import { ChatAPI } from '../api/ChatAPI';
import store from '../utils/store';
import UserController from './UserController';
import messagesController from './MessagesController';

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
      if (chats) {
        chats.forEach(async (e) => {
          messagesController.connect(e.id);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async addUserTochat(data: Record<string, string>, chatId: number): Promise<void> {
    try {
      const user = await UserController.searchUser(data) as Record<string, string>[];
      if (user && user.length === 1) {
        const chatData = {
          users: [user[0].id],
          chatId,
        };
        await this.api.addUser(chatData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUserFromchat(data: Record<string, string>, chatId: number): Promise<void> {
    try {
      const user = await UserController.searchUser(data) as Record<string, string>[];
      if (user && user.length === 1) {
        const chatData = {
          users: [user[0].id],
          chatId,
        };
        await this.api.deleteUser(chatData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getChatToken(id: number): Promise<number | undefined> {
    try {
      const { token } = await this.api.getChatToken(id);
      return token;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteChat(id: number): Promise<void> {
    try {
      await this.api.deleteChat(id);
      store.set('activeChat', null);
      this.getChats();
      messagesController.closeSocket(id);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatController();
