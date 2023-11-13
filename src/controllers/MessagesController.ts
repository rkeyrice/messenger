import store from '../utils/store';
import { WebSocketClient, SocketEvent } from '../utils/WebSocket';
import ChatController from './ChatController';

export interface Message {
  chat_id: number
  time: string
  type: string
  user_id: string
  content: string
}

class MessagesController {
  private socket: Record<number, WebSocketClient> = {};

  async connect(id: number): Promise<void> {
    if (this.socket[id]) {
      return;
    }

    const token = await ChatController.getChatToken(id);
    const userId = store.getState().user?.id;

    const socket = new WebSocketClient(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`,
    );

    await socket.connect();

    socket.on(SocketEvent.Message, this.setMessage.bind(this, id));
    socket.on(SocketEvent.Close, this.closeSocket.bind(this, id));

    this.socket[id] = socket;
    this.fethOldMessages(id);
  }

  closeSocket(id: number): void {
    this.socket[id].close();
  }

  public setMessage(chatId: number, message: Message | Message[]): void {
    const isMessages = !!Array.isArray(message);

    const messageState = store.getState().messages;
    const oldMessages = (messageState ? messageState[chatId] ?? [] : []);
    if (isMessages) {
      store.set(`messages.${chatId}`, message);
    } else {
      store.set(`messages.${chatId}`, [message, ...oldMessages]);
    }
  }

  public fethOldMessages(id: number): void {
    const transport = this.socket[id];
    transport.send({
      type: 'get old',
      content: '0',
    });
  }

  public async sendMessage(id: number, content: string): Promise<void> {
    try {
      const transport = this.socket[id];
      if (!transport) {
        await this.connect(id);
      }
      transport.send({
        type: 'message',
        content,
      });
    } catch {
      throw new Error('Connection is not establish yet');
    }
  }
}

const messagesController = new MessagesController();

export default messagesController;
